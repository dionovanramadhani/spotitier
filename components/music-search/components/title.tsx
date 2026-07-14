export default function Title() {
  return (
    <h1 className="uppercase text-[#1B1B1B] text-[40px] md:text-[64px] font-bold text-center">
      rank your{" "}
      <span className="relative inline-block pr-2 pb-2.5 group cursor-pointer">
        {/* Static shadow layer */}
        <span
          className="absolute left-2 top-2.5 right-0 bottom-0 bg-[#1B1B1B]"
          aria-hidden="true"
        />
        <span className="relative px-4 py-1.25 bg-[#1DB954] border-[6px] border-[#1B1B1B] inline-block transition-transform duration-200 ease-out group-hover:translate-x-2 group-hover:translate-y-2.5">
          sound
        </span>
      </span>
    </h1>
  );
}
