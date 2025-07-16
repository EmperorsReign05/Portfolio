"use client"; 
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center md:gap-8">
      {/* Background Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"
      />

      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
       Mohammad Alman Farooqui
      </motion.h1>

      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        className="max-w-xl text-balance text-lg text-muted-foreground md:text-xl"
      >
        Aspiring Software Developer • CS Student 
      </motion.p>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button asChild size="lg">
          <Link href="#projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </section>
  );
}
