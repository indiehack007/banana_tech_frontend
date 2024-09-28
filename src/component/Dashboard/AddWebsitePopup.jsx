// AddWebsitePopup.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AddWebsitePopup = ({ isOpen, onClose }) => {
  const [newWebsite, setNewWebsite] = useState("");
  const navigate = useNavigate();

  const handleAddWebsiteSubmit = (e) => {
    e.preventDefault();
    
    // First navigate to the new page, then close the popup
    navigate("/add-website", { state: { website: newWebsite } });
    onClose(); // Ensure this is called after navigation
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-lg font-bold mb-4">Add Your Website</h2>
          <form onSubmit={handleAddWebsiteSubmit}>
            <input
              type="text"
              value={newWebsite}
              onChange={(e) => setNewWebsite(e.target.value)}
              placeholder="Enter website URL"
              className="border border-gray-300 p-2 w-full rounded mb-4"
            />
            <div className="flex justify-between">
              <button
                type="button"
                className="text-red-500 font-semibold"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddWebsitePopup;
