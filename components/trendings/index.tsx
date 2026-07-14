import {
  SampleAlbum1,
  SampleAlbum2,
  SampleAlbum3,
  SampleAlbum4,
  SampleAlbum5,
} from "@/lib/images";
import Image from "next/image";
import AlbumItem from "./albumItem";

const albumItems = [
  {
    albumName: "lorem ipsum",
    artist: "The Weeknd",
    cover: SampleAlbum1,
    additionalDescription: "Ranked in 12,402 tier lists this week.",
  },
  {
    albumName: "lorem ipsum",
    artist: "Lana del Rey",
    cover: SampleAlbum2,
  },
  {
    albumName: "lorem ipsum",
    artist: "Kendrick Lamar",
    cover: SampleAlbum3,
  },
  {
    albumName: "lorem ipsum",
    artist: "Fred Again..",
    cover: SampleAlbum4,
  },
  {
    albumName: "lorem ipsum",
    artist: "Erykah Badu",
    cover: SampleAlbum5,
  },
];

export default function Trendings() {
  return (
    <div className="border-t-[6px] border-b-[6px] border-[#1B1B1B] bg-[#F9F9F9] px-6 md:px-10 py-12 md:py-20 font-grotesk flex flex-col gap-8 md:gap-12">
      {/* Title */}
      <h2 className="uppercase font-bold text-[24px]/none md:text-[32px]/none text-[#1B1B1B] border-b-8 border-[#1DB954] w-fit">
        trending artist
      </h2>

      {/* Mobile & Tablet: grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {albumItems.map((item, index) => (
          <AlbumItem
            key={index}
            albumName={item.albumName}
            artist={item.artist}
            cover={item.cover}
            additionalDescription={item.additionalDescription}
            isSecondGrid={index > 0}
          />
        ))}
      </div>

      {/* Desktop: Featured left + 2x2 right */}
      <div className="hidden lg:grid grid-cols-2 gap-6 w-[80%] mx-auto">
        {/* Left - featured */}
        <AlbumItem
          albumName={albumItems[0].albumName}
          artist={albumItems[0].artist}
          cover={albumItems[0].cover}
          additionalDescription={albumItems[0].additionalDescription}
        />

        {/* Right - 2x2 grid */}
        <div className="grid grid-cols-2 gap-6">
          {albumItems.slice(1).map((item, index) => (
            <AlbumItem
              key={index}
              albumName={item.albumName}
              artist={item.artist}
              cover={item.cover}
              additionalDescription={item.additionalDescription}
              isSecondGrid
            />
          ))}
        </div>
      </div>
    </div>
  );
}
