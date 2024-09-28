import AddformTemplate from "./AddformTemplate";
import WebsiteaddForm from "./WebsiteaddForm";

const WebsiteForm = () => {
  return (
    <>
      <div className="flex gap-3">
        <AddformTemplate />
        <WebsiteaddForm />
      </div>
    </>
  );
};

export default WebsiteForm;
