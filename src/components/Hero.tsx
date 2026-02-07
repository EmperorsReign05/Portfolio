"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] flex-col-reverse items-center justify-center gap-10 overflow-hidden px-6 py-20 md:flex-row md:gap-20 md:px-12">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"
      />

      {/* Left Column: Text & Actions */}
      <div className="flex flex-1 flex-col items-start gap-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white/80 px-4 py-1.5 text-xs font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] backdrop-blur-sm dark:bg-black/80 dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          Available for work
        </motion.div>

        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4"
            style={{ fontFamily: "var(--font-press-start-2p)" }}
          >
            Hey, I&apos;m <br />
            <span className="text-primary">Alman</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-xl text-lg text-muted-foreground md:text-xl leading-relaxed"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            20 year old Full-stack developer exploring AI solutions and design-driven experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg" className="border-2 border-black bg-primary text-primary-foreground font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
            <Link href="#contact">Get in Touch</Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="border-2 border-black bg-white text-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all dark:bg-zinc-900 dark:text-white dark:border-white dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <a href="/resume.pdf" download="Mohammad_Alman_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          <div className="flex items-center gap-3 pl-2">
            {/* Social Icons */}
            {[
              { icon: Github, href: "https://github.com/EmperorsReign05" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-alman-farooqui-10a2b6256/" }, // Add actual link if known
              { icon: Twitter, href: "https://x.com/almanfarooqui_1" },   // Add actual link if known
              { icon: Mail, href: "mailto:almanfarooqui5@gmail.com" } // Add actual link if known
            ].map((Item, i) => (
              <a
                key={i}
                href={Item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-2 border-transparent hover:border-black rounded-lg transition-all hover:bg-black/5 dark:hover:border-white dark:hover:bg-white/10"
              >
                <Item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative flex-shrink-0"
      >
        <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] bg-muted">
          <Image
            src="/self.jpeg"
            alt="Mohammad Alman Farooqui"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
