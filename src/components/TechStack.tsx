"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import {
    Code, Server, Database, Layers, Box, Terminal,
    Cpu, Globe, Layout, GitFork, Zap, Command,
    FileJson
} from "lucide-react";

// Custom Snake Icon for Python
const SnakeIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 6v2a5 5 0 0 1-5 5H6a5 5 0 0 0-5 5v2" />
        <path d="M21 6h-2a4 4 0 0 1-4 4V6a4 4 0 0 1 4-4h2" />
        <path d="M13 14v-2a4 4 0 0 1 4-4h2" />
        <circle cx="21" cy="6" r="1" fill="currentColor" />
        <circle cx="3" cy="18" r="1" fill="currentColor" />
    </svg>
);


export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

    const techStack = [
        { name: "React", icon: Code },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: Terminal },
        { name: "Node.js", icon: Server },
        { name: "Python", icon: SnakeIcon },
        { name: "PostgreSQL", icon: Database },
        { name: "Docker", icon: Box },
        { name: "System Design", icon: Cpu },
    ];

    // Animation for the "Mario Pipe" stem
    const height = useTransform(smoothProgress, [0, 0.4], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative flex flex-col items-center justify-start py-20 px-4 overflow-hidden z-10">

            {/* Header */}
            <div className="relative z-10 text-center mb-10 md:mb-24">
                <h2 className="text-2xl md:text-5xl font-black mb-4 text-[#e0e0e0] drop-shadow-[4px_4px_0px_#000]" style={{ fontFamily: "var(--font-press-start-2p)" }}>
                    TECH WORLD
                </h2>
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#d32f2f] border-2 md:border-4 border-black text-white text-xs md:text-base font-bold font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transform -rotate-1">
                    LEVEL 1-1
                </div>
            </div>

            {/* Main Layout Container */}
            <div className="relative w-full max-w-5xl flex flex-col items-center">

                {/* Visual Pipe Background Layer */}
                {/* Extended to bottom-0 to ensure it always sits behind the Base Block */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-5 md:w-10 bg-[#356d25] border-x-2 md:border-x-4 border-black overflow-hidden z-0">
                    {/* Inner highlight for "pipe" look */}
                    <div className="absolute left-0.5 md:left-1 top-0 bottom-0 w-0.5 md:w-1 bg-[#6abe30]/50" />
                    <div className="absolute left-1.5 md:left-3 top-0 bottom-0 w-1 md:w-2 bg-[#99e550]/30" />

                    {/* Growing green stem */}
                    <motion.div
                        style={{ height }}
                        className="w-full bg-[#5ac54f] relative border-b-2 md:border-b-4 border-black"
                    >
                        <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#004400_20px)] opacity-20" />
                    </motion.div>
                </div>

                {/* Top Pipe Cap */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-4 w-8 md:w-16 h-5 md:h-8 bg-[#5ac54f] border-2 md:border-4 border-black z-10 shadow-[2px_2px_0px_rgba(0,0,0,0.3)] md:shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
                    <div className="w-full h-full bg-gradient-to-r from-[#99e550] to-[#356d25]" />
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 pl-14 md:pl-0 w-full relative z-10 pb-4">
                    {techStack.map((tech, i) => (
                        <TechBlock
                            key={tech.name}
                            item={tech}
                            index={i}
                            total={techStack.length}
                            progress={smoothProgress}
                        />
                    ))}
                </div>

                {/* Base Block - Caps the pipe at the bottom */}
                <div className="relative z-20 w-full max-w-5xl h-10 md:h-20 mt-2 md:mt-4 pointer-events-none">
                    <div className="absolute left-1 md:left-1/2 md:-translate-x-1/2 w-10 md:w-20 h-10 md:h-20 bg-[#b86f50] border-2 md:border-4 border-black grid grid-cols-2 place-content-center gap-0.5 md:gap-1 p-0.5 md:p-1">
                        <div className="size-0.5 md:size-1 bg-black/20 rounded-full" />
                        <div className="size-0.5 md:size-1 bg-black/20 rounded-full" />
                        <div className="size-0.5 md:size-1 bg-black/20 rounded-full" />
                        <div className="size-0.5 md:size-1 bg-black/20 rounded-full" />
                    </div>
                </div>

            </div>

        </section>
    );
}

const TechBlock = ({ item, index, total, progress }: { item: any, index: number, total: number, progress: MotionValue<number> }) => {
    const isEven = index % 2 === 0;

    // Animation trigger points
    const start = index * 0.05;
    const end = start + 0.2;

    const scale = useTransform(progress, [start, end], [0, 1]);
    const y = useTransform(progress, [start, end], [50, 0]);

    return (
        <motion.div
            style={{ scale, y }}
            className={`
                relative flex items-center 
                ${isEven
                    ? "md:justify-end md:pr-12" // Desktop Left Column
                    : "md:justify-start md:pl-12" // Desktop Right Column
                }
                justify-start pl-4 // Mobile Default
            `}
        >
            {/* Stem Branch Connector */}
            <div className={`
                absolute top-1/2 -translate-y-1/2 h-4 bg-[#5ac54f] border-y-4 border-black
                hidden md:block w-12 z-0
                ${isEven ? "right-0 border-l-4 rounded-l-md" : "left-0 border-r-4 rounded-r-md"}
            `} />

            {/* Mobile Branch */}
            <div className="absolute top-1/2 -translate-y-1/2 w-5 h-2.5 bg-[#5ac54f] border-y-2 border-r-2 border-black rounded-r-sm -left-4 md:hidden z-0" />

            {/* The Block */}
            <div className={`
                relative flex items-center gap-2 md:gap-4 p-2 md:p-3 w-full md:max-w-xs z-10
                bg-[#ffcd75]   /* Question block yellow */
                border-2 md:border-4 border-black
                shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:-translate-y-1 active:translate-y-0
                transition-transform cursor-pointer group
            `}>

                {/* Corner Bolts */}
                <div className="absolute top-1 left-1 size-1 bg-[#b55000]" />
                <div className="absolute top-1 right-1 size-1 bg-[#b55000]" />
                <div className="absolute bottom-1 left-1 size-1 bg-[#b55000]" />
                <div className="absolute bottom-1 right-1 size-1 bg-[#b55000]" />

                {/* Icon Container */}
                <div className="shrink-0 p-1.5 md:p-2 bg-white border-2 border-black rounded shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                    <item.icon className="size-4 md:size-6 text-black" strokeWidth={2.5} />
                </div>

                <div className="flex flex-col min-w-0">
                    <span
                        className="font-black text-black text-[10px] md:text-base truncate"
                        style={{ fontFamily: "var(--font-press-start-2p)", letterSpacing: "-1px" }}
                    >
                        {item.name}
                    </span>
                </div>

            </div>

        </motion.div>
    );
};
