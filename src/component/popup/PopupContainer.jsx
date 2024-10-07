import PopupItem from "./PopupItem";
import AddPopup from "./AddPopup";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";

function PopupContainer() {
  const navigate = useNavigate();
  const { selectedWebsite, setSelectedTemplate } = useContext(UserContext);
  const dataobj = selectedWebsite || { templates: [] };


  const handleclick = (val) => {
    if (val < 0 || val >= dataobj.templates.length) return; // Check bounds
    const data = dataobj.templates[val];
    setSelectedTemplate(data);
    navigate("/popups");
  };

  useEffect(() => {
    // Reset selected template when selectedWebsite changes
    if (dataobj.templates.length > 0) {
      setSelectedTemplate(dataobj.templates[0]);
    } else {
      setSelectedTemplate(null);
    }
  }, [selectedWebsite]);

  const handleAddnewpopup = () => {
    navigate("/add-new");
  };

  return (
    <main className="flex overflow-hidden flex-col items-center gap-5 px-6 py-8 bg-white rounded-xl max-w-[496px] max-md:px-5">
      {dataobj.templates.length === 0 ? (
        <p>No templates available.</p>
      ) : (
        dataobj.templates.map((item, index) => (
          <PopupItem
            key={index}
            index={index}
            imageSrc={item.imageUrl}
            mainText={item.mainText}
            subText={item.subText}
            onselect={handleclick}
          />
        ))
      )}
      <AddPopup onsel={handleAddnewpopup} />
    </main>
  );
}

export default PopupContainer;
