"use client";

import { Logo } from "@/lib/images";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ActionBtnGreen from "./buttons/action-button-green";

const NAV_ITEMS = [
  { menuTitle: "explore", path: "#", available: true },
  { menuTitle: "community", path: "#", available: false },
  { menuTitle: "tiers", path: "#", available: false },
] as const;

// Animation variants
const navbarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" as const },
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 z-50 w-full border-b-[6px] border-[#1B1B1B] "
    >
      {/* Main bar */}
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={Logo} alt="Spotitier logo" width={40} loading="eager" />
          <span className="font-bold text-2xl md:text-[32px] tracking-tighter text-[#1B1B1B]">
            SPOTITIER
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 text-[16px] uppercase tracking-tight">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.menuTitle}
              custom={i}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={item.path}
                className={
                  item.available
                    ? "relative font-bold text-[#006E2D] hover:text-[#1DB954] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#006E2D] after:origin-center after:scale-x-100 hover:after:bg-[#1DB954] after:transition-all after:duration-200 pb-3"
                    : "relative font-medium text-[#3D4A3D] hover:text-[#4a5e4a] transition-colors duration-200 pb-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#9CA3AF] after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
                }
                aria-disabled={!item.available}
              >
                {item.menuTitle}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop login button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="hidden md:block relative pr-2 pb-2.5"
        >
          {/* Static shadow layer */}
          <div
            className="absolute left-2 top-2.5 right-0 bottom-0 bg-[#1B1B1B]"
            aria-hidden="true"
          />
          <ActionBtnGreen onClick={() => {}}>login with spotify</ActionBtnGreen>
        </motion.div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          className="flex md:hidden flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-[#1B1B1B] rounded-full origin-center"
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-[#1B1B1B] rounded-full"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block w-6 h-0.5 bg-[#1B1B1B] rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden overflow-hidden border-t-4 border-[#1B1B1B] bg-white"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 uppercase tracking-tight text-[16px]">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.menuTitle}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      item.available
                        ? "text-[#006E2D] font-bold border-b-4 border-[#006E2D] pb-0.5"
                        : "text-[#3D4A3D] font-medium opacity-50 cursor-not-allowed pointer-events-none"
                    }
                    aria-disabled={!item.available}
                  >
                    {item.menuTitle}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-6 pb-5">
              <div className="relative pr-1.5 pb-2">
                {/* Static shadow layer */}
                <div
                  className="absolute left-1.5 top-2 right-0 bottom-0 bg-[#1B1B1B]"
                  aria-hidden="true"
                />
                <ActionBtnGreen onClick={() => {}}>login with spotify</ActionBtnGreen>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
