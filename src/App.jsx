import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./component/UserContext";
import Login, { setDataUser } from "./component/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import { IKContext } from "imagekitio-react";

function App() {
  const { user, setUser, setprofile, setWebsites } = useContext(UserContext);
  const access_token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
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
        const userData = await res.json();
        const data = await setDataUser(userData[0]);
        setWebsites(data);
        setprofile(userData[1].picture);
        setUser(userData[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (access_token) fetchUserData();
  }, []);
  const publicKey = "public_dzJdiMzPbcGgLK52WqIHfQVo+p4=";
  const urlEndpoint = "https://ik.imagekit.io/k0gaattpk";
  const authenticator = async () => {
    try {
      // You can also pass headers and validate the request source in the backend, or you can use headers for any other use case.
      const headers = {
        Authorization: "Bearer your-access-token",
        CustomHeader: "CustomValue",
      };
      const response = await fetch("https://banana-tech.onrender.com/auth", {
        headers,
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }
      const data = await response.json();
      const { signature, expire, token } = data;

      return { signature, expire, token };
    } catch (error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <div className={access_token && !user ? "bottom-center" : ""}>
        {access_token && !user ? <h6>Logging in ...</h6> : null}
      </div>

      <Routes>
        <Route path="/*" element={user ? <Dashboard /> : <Login />} />
      </Routes>
    </IKContext>
  );
}

export default App;
