"use client"; 
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RetroShape from "./RetroShape";
import { Download } from "lucide-react"; 

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center md:gap-8">
      <RetroShape />
      {/* Background Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"
      />
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        className="text-2xl "
        // We use the mono font here for a nice contrast with the heading
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        Hey, I'm
      </motion.p>
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl"
  style={{ fontFamily: "var(--font-press-start-2p)" }}
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
        <Button asChild size="lg" className="text-white transition-all hover:-translate-x-1 hover:-translate-y-1">
          <Link href="#projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="bg-yellow-300 text-black transition-all hover:-translate-x-1 hover:-translate-y-1">
    <a 
      href="/resume.pdf" // This points to the file in your /public folder
      download="Mohammad_Alman_Resume.pdf" // This is the filename the user will see
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </a>
  </Button>
        <Button asChild size="lg" className="text-white transition-all hover:-translate-x-1 hover:-translate-y-1">
          <Link href="#contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </section>
  );
}
