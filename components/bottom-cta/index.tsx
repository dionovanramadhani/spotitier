"use client";

import { SampleAlbum1, SampleAlbum2, SampleAlbum3 } from "@/lib/images";
import Image from "next/image";
import { motion } from "framer-motion";

const avatars = [SampleAlbum1, SampleAlbum2, SampleAlbum3];

export default function BottomCTA() {
  return (
    <section className="bg-[#1DB954] border-t-[6px] border-[#1B1B1B] px-6 md:px-16 py-16 md:py-24 font-grotesk flex flex-col items-center gap-10 md:gap-12">
      {/* Headline */}
      <h2 className="uppercase font-black text-[32px] md:text-[64px] text-[#1B1B1B] text-center leading-tight max-w-7xl">
        Ready to Declare Your Taste?
      </h2>

      {/* CTA row: button + social proof */}
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
        {/* White CTA Button with shadow */}
        <div className="relative pr-2 pb-2">
          {/* Shadow layer */}
          <div
            className="absolute left-2 top-2 right-0 bottom-0 bg-[#1B1B1B]"
            aria-hidden="true"
          />
          <motion.button
            className="relative z-10 font-black text-[14px] md:text-[24px] uppercase bg-white border-4 border-[#1B1B1B] py-3 px-8 tracking-wider cursor-pointer text-[#1B1B1B] transition-transform duration-150 ease-out"
            whileHover={{ x: 8, y: 8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            Start Ranking Now
          </motion.button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center">
            {/* Stacked avatars */}
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="w-9 h-9 md:w-12 md:h-12 rounded-full border-[3px] border-[#1B1B1B] overflow-hidden -ml-3 first:ml-0"
                style={{ zIndex: avatars.length - i }}
              >
                <Image
                  src={avatar}
                  alt={`curator-${i}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            ))}
            {/* Count badge */}
            <div className="w-9 h-9 md:w-12 md:h-12 rounded-full border-[3px] border-[#1B1B1B] bg-[#1B1B1B] flex items-center justify-center -ml-3 text-white font-bold text-[10px] md:text-[11px]">
              50k+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
