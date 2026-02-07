"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import RetroBackground from '@/components/RetroBackground';
import Loader from "@/components/Loader";
import { ThemeProvider } from "@/components/theme-provider";






const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        <AnimatePresence>
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <RetroBackground />
                {children}
              </ThemeProvider>
            </>
          )}
        </AnimatePresence>

      </body>
    </html>
  );
}