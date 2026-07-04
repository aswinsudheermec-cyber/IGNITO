"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// The interactive 3D core mesh (Refined: Click animation removed, Global mouse and time-based math added)
function QuantumCore() {
  const groupRef = useRef<THREE.Group>(null);
  const torusMatRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const sphereMatRef = useRef<THREE.MeshPhysicalMaterial>(null);

  // Target colors for transitions
  const cyanColor = new THREE.Color("#00f5ff");
  const purpleColor = new THREE.Color("#bd00ff");
  const magentaColor = new THREE.Color("#ff007f");

  useFrame((state) => {
    if (!groupRef.current) return;

    // 1. Mouse Tracking with Lerping
    const targetX = state.pointer.y * 0.4;
    const targetY = state.pointer.x * 0.4;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08);

    const targetPosX = state.pointer.x * 0.6;
    const targetPosY = state.pointer.y * 0.6;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetPosX, 0.08);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPosY, 0.08);

    // 2. Math-based Easing (Breathing scale pulse)
    const time = state.clock.getElapsedTime();
    const pulse = 1.15 + Math.sin(time * 2.0) * 0.04;
    groupRef.current.scale.set(pulse, pulse, pulse);

    // Continuous rotation
    groupRef.current.children.forEach((mesh, index) => {
      const dir = index === 0 ? 1 : -1;
      mesh.rotation.y += 0.005 * dir;
      mesh.rotation.x += 0.002 * dir;
    });

    // 3. Smooth Breathing Color Cycle (Cyan -> Purple -> Magenta)
    const colorCycle = Math.sin(time * 0.8) * 0.5 + 0.5; // oscillates 0 to 1

    if (torusMatRef.current) {
      torusMatRef.current.color.lerpColors(cyanColor, purpleColor, colorCycle);
      torusMatRef.current.emissive.lerpColors(purpleColor, magentaColor, colorCycle);
      torusMatRef.current.emissiveIntensity = 1.2 + Math.sin(time * 1.5) * 0.3;
    }
    if (sphereMatRef.current) {
      sphereMatRef.current.color.lerpColors(cyanColor, purpleColor, colorCycle);
      sphereMatRef.current.emissive.lerpColors(purpleColor, magentaColor, colorCycle);
      sphereMatRef.current.emissiveIntensity = 0.6 + Math.sin(time * 1.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner Torus Knot Core */}
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.5, 0.16, 120, 16]} />
        <meshPhysicalMaterial
          ref={torusMatRef}
          color={cyanColor}
          emissive={cyanColor}
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          flatShading={false}
        />
      </mesh>

      {/* Outer Wireframe Sphere */}
      <mesh castShadow>
        <sphereGeometry args={[0.9, 24, 24]} />
        <meshPhysicalMaterial
          ref={sphereMatRef}
          color={cyanColor}
          emissive={cyanColor}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.7}
          wireframe={true}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/20">
        <div className="w-12 h-12 border-4 border-space-cyan/30 border-t-space-cyan rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[5, -5, 5]} color="#bd00ff" intensity={2} />
        <pointLight position={[-5, 5, -5]} color="#00f5ff" intensity={2} />

        <QuantumCore />

        <Stars
          radius={80}
          depth={40}
          count={3500}
          factor={4}
          saturation={0.5}
          fade
          speed={1.5}
        />
      </Canvas>
    </div>
  );
}
