// src/components/About.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-12"
        >
          About Me
        </motion.h2>

        {/* 3. Added mt-16 for spacing below the "About Me" heading */}
        <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-16">
          
          {/* Column 1: Your Ghibli Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/self.jpg"
              alt="Ghibli"
              width={300}
              height={300}
              // 1. Added object-cover to force a circular shape
              className="rounded-full border-4 border-white shadow-lg object-cover" 
            />
          </motion.div>

          {/* Column 2: Your Updated Text Content */}
          <div className="bg-card p-6 md:p-8 rounded-lg border space-y-6">
            {/* 2. "My Journey" heading is removed, paragraph is kept */}
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech is driven by a deep-seated passion for building things. I thrive on diving into new technologies, not just for the sake of learning, but to see how I can combine them to create functional, intuitive, and delightful user experiences. From a simple idea to a deployed project, the act of creation is what truly motivates me.
            </p>
            
            <div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-press-start-2p)" }}>
                Education
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                B.Tech in CSE with specialization in AI and ML
                <br />
                Manipal University Jaipur
                <br />
                2024 - 2028
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}