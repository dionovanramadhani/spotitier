type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function ActionBtnGreen({ children, onClick }: Props) {
  return (
    <div className="relative inline-block pr-1.5 pb-1.5">
      {/* Static shadow layer */}
      <div
        className="absolute left-1.5 top-1.5 right-0 bottom-0 bg-[#1B1B1B]"
        aria-hidden="true"
      />
      <button
        onClick={onClick}
        className="relative z-10 block font-bold text-[14px] uppercase bg-[#1DB954] border-4 border-[#1B1B1B] py-2 px-6 tracking-wider cursor-pointer text-[#004118] transition-transform duration-150 ease-out hover:translate-x-1.5 hover:translate-y-1.5 active:translate-x-1.5 active:translate-y-1.5"
      >
        {children}
      </button>
    </div>
  );
}
