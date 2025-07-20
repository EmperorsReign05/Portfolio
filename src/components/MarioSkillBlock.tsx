"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

interface MarioSkillBlockProps {
  skillName: string;
  icon: React.ReactNode; 
}

export default function MarioSkillBlock({ skillName, icon }: MarioSkillBlockProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const blockVariants = {
    hidden: { scale: 1 },
    revealed: { 
      scale: 1,
      y: [0, -20, 0],
      transition: { duration: 0.3 }
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    revealed: { opacity: 1, y: 0, transition: { delay: 0.1 } },
  };

  return (
    <div 
      className="flex flex-col items-center gap-2 cursor-pointer"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <motion.div
        className="relative w-24 h-24 bg-[#FBD000] border-4 border-black rounded-md flex items-center justify-center overflow-hidden"
        variants={blockVariants}
        animate={isRevealed ? "revealed" : "hidden"}
      >
     
        {!isRevealed && (
            <span className="text-5xl font-bold text-white select-none">?</span>
        )}

        <motion.div 
  className="flex flex-col items-center justify-center gap-1 text-black"
  variants={contentVariants}
  animate={isRevealed ? "revealed" : "hidden"}
>
  {icon}
  <p className="text-xs font-bold">{skillName}</p>
</motion.div>
      </motion.div>
    </div>
  );
}