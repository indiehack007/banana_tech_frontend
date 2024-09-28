const AddformTemplate = () => {
  return (
    <section className="flex flex-col justify-center px-2.5 py-7 mt-4 w-full text-base tracking-tight leading-none bg-white rounded-xl border border-orange-400 border-dashed max-w-[446px] max-h-[81px]  min-h-[81px] text-zinc-800 max-md:max-w-[full]">
      <div className="flex gap-6 justify-center items-center w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <button className="gap-2.5 self-stretch py-1 w-full max-md:max-w-full text-left">
            + Add a new popup
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddformTemplate;
