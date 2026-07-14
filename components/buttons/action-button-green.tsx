type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function ActionBtnGreen({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="relative z-10 block font-bold text-[14px] uppercase bg-[#1DB954] border-4 border-[#1B1B1B] py-2 px-6 tracking-wider cursor-pointer text-[#004118] transition-transform duration-150 ease-out hover:-translate-y-1.5 active:translate-x-2 active:translate-y-2.5"
    >
      {children}
    </button>
  );
}
