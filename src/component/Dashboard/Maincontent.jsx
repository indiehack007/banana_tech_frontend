import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { UserContext } from "../UserContext";
import IndieHackerOS from "../IndieHacker";
import CopyComponent from "./CopyComponent";
import AddWebsitePopup from "./AddWebsitePopup";

// eslint-disable-next-line react/prop-types
const Maincontent = ({ showcopyText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { websites } = useContext(UserContext); // Get websites from UserContext

  // Handle if websites is undefined or null to prevent potential runtime errors
  const websitesList = websites || [];

  const handleAdd = () => {
    setIsModalOpen(true);
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Website Links with Preview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {websitesList.length > 0 ? (
          websitesList.map((link, index) => (
            <IndieHackerOS
              key={index}
              link={link}
              // Pass a reduced height as a prop or inline style
              style={{
                height: "200px", // Custom height for reduced size
                maxHeight: "200px", // Ensure it doesn't exceed a certain height
              }}
            />
          ))
        ) : (
          <p className="col-span-4 text-center">No websites available.</p>
        )}

        <div className="bg-white shadow-md rounded-lg p-9 relative flex flex-col items-center justify-center w-64 mx-auto">
          <button
            onClick={handleAdd}
            className="text-xl font-bold text-gray-500 flex items-center justify-center"
          >
            <FaPlus className="mr-2" /> Add New Website
          </button>
          <AddWebsitePopup
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </div>
      {showcopyText && <CopyComponent />}
    </div>
  );
};

export default Maincontent;
