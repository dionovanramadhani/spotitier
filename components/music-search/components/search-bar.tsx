"use client";

import ActionBtnGreen from "@/components/buttons/action-button-green";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="w-full md:w-4xl font-grotesk relative pr-3 pb-3">
      {/* Static shadow layer */}
      <div
        className="absolute left-3 top-3 right-0 bottom-0 bg-[#1B1B1B]"
        aria-hidden="true"
      />

      <div className="relative flex items-center z-10 bg-white text-[#1B1B1B] px-3 md:px-5 py-2 md:py-3 border-4 border-[#1B1B1B]">
        <IoIosSearch size={24} className="md:hidden" />
        <IoIosSearch size={32} className="hidden md:block" />
        <input
          className="placeholder:font-bold placeholder:text-[#3D4A3D]/30 placeholder:text-[14px] md:placeholder:text-[24px] flex-1 text-[14px] md:text-[24px] text-[#1B1B1B] p-2 md:p-3 font-semibold outline-none border-none"
          placeholder="SEARCH ARTISTS, ALBUMS, OR GENRES..."
        />
        <ActionBtnGreen onClick={() => {}}>
          <div className="text-[14px] md:text-[18px] font-bold">Go</div>
        </ActionBtnGreen>
      </div>
    </div>
  );
}
