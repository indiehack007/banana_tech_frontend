import { useContext } from "react";
import { UserContext } from "../UserContext";

const CopyComponent = () => {
  const { selectedWebsite, user } = useContext(UserContext);
  // Text to copy
  const textToCopy = `  <script  id="tech_popup" 
  webid="${selectedWebsite._id}" userid="${user._id}"  
  src="https://hospital-management-site.vercel.app/script.js" >
  </script>`;

  // Copy text function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <main className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-3 bg-white rounded-xl border border-solid border-neutral-50 max-md:px-5">
      <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-8 w-full text-xs leading-5 bg-orange-50 rounded-lg max-w-[900px] shadow-[0px_6px_6px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap items-end pl-3.5 w-full text-zinc-900 max-md:max-w-full">
          <div className="flex-1 shrink gap-2.5 py-2 min-w-[240px] max-md:max-w-full">
            {textToCopy.split("\n").map((line, index) => (
              <span key={index}>
                {line} <br />
              </span>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={handleCopy} // Attach copy function to button click
        className="flex gap-2.5 justify-center items-center px-5 py-5 mt-3.5 max-w-full text-2xl font-semibold tracking-tight leading-none text-center text-orange-400 bg-white rounded-xl min-h-[64px] w-[383px]"
      >
        <div className="flex gap-2 items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e32b40bbe0236167318a06b1f1c58ca490f319c551162c0c9faa8a8b37aa4b8?placeholderIfAbsent=true&apiKey=233120abae304e9c99fac79582ad5875"
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[23px]"
            alt=""
          />
          <span className="self-stretch my-auto">Copy Script</span>
        </div>
      </button>
    </main>
  );
};

export default CopyComponent;
