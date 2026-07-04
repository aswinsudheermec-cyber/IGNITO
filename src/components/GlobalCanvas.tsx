"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

// Interactive 3D Particle Vortex that tracks mouse movement globally
function GlobalParticleVortex() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 3000;

  // Distribute points in a wide, elegant cosmic dust spiral
  const [positions, phases, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const sp = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 2.2 + 0.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.45; // wide spiral angle

      pos[i * 3] = r * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.sin(theta);

      ph[i] = Math.random() * Math.PI * 2;
      sp[i] = Math.random() * 0.008 + 0.002;
    }
    return [pos, ph, sp];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.getElapsedTime();
    const posAttribute = pointsRef.current.geometry.attributes.position;

    // Read global mouse coords
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Morph rotation speeds based on mouse acceleration
    const speedFactor = 1.0 + Math.sqrt(mouseX * mouseX + mouseY * mouseY) * 3.5;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      const bx = positions[idx];
      const by = positions[idx + 1];
      const bz = positions[idx + 2];

      phases[i] += speeds[i] * speedFactor;

      // Subtle dimensional morph shifts
      const morph = 1.0 + Math.sin(time * 0.8 + phases[i]) * 0.12 * mouseX;
      const verticalOffset = Math.cos(time * 0.9 + phases[i]) * 0.07 * mouseY;

      posAttribute.setX(i, bx * morph);
      posAttribute.setY(i, by + verticalOffset);
      posAttribute.setZ(i, bz * morph);
    }
    posAttribute.needsUpdate = true;

    // Parallax tilt on overall cloud rotation
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, mouseY * 0.35, 0.06);
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, mouseX * 0.35, 0.06);
    pointsRef.current.rotation.z += 0.001; // slow baseline spin
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f5ff"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function GlobalCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 2, 2]} intensity={1.0} color="#00f5ff" />
        <pointLight position={[5, -5, 5]} color="#bd00ff" intensity={1.5} />
        <pointLight position={[-5, 5, -5]} color="#ff007f" intensity={1.5} />

        <GlobalParticleVortex />

        <Stars radius={90} depth={40} count={2000} factor={4} saturation={0.5} speed={1.2} />
      </Canvas>
    </div>
  );
}
