import React from "react";
import Title from "./components/title";
import SearchBar from "./components/search-bar";
import Description from "./components/description";

export default function MusicSearch() {
  return (
    <div
      id="explore"
      className="w-full mx-auto flex justify-center items-center font-grotesk py-16 md:py-28 px-4 md:px-0"
    >
      <div className="flex flex-col gap-6 md:gap-10 items-center w-full md:w-auto">
        {/* Title */}
        <Title />
        {/* Search Bar */}
        <SearchBar />
        {/* Description */}
        <Description />
      </div>
    </div>
  );
}
