
"use client";

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import BentoShowcase from "@/components/BentoShowcase";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BentoShowcase />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}