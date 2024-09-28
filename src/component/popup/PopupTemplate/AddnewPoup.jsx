import { useState, useEffect, useContext } from "react";
import PopupContainer from "../PopupContainer";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function AddnewPoup() {
  const { websites, selectedWebsite, user, setWebsites } =
    useContext(UserContext);
  const navigate = useNavigate();
  const popupData = {
    mainText: "",
    subText: "",
    popupLocation: "top-left",
    bgColor: "#ffffff",
    mainTextColor: "#0000000",
    subtextColor: "#000000",
    borderColor: "#000000",
    triggerEvent: 0,
    disappearTime: 0,
    linkToRedirect: "",
    imageUrl: "",
    typeOfFeature: "awareness",
    stripeApi: "",
    analytics: {
      clicks: 0,
      views: 0,
    },
  };

  const jsonData = popupData;
  const [formData, setFormData] = useState(jsonData);
  const [radio, setRadio] = useState(
    formData.triggerEvent === 0 ? "onLoad" : "onScroll"
  );
  const dropdownOptions = [
    { label: "Top Left", value: "top-left" },
    { label: "Top Right", value: "top-right" },
    { label: "Bottom Left", value: "bottom-left" },
    { label: "Bottom Right", value: "bottom-right" },
  ];

  const radioOptions = [
    { label: "On load", value: "onLoad" },
    { label: "On Scroll", value: "onScroll" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value) => {
    setRadio(value);
    setFormData((prev) => ({
      ...prev,
      triggerEvent: value === "onLoad" ? 0 : 1,
      popupTrigger: value === "onLoad" ? "" : prev.popupTrigger,
    }));
  };
  const getWebsiteDataByURL = (url) => {
    return websites?.find((websiteData) => websiteData.website === url);
  };
  const handleAction = async () => {
    try {
      const response = await fetch(
        "https://banana-tech.onrender.com/api/v1/template",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      const website = selectedWebsite.website;
      const templates = result._id;
      const API2 = `https://banana-tech.onrender.com/api/v1/user/${user._id}/websites/templates`;

      const response2 = await fetch(API2, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website,
          templates,
        }),
      });
      if (!response2.ok) {
        throw new Error("Network response was not ok 12");
      }
      const url = `https://banana-tech.onrender.com/api/v1/template/${result._id}`; // Assuming temp is an object with _id
      const data = await fetch(url);
      if (!response.ok) throw new Error(`Error fetching template`);
      const fetchedData = await data.json();
      setWebsites((prev) => {
        const prevdata = prev;
        const webSiteWithArray = prevdata.find((id) => id.website === website);
        webSiteWithArray.templates.push(fetchedData);
        return prevdata;
      });
      console.log(getWebsiteDataByURL(website));
      // setSelectedWebsite();
      alert("Form submitted");
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (formData.triggerEvent === 0) {
      setRadio("onLoad");
    } else {
      setRadio("onScroll");
    }
  }, [formData.triggerEvent]);

  return (
    <div className="flex">
      <PopupContainer />
      <main className="flex overflow-hidden flex-col items-start px-20 pt-8 bg-white rounded-xl border border-orange-400 border-dashed max-w-[765px] max-md:px-5">
        <section className="flex flex-col justify-between items-start py-10 pl-7 w-full bg-white rounded-md max-md:pl-5 max-md:max-w-full">
          <h2 className="flex-1 shrink gap-3.5 self-stretch text-base font-semibold h-[15px] text-ellipsis text-zinc-900 max-md:mr-2.5 max-md:max-w-full">
            What will your website visitors see?
          </h2>
          <div className="flex flex-wrap gap-0 items-center mt-5 text-sm whitespace-nowrap text-slate-500">
            <div className="flex flex-col mt-7 w-full max-md:max-w-full">
              <label className="sr-only">Primary Text</label>
              <div className="flex-1 shrink gap-3.5 self-stretch px-3.5 py-2.5 w-full max-w-[800px] rounded-md border-gray-300 border-solid border-[1.7px] min-h-[50px] text-ellipsis">
                <input
                  type="text"
                  name="mainText"
                  placeholder="Primary Text"
                  value={formData.mainText}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-500"
                  aria-label="Primary Text"
                />
              </div>
            </div>

            <div className="flex flex-col mt-7 w-full max-md:max-w-full">
              <label className="sr-only">Secondary Text</label>
              <div className="flex-1 shrink gap-3.5 self-stretch px-3.5 py-2.5 w-full max-w-[800px] rounded-md border-gray-300 border-solid border-[1.7px] min-h-[50px] text-ellipsis">
                <input
                  type="text"
                  name="subText"
                  placeholder="Secondary Text"
                  value={formData.subText}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-500"
                  aria-label="Secondary Text"
                />
              </div>
            </div>

            <div className="flex flex-col mt-7 w-full max-md:max-w-full">
              <label className="sr-only">Upload Image</label>
              <div className="flex-1 shrink gap-3.5 self-stretch px-3.5 py-2.5 w-full max-w-[800px] rounded-md border-gray-300 border-solid border-[1.7px] min-h-[50px] text-ellipsis">
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Upload Image URL"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full bg-transparent text-sm text-slate-500"
                  aria-label="Upload Image URL"
                />
              </div>
            </div>
          </div>

          <h2 className="flex-1 shrink gap-3.5 self-stretch text-base font-semibold whitespace-nowrap h-[15px] text-ellipsis text-zinc-900 max-md:mr-2.5 max-md:max-w-full mt-9">
            When will users see it?
          </h2>
          <div className="flex flex-col mt-5 w-full max-md:max-w-full ">
            <div className="flex gap-10 max-w-full w-[363px]">
              {radioOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex flex-1 gap-2 items-center"
                >
                  <input
                    type="radio"
                    id={option.value}
                    name="triggerEvent"
                    value={option.value}
                    className="w-4 h-4 bg-white border border-solid border-slate-300 rounded-[100px]"
                    checked={radio === option.value}
                    onChange={() => handleRadioChange(option.value)}
                  />
                  <label
                    htmlFor={option.value}
                    className="flex-1 shrink gap-2.5 text-sm leading-none text-gray-900"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-0 items-center mt-5 text-sm whitespace-nowrap text-slate-500">
              <label
                htmlFor="popupTrigger"
                className="self-stretch my-auto text-ellipsis w-[321px]"
              >
                When should popup trigger
              </label>
              <div className={`flex flex-col mt-7 w-full max-md:max-w-full`}>
                <input
                  id="popupTrigger"
                  name="popupTrigger"
                  placeholder="percentage of scroll"
                  value={formData.popupTrigger}
                  onChange={handleChange}
                  disabled={radio === "onLoad"}
                  className="flex-1 shrink gap-3.5 self-stretch px-3.5 py-2.5 w-full rounded-md border-gray-300 border-solid border-[1.7px] min-h-[50px] text-ellipsis"
                  aria-label="Popup Trigger"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-0 items-center mt-5 text-sm whitespace-nowrap text-slate-500">
            <label
              htmlFor="disappearTime"
              className="self-stretch my-auto text-ellipsis w-[321px]"
            >
              Disappear Time (ms)
            </label>
            <div className={`flex flex-col mt-7 w-full max-md:max-w-full`}>
              <input
                id="disappearTime"
                name="disappearTime"
                placeholder="Enter Disappear Time (ms)"
                value={formData.disappearTime}
                onChange={handleChange}
                className="flex-1 shrink gap-3.5 self-stretch px-3.5 py-2.5 w-full rounded-md border-gray-300 border-solid border-[1.7px] min-h-[50px] text-ellipsis"
                aria-label="Disappear Time"
                type="number"
              />
            </div>
          </div>

          <h2 className="flex-1 shrink gap-3.5 self-stretch text-base font-semibold h-[15px] text-ellipsis text-zinc-900 max-md:mr-2.5 max-md:max-w-full mt-9">
            Where will users see it?
          </h2>
          <div className="flex flex-col justify-center mt-5 w-full max-md:max-w-full">
            {["Appears from"].map((label, index) => (
              <div
                key={index}
                className="flex flex-col justify-center mt-5 w-full text-sm whitespace-nowrap text-slate-500 max-md:max-w-full"
              >
                <label
                  htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
                  className="my-auto text-ellipsis"
                >
                  {label}
                </label>
                <select
                  id={label.replace(/\s+/g, "-").toLowerCase()}
                  name="popupLocation"
                  onChange={handleChange}
                  value={formData.popupLocation}
                  className="flex gap-6 items-center py-1 pr-3.5 pl-3.5 w-full rounded-md border-gray-300 border-solid border-[1.7px] min-h-[37px]"
                >
                  {dropdownOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <h2 className="flex-1 shrink gap-3.5 self-stretch text-base font-semibold whitespace-nowrap h-[15px] text-ellipsis text-zinc-900 max-md:mr-2.5 max-md:max-w-full mt-9">
            Appearance
          </h2>
          <div className="flex flex-col pl-3.5 mt-6 max-md:max-w-full">
            <div className="flex flex-col justify-center max-w-full w-[329px]">
              <div className="flex gap-5 justify-between py-0.5 w-full">
                <label htmlFor="subtextColor" className="my-auto text-ellipsis">
                  Secondary Text Color
                </label>
                <input
                  type="color"
                  id="subtextColor"
                  name="subtextColor"
                  className="w-10 h-10 rounded-md border-gray-300 border-solid border-[1.7px] cursor-pointer"
                  aria-label="Secondary Text Color"
                  value={formData.subtextColor}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center max-w-full w-[329px]">
              <div className="flex gap-5 justify-between py-0.5 w-full">
                <label
                  htmlFor="mainTextColor"
                  className="my-auto text-ellipsis"
                >
                  Main Text Color
                </label>
                <input
                  type="color"
                  id="mainTextColor"
                  name="mainTextColor"
                  className="w-10 h-10 rounded-md border-gray-300 border-solid border-[1.7px] cursor-pointer"
                  aria-label="Main Text Color"
                  value={formData.mainTextColor}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center max-w-full w-[329px]">
              {/* <div className="flex gap-5 justify-between py-0.5 w-full">
                <label htmlFor="borderColor" className="my-auto text-ellipsis">
                  Border Color
                </label>
                <input
                  type="color"
                  id="borderColor"
                  name="borderColor"
                  className="w-10 h-10 rounded-md border-gray-300 border-solid border-[1.7px] cursor-pointer"
                  aria-label="Border Color"
                  value={formData.borderColor}
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <div className="flex flex-col justify-center max-w-full w-[329px]">
              <div className="flex gap-5 justify-between py-0.5 w-full">
                <label htmlFor="bgColor" className="my-auto text-ellipsis">
                  Background Color
                </label>
                <input
                  type="color"
                  id="bgColor"
                  name="bgColor"
                  className="w-10 h-10 rounded-md border-gray-300 border-solid border-[1.7px] cursor-pointer"
                  aria-label="Background Color"
                  value={formData.bgColor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 self-stretch mt-9 w-full text-base font-bold tracking-tight leading-none text-center text-orange-400 rounded-xl max-w-[568px] max-md:max-w-full">
            <button
              onClick={() => handleAction()}
              className="flex-auto gap-2.5 self-stretch px-5 py-4 bg-white rounded-xl border border-orange-400 border-solid min-h-[52px] text-base font-bold tracking-tight leading-none text-center text-orange-400"
            >
              Save
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AddnewPoup;
