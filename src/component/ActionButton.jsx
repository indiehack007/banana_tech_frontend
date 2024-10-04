import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
function ActionButton({ prop, web, imageSrc, width }) {
  const { setSelectedWebsite, user, setWebsites, websites, setSelectedOption } =
    useContext(UserContext);

  const navigate = useNavigate();
  const getWebsiteDataByURL = (url) => {
    return websites.find((websiteData) => websiteData.website === url);
  };

  const handleNavigate = async () => {
    if (prop === "edit") {
      // eslint-disable-next-line react/prop-types
      const data = getWebsiteDataByURL(web.link.website);
      // eslint-disable-next-line react/prop-types
      setSelectedOption(web.link.website);
      console.log(data);
      setSelectedWebsite(data);
      navigate("/popups");
    } else {
      try {
        // eslint-disable-next-line react/prop-types
        const data = getWebsiteDataByURL(web.link.website);
        const response = await fetch(
          `https://banana-tech.onrender.com/api/v1/user/${user._id}/websites/${data._id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          const updatedWebsites = websites.filter(
            (site) => site._id !== data._id
          );
          setWebsites(updatedWebsites);
          navigate("/");
        } else {
          throw new Error("Failed to delete the website");
        }
      } catch (error) {
        console.error("Error deleting the website:", error);
        alert("Failed to delete the website");
      }
    }
  };

  return (
    <button
      onClick={handleNavigate}
      className="flex gap-2.5 justify-center items-center p-2.5 bg-white rounded border border-gray-300 border-solid"
      style={{ width }}
    >
      <img
        loading="lazy"
        src={imageSrc}
        alt=""
        className="object-contain self-stretch my-auto w-6 aspect-square"
      />
    </button>
  );
}

export default ActionButton;
