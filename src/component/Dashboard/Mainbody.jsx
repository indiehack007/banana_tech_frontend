import { Route, Routes, useNavigate } from "react-router-dom";
import Maincontent from "./Maincontent";
import Sidebar from "./Sidebar";
import PopupComponenet from "../popup/PopupComponenet";
import AddnewPoup from "../popup/PopupTemplate/AddnewPoup";
import { useState } from "react";
import WebsiteForm from "./WebsiteAddition.jsx/WebsiteForm";

const Mainbody = () => {
  const [showcopyText, setshowcopyText] = useState(false);
  const navigate = useNavigate();
  const handleCopyClick = () => {
    setshowcopyText((i) => {
      return !i;
    });
    navigate("/");
  };
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/5 bg-white p-4" style={{ height: "90vh" }}>
        <Sidebar fun={handleCopyClick} />
      </div>
      <div className="w-4/5 p-4">
        <Routes>
          <Route
            path="/"
            element={<Maincontent showcopyText={showcopyText} />}
          />
          <Route path="popups" element={<PopupComponenet />} />
          <Route path="add-new" element={<AddnewPoup />} />
          <Route path="add-website" element={<WebsiteForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default Mainbody;
