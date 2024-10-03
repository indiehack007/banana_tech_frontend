
// eslint-disable-next-line react/prop-types
function PopupItem({ imageSrc, mainText, subText, onselect, index }) {

  return (
    <section
      onClick={() => onselect(index)}
      className="flex flex-col cursor-pointer justify-center px-2.5 py-3 w-full rounded-xl bg-neutral-200 bg-opacity-50 max-w-[446px] min-h-[81px] max-md:max-w-full"
    >
      <div className="flex gap-6 items-center w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square rounded-[32px] w-[58px]"
        />
        <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
          <div className="flex gap-2.5 items-start py-1 w-full">
            <h3 className="flex-1 shrink text-base tracking-tight leading-none basis-0 text-zinc-800">
              {mainText}
            </h3>
          </div>

          <p className="text-xs tracking-normal text-neutral-400">{subText}</p>
        </div>
      </div>
    </section>
  );
}

export default PopupItem;
