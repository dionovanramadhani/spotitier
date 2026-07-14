import { StaticImageData } from "next/image";

export type NavbarMenu = "explore" | "community" | "tiers";

export type TierRowData = {
  tier: string;
  color: string;
  albums: StaticImageData[];
  moreCount: number;
  consensus: number;
};
