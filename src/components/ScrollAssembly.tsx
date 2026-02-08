"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useScroll, Text, ScrollControls, PerspectiveCamera, Float } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const skills = [
    "Next.js", "React", "TypeScript", "Tailwind", "Node.js",
    "PostgreSQL", "Prisma", "Docker", "Git", "Figma",
    "Redux", "System Design"
];

const TechCard = ({ text, index, total, radius }: { text: string, index: number, total: number, radius: number }) => {
    const angle = (index / total) * Math.PI * 2;
    const z = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    // Rotate to face center
    const rotationX = -angle;

    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const color = isDark ? '#ffffff' : '#000000';

    return (
        <group position={[0, y, z]} rotation={[rotationX, 0, 0]}>
            <mesh>
                <boxGeometry args={[3.2, 0.8, 0.1]} />
                <meshStandardMaterial color={isDark ? "#27272a" : "#f4f4f5"} />
            </mesh>
            <lineSegments>
                <edgesGeometry args={[new THREE.BoxGeometry(3.2, 0.8, 0.1)]} />
                <lineBasicMaterial color={isDark ? "#4ade80" : "#000000"} />
            </lineSegments>
            <Text
                position={[0, 0, 0.06]}
                fontSize={0.3}
                color={isDark ? "#4ade80" : "#000000"}
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </group>
    );
};

const Rolodex = () => {
    const groupRef = useRef<THREE.Group>(null);
    const scroll = useScroll();
    const radius = 4;

    useFrame(() => {
        if (groupRef.current) {
            // Rotate based on scroll
            // scroll.offset is 0..1
            const targetRotation = scroll.offset * Math.PI * 2;
            groupRef.current.rotation.x = targetRotation;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Visualization of the axis for debugging */}
            {/* <axesHelper args={[5]} /> */}
            {skills.map((skill, i) => (
                <TechCard
                    key={skill}
                    text={skill}
                    index={i}
                    total={skills.length}
                    radius={radius}
                />
            ))}
        </group>
    );
};

const Scene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1} />

            <group position={[0, 0, 0]}>
                <Rolodex />
            </group>
        </>
    );
}

export default function ScrollAssembly() {
    return (
        <section className="h-[200vh] relative z-10">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                <div className="absolute top-20 left-0 right-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-center" style={{ fontFamily: "var(--font-press-start-2p)" }}>
                        TECH STACK
                    </h2>
                    <p className="bg-white/80 dark:bg-black/80 backdrop-blur px-4 py-2 rounded border-2 border-black dark:border-white font-mono text-sm">
                        Scroll to Rotate
                    </p>
                </div>

                <div className="w-full h-full">
                    <Canvas gl={{ alpha: true }} className="bg-transparent">
                        <ScrollControls pages={2} damping={0.2}>
                            <Scene />
                        </ScrollControls>
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
