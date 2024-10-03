import { useEffect, useState } from "react";
import VideoTitle from "./VideoTitle";
import VideoPlayer from "./VideoPlayer";

function VideoPopup() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setShowAnimation(true);
  }, []);

  return (
    <section
      className={`flex overflow-hidden flex-col items-center px-20 pt-32 pb-80 bg-white rounded-xl max-w-[785px] max-md:px-5 max-md:py-24 ${
        showAnimation ? "show-animation" : ""
      }`}
    >
      <div className="flex flex-col w-full max-w-[534px] max-md:max-w-full">
        <VideoTitle />
        <VideoPlayer />
      </div>
    </section>
  );
}

export default VideoPopup;
