import { useContext, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { UserContext } from "../UserContext";
import IndieHackerOS from "../IndieHacker";
import CopyComponent from "./CopyComponent";

// eslint-disable-next-line react/prop-types
const Maincontent = ({ showcopyText }) => {
  const { websites } = useContext(UserContext);
  console.log(websites,"websites")
  const handleAdd = () => {
    console.log("Add new website");
  };
  useEffect(() => {
    
  }, [websites])
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Website Links with Preview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {websites.map((link, index) => (
          <IndieHackerOS
            key={index}
            link={link}
            // Pass a reduced height as a prop or inline style
            style={{
              height: "200px", // Custom height for reduced size
              maxHeight: "200px", // Ensure it doesn't exceed a certain height
            }}
          />
        ))}

        <div className="bg-white shadow-md rounded-lg p-9 relative flex flex-col items-center justify-center w-64 mx-auto">
          <button
            onClick={handleAdd}
            className="text-xl font-bold text-gray-500 flex items-center justify-center"
          >
            <FaPlus className="mr-2" /> Add New Website
          </button>
        </div>
      </div>
      {showcopyText ? <CopyComponent /> : <></>}
    </div>
  );
};

export default Maincontent;
