import { useContext } from "react";
import PopupContainer from "./PopupContainer";
import VideoPopup from "./VideoPopup";
import { UserContext } from "../UserContext";
import PopupDesigner from "./PopupTemplate/PopupDesigner";

const PopupComponenet = () => {
  const { selectedWebsite } = useContext(UserContext);
  return (
    <div className="flex ">
      <PopupContainer />
      {selectedWebsite ? <PopupDesigner /> : <VideoPopup />}
    </div>
  );
};

export default PopupComponenet;
