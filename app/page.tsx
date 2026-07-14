import MusicSearch from "@/components/music-search";
import Trendings from "@/components/trendings";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Rank Your Sound */}
      <MusicSearch />
      {/* Trending Artist */}
      <Trendings />
      {/* Global Top Tiers */}
      {/* Bottom CTA */}
    </div>
  );
}
