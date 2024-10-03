import { useGoogleLogin } from "@react-oauth/google";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { FaGoogle } from "react-icons/fa"; // Importing Google icon
export const setDataUser = async (data) => {
  try {
    const { websites } = data;

    // Use Promise.all to wait for all fetch operations to complete
    const fetchPromises = websites.map(async (website) => {
      // Map through each template and fetch its data
      const templatePromises = website.templates.map(async (template) => {
        const url = `https://banana-tech.onrender.com/api/v1/template/${template}`; // Assuming temp is an object with _id
        const response = await fetch(url);

        // Handle fetch errors
        if (!response.ok)
          throw new Error(`Error fetching template ${template._id}`);

        // Parse and return the fetched data
        const fetchedData = await response.json();
        return fetchedData; // Return the fetched data for this template
      });

      // Wait for all template promises to resolve
      const fetchedTemplates = await Promise.all(templatePromises);

      // Return the website object with the fetched templates
      return {
        ...website, // Spread the original website object
        templates: fetchedTemplates, // Replace the original templates with the fetched data
      };
    });

    // Wait for all website promises to resolve
    const updatedWebsites = await Promise.all(fetchPromises);

    return updatedWebsites;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { setUser, setprofile, setWebsites } = useContext(UserContext);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      const { access_token } = response;
      console.log(response);

      try {
        setLoading(true);
        const res = await fetch(
          "https://banana-tech.onrender.com/api/v1/googleuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ access_token }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await res.json();
        const dataFetched = await setDataUser(userData[0]);
        localStorage.setItem("accessToken", access_token);
        setWebsites(dataFetched);
        setprofile(userData[1].picture);
        setUser(userData[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error storing user data:", error);
        alert("Error logging in. Please try again.");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
      alert("Google login failed. Please try again.");
    },
  });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-white shadow-lg rounded-3xl p-10 w-96 border border-orange-300">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Welcome Back!
          </h2>
          <h3 className="text-xl text-center text-gray-600 mb-4">
            Please login with your Google account
          </h3>
          <button
            onClick={login}
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-full flex items-center justify-center hover:bg-orange-700 transition duration-300 transform hover:scale-105"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
        <div className="bottom-center">
          {loading ? <h6>Logging in...</h6> : <></>}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
