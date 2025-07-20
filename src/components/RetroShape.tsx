"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Shape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#FFA500"} wireframe />
    </mesh>
  );
}

export default function RetroShape() {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <Canvas>
        <ambientLight intensity={1} />
        <Shape />
      </Canvas>
    </div>
  );
}