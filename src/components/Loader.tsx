"use client";

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#87CEEB]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p 
        className="text-2xl text-black mb-4"
        style={{ fontFamily: "var(--font-press-start-2p)" }}
      >
        Loading...
      </p>

      <div className="w-64 h-6 border-2 border-black rounded-full overflow-hidden bg-white/30">
      
        <motion.div
          className="h-full bg-green-500"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}