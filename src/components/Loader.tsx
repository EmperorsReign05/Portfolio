"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2; // Speed of loading
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -50, // Slide up like a curtain
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Retro TV Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-10 pointer-events-none" />

      <div className="flex flex-col items-center gap-8 z-10">

        {/* "WORLD 1-1" Style Header */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-widest text-white" style={{ fontFamily: "var(--font-press-start-2p)" }}>
            WORLD 1-1
          </h2>
          <p className="text-sm md:text-base font-mono text-gray-400">
            PORTFOLIO_ZONE
          </p>
        </div>

        {/* Middle Icon / Avatar */}
        <div className="relative">
          <div className="size-20 bg-transparent border-4 border-white flex items-center justify-center mb-2 shadow-[4px_4px_0px_white]">
            <Gamepad2 className="size-10 text-white animate-bounce" />
          </div>
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-lg font-bold" style={{ fontFamily: "var(--font-press-start-2p)" }}>x</span>
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-press-start-2p)" }}>03</span>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="w-64 flex flex-col items-center gap-2 mt-8">
          <div className="w-full h-4 border-2 border-white p-1">
            <div
              className="h-full bg-white transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs font-mono animate-pulse">
            LOADING... {progress}%
          </p>
        </div>

      </div>

      {/* Footer Text */}
      <div className="absolute bottom-10 text-[10px] md:text-xs text-gray-500 font-mono">
        © 2026 ALMAN GAMES NINTENDO CORP.
      </div>

    </motion.div>
  );
}