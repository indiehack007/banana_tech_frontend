import { useState, useContext, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { UserContext } from "../UserContext";
import AddWebsitePopup from "./AddWebsitePopup";
import { useNavigate } from "react-router-dom";

// Remove setheader or handle it inside the component if necessary
const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    websites,
    profile,
    setSelectedWebsite,
    selectedOption,
    setSelectedOption,
  } = useContext(UserContext);
  const website = websites?.map((websiteData) => websiteData.website) || [];

  useEffect(() => {
    if (selectedOption) {
      const data = getWebsiteDataByURL(selectedOption);
      setSelectedWebsite(data);
    }
    if (websites?.length > 0) {
      setSelectedOption(websites[0].website);
    }
  }, [selectedOption, setSelectedWebsite, websites]);

  const getWebsiteDataByURL = (url) => {
    return websites?.find((websiteData) => websiteData.website === url);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const data = getWebsiteDataByURL(option);
    setSelectedWebsite(data);
    setIsDropdownOpen(false);
    // navigate("/popups");
  };

  return (
    <header className="flex justify-between items-center py-2 px-5 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://www.dropbox.com/scl/fo/zkqs1jtuer7o7iwp9ik05/ABT-h4HnRGy5BUp_BWCR2h8?rlkey=t4um2axfuzvjzii1uz21ieta9&e=2&st=tdhcu35k&dl=0"
          alt="Logo"
          className="w-10 h-auto mr-2"
        />
        <h1
          onClick={() => navigate("/")}
          className="text-xl font-bold cursor-pointer"
        >
          Popup that Converts
        </h1>
      </div>

      <div className="flex items-center">
        <nav className="flex items-center space-x-5">
          <a
            href="https://popupthatconverts.features.vote/board"
            className="no-underline text-black font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vote for Features
          </a>

          <a href="/help" className="no-underline text-black font-medium">
            Help
          </a>
          <a href="/upgrade" className="no-underline text-black font-medium">
            Upgrade
          </a>

          <div className="relative">
            <button
              className="flex items-center cursor-pointer text-black font-medium"
              onClick={toggleDropdown}
            >
              <span>{selectedOption}</span>
              <FaAngleDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  {website.length > 0 ? (
                    website.map((link, index) => (
                      <button
                        key={index}
                        className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                        onClick={() => handleOptionSelect(link)}
                      >
                        {link}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-sm text-black">
                      No websites available
                    </div>
                  )}
                  <div className="border-t border-gray-200 my-1" />
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                    onClick={() => setIsModalOpen(true)} // Open the popup
                  >
                    Add Your Website
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center ml-5">
          <img
            src={profile || "/default-profile.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* Render the AddWebsitePopup component */}
      <AddWebsitePopup
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
