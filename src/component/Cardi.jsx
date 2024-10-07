// eslint-disable-next-line react/prop-types
function Cardi({ web }) {
  return (
    <div className="flex flex-col pb-4 w-full bg-white rounded-xl min-h-[200px]">
      <iframe
        loading="lazy"
        // eslint-disable-next-line react/prop-types
        // src={web.link.website}
        src={
          "https://miro.medium.com/v2/resize:fit:1200/1*2IgoP7ZhFeqQiPO7zx_J9g.jpeg"
        }
        className="object-contain self-center w-full rounded-xl aspect-[1.49]"
      />

      <div className="flex flex-col mt-6 w-full whitespace-nowrap">
        <div className="flex flex-col w-full">
          <div className="flex gap-1 items-center w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px]">
              <p className="text-sm text-ellipsis text-slate-500">
                {web.link.website}
              </p>

              <h2 className="text-base font-semibold text-ellipsis text-zinc-900"></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardi;
