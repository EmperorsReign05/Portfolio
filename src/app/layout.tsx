"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import RetroBackground from '@/components/RetroBackground';
import Loader from "@/components/Loader";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Initialize the retro font
const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400", // This font only has one weight
  subsets: ["latin"],
});

/*export const metadata: Metadata = {
  title: "Mohammad Alman Farooqui | Portfolio", // It's a good time to update your title!
  description: "Front-end Developer and CS Student",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased`}
      >
        <AnimatePresence>
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <>
              <RetroBackground />
              {children}
            </>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}