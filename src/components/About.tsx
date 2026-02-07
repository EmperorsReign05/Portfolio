
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden dark:border-white dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 border-b-2 border-black/10 pb-4 dark:border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
            <span className="ml-auto font-mono text-xs text-muted-foreground">user_profile.exe</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Stats Column */}
            <div className="font-mono space-y-4 text-sm md:text-base border-r-0 md:border-r-2 border-dashed border-black/20 pr-0 md:pr-8 dark:border-white/20">
              <h3 className="text-xl font-bold mb-4 bg-primary/20 inline-block px-2">STATS</h3>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Level</span>
                <span className="font-bold">20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Class</span>
                <span className="font-bold">Dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mana</span>
                <span className="font-bold text-blue-500">Coffee</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="font-bold">RJ, IN</span>
              </div>

              <div className="pt-4">
                <div className="text-xs mb-1 flex justify-between">
                  <span>XP Progress</span>
                  <span>85%</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden border border-black">
                  <div className="h-full bg-green-500 w-[85%]"></div>
                </div>
              </div>
            </div>

            {/* Bio Column */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 font-mono text-primary">{'>'} WHO_AM_I?</h3>
                <p className="font-mono text-muted-foreground leading-relaxed text-sm md:text-base">
                  My journey in tech is driven by a deep-seated passion for building things. I thrive on diving into new technologies, not just for the sake of learning, but to see how I can combine them to create functional, intuitive, and delightful user experiences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 font-mono text-primary">{'>'} CURRENT_QUEST</h3>
                <p className="font-mono text-muted-foreground leading-relaxed text-sm md:text-base">
                  Currently pursuing B.Tech in CSE (AI & ML) at Manipal University Jaipur (2024-2028).
                  Exploring the intersection of generative AI and modern web frameworks to build smarter tools.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}