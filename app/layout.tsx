import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotitier",
  description:
    "An interactive web application that revolutionizes the way music enthusiasts explore and interact with the discography of their favorite artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-grotesk h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
