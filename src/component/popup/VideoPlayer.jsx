
function VideoPlayer() {
  return (
    <div className="flex gap-3 justify-center items-center mt-28 bg-white rounded-xl h-[267px] max-md:mt-10">
      <div className="flex overflow-hidden flex-col self-stretch pt-48 my-auto rounded-lg min-w-[240px] w-[560px] max-md:pt-24">
        <div className="flex flex-col px-3 pt-24 pb-3 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d0931dc3340a715e0aa4f8e18bf93fadeee4c539095322985f9ba705225dab?placeholderIfAbsent=true&apiKey=233120abae304e9c99fac79582ad5875"
            alt="Video tutorial on how to use popups"
            className="object-contain w-full rounded-lg aspect-[34.48] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
