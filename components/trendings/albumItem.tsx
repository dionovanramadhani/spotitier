"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Props = {
  cover: StaticImageData;
  artist: string;
  albumName: string;
  additionalDescription?: string;
  isSecondGrid?: boolean;
};

export default function AlbumItem({
  cover,
  artist,
  albumName,
  additionalDescription,
  isSecondGrid,
}: Props) {
  return (
    <motion.div
      className="border-[6px] border-[#1B1B1B] flex flex-col items-start p-4 md:p-6 gap-4 md:gap-6 cursor-pointer overflow-hidden group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Album Cover with zoom on hover */}
      <div className="w-full overflow-hidden">
        <Image
          src={cover}
          alt={`cover-${artist}`}
          loading="eager"
          className="w-full transition-transform duration-300 ease-out group-hover:scale-105 border-[5px] border-[#1B1B1B]"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h2
          className={`uppercase font-bold text-[#1B1B1B] ${
            isSecondGrid
              ? "text-[14px]/none md:text-[18px]/none"
              : "text-[20px]/none md:text-[32px]/none"
          }`}
        >
          {artist}
        </h2>
        <p
          className={`${
            isSecondGrid ? "text-[12px] md:text-[16px]" : "text-[14px] md:text-[18px]"
          } text-[#3D4A3D] font-semibold`}
        >
          {albumName}
        </p>
        {additionalDescription && (
          <p
            className={`${
              isSecondGrid ? "text-[12px] md:text-[14px]" : "text-[13px] md:text-[16px]"
            } text-[#1DB954] font-semibold mt-1`}
          >
            {additionalDescription}
          </p>
        )}
      </div>
    </motion.div>
  );
}
