import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { TierRowData } from "@/types/types";

export default function TierRow({
  tier,
  color,
  albums,
  moreCount,
  consensus,
}: TierRowData) {
  return (
    <div className="relative pr-3 pb-3">
      {/* Static shadow layer */}
      <div
        className="absolute left-3 top-3 right-0 bottom-0 bg-[#1B1B1B]"
        aria-hidden="true"
      />
      <motion.div
        className="relative z-10 flex border-4 border-[#1B1B1B] overflow-hidden group cursor-pointer"
        whileHover={{ x: 12, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Tier Label */}
        <div
          className="flex items-center justify-center w-16 md:w-24 shrink-0 text-white font-black text-[32px] md:text-[48px] select-none border-r-4 border-[#1B1B1B]"
          style={{ backgroundColor: color }}
        >
          {tier}
        </div>

        {/* Albums area */}
        <div className="flex-1 flex items-center gap-2 md:gap-3 px-3 md:px-5 py-7 bg-white overflow-x-auto md:overflow-hidden scrollbar-none [&::-webkit-scrollbar]:hidden">
          {albums.map((album: any, i: number) => (
            <motion.div
              key={i}
              className="shrink-0 border-4 border-[#1B1B1B] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
            >
              <Image
                src={album}
                alt={`tier-${tier}-album-${i}`}
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-cover"
                loading="eager"
              />
            </motion.div>
          ))}

          {/* More badge */}
          <div
            className="shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border-4 border-[#1B1B1B] font-bold text-white text-[12px] md:text-[14px] tracking-tight"
            style={{ backgroundColor: "#1DB954" }}
          >
            +{moreCount}
          </div>
        </div>

        {/* Consensus */}
        <div className="flex items-center justify-center shrink-0 w-20 md:w-44 border-l-4 border-[#1B1B1B] bg-white px-2 md:px-6">
          <span className="font-bold text-[10px] md:text-[14px] text-[#1B1B1B] tracking-wider uppercase text-center leading-tight">
            {consensus}%<br className="md:hidden" />{" "}
            <span className="hidden md:inline">Consensus</span>
            <span className="md:hidden">Con.</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
