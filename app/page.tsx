import MusicSearch from "@/components/music-search";
import Trendings from "@/components/trendings";
import GlobalTopTiers from "@/components/global-top-tiers";
import BottomCTA from "@/components/bottom-cta";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Rank Your Sound */}
      <MusicSearch />
      {/* Trending Artist */}
      <Trendings />
      {/* Global Top Tiers */}
      <GlobalTopTiers />
      {/* Bottom CTA */}
      <BottomCTA />
    </div>
  );
}
