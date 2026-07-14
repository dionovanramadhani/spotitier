import { Logo } from "@/lib/images";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F4F0E6] border-t-[6px] border-[#1B1B1B]">
      <div className="mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image src={Logo} alt="Spotitier logo" width={36} loading="eager" />
          <span className="font-bold text-2xl tracking-tighter text-[#1B1B1B]">
            SPOTITIER
          </span>
        </div>

        {/* Copyright */}
        <p className="font-medium text-[#3D4A3D] text-[13px] text-center md:text-right">
          © 2026 Spotitier — Built with love for music nerds.
        </p>
      </div>
    </footer>
  );
}
