/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import {
  FaPlus,
  FaChartPie,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ fun }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log(!!localStorage.getItem("accessToken"));
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full">
      <button className="m-4 w-4/5 p-3 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 whitespace-nowrap flex items-center">
        <FaPlus className="mr-2" /> {/* Add icon for the button */}
        Add Your Website
      </button>
      <nav className="flex-grow flex flex-col justify-between">
        <ul>
          <li
            onClick={() => navigate("/popups")}
            className="p-4 cursor-pointer flex items-center"
          >
            <FaClipboardList className="mr-2" /> {/* Icon for Poup */}
            Poup
          </li>
          <li className="p-4 cursor-pointer flex items-center">
            <FaChartPie className="mr-2" /> {/* Icon for Analytics */}
            Analytics
            <span className="ml-2 text-sm text-white bg-blue-500 rounded-full px-2 py-1 glow">
              Upcoming
            </span>
          </li>
          <li onClick={fun} className="p-4 cursor-pointer flex items-center">
            <FaClipboardList className="mr-2" /> {/* Icon for CopyScript */}
            CopyScript
          </li>
        </ul>
        <ul>
          <li className="p-4 cursor-pointer flex items-center">
            {/* <FaCog className="mr-2" /> Icon for Settings */}
            {/* Settings */}
          </li>
          <li
            className="p-4 cursor-pointer flex items-center"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="mr-2" /> {/* Icon for Logout */}
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
