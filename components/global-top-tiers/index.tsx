"use client";

import {
  SampleAlbum1,
  SampleAlbum2,
  SampleAlbum3,
  SampleAlbum4,
  SampleAlbum5,
} from "@/lib/images";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { TierRowData } from "@/types/types";
import TierRow from "./tierRow";

const tiers: TierRowData[] = [
  {
    tier: "S",
    color: "#E91E63",
    albums: [SampleAlbum1, SampleAlbum2, SampleAlbum3, SampleAlbum4],
    moreCount: 82,
    consensus: 98,
  },
  {
    tier: "A",
    color: "#F59E0B",
    albums: [SampleAlbum2, SampleAlbum3, SampleAlbum5],
    moreCount: 156,
    consensus: 84,
  },
  {
    tier: "B",
    color: "#06B6D4",
    albums: [SampleAlbum4, SampleAlbum1],
    moreCount: 312,
    consensus: 72,
  },
];

export default function GlobalTopTiers() {
  return (
    <section className="bg-[#F4F0E6] px-6 md:px-16 py-16 md:py-24 font-grotesk flex flex-col items-center gap-10 md:gap-14">
      {/* Title */}
      <div className="flex flex-col items-center gap-2 md:gap-3 text-center">
        <div className="flex items-center gap-4 md:gap-6">
          <h2 className="uppercase font-bold text-[22px] md:text-[32px] tracking-tight text-[#1B1B1B] border-r-[5px] border-l-[5px] px-4 md:px-8">
            Global Top Tiers
          </h2>
        </div>
        <p className="uppercase font-bold text-[11px] md:text-[18px] text-[#1B1B1B]">
          The community consensus, updated every hour.
        </p>
      </div>

      {/* Tier rows */}
      <div className="flex flex-col gap-4 md:gap-5 w-full max-w-7xl">
        {tiers.map((tierData) => (
          <TierRow key={tierData.tier} {...tierData} />
        ))}
      </div>
    </section>
  );
}
