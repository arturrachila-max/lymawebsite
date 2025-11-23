import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { EdgesGeometry, LineSegments, SphereGeometry, BufferGeometry, Vector3, LineBasicMaterial, MeshBasicMaterial, BackSide, AdditiveBlending } from 'three';
import * as THREE from 'three';

interface WireframeEarthProps {
  rotationSpeed?: number;        // default: 0.1
  interactive?: boolean;         // default: true
  showContinents?: boolean;      // default: false
  atmosphere?: boolean;          // default: true
  lineColor?: string;           // default: "#66ccff"
}

export const WireframeEarth: React.FC<WireframeEarthProps> = ({
  rotationSpeed = 0.1,
  interactive = true,
  showContinents = false,
  atmosphere = true,
  lineColor = "#66ccff"
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<LineSegments>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { camera, size } = useThree();
  
  // Mouse interaction state
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  // High-detail sphere geometry: 128 segments for maximum smoothness
  // Increase segments for more detail: 128, 256, or even 512 (performance trade-off)
  const sphereGeometry = useMemo(() => {
    return new SphereGeometry(1, 128, 128);
  }, []);

  // Create wireframe edges geometry for crisp, clean lines
  // This gives us perfect wireframe edges without dots
  const edgesGeometry = useMemo(() => {
    return new EdgesGeometry(sphereGeometry, 0.01); // Threshold for edge detection
  }, [sphereGeometry]);

  // Handle mouse movement for parallax rotation
  React.useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Very subtle parallax - small angles for smooth effect
      targetRotationRef.current.x = y * 0.2;
      targetRotationRef.current.y = x * 0.2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Animation loop with smooth lerping
  useFrame((state, delta) => {
    if (!meshRef.current || !edgesRef.current) return;

    // Automatic Y-axis rotation (slow, living data object feel)
    meshRef.current.rotation.y += rotationSpeed * delta;
    edgesRef.current.rotation.y += rotationSpeed * delta;

    // Smooth mouse parallax with easing
    if (interactive) {
      const lerpFactor = 0.05; // Smooth lerping speed
      meshRef.current.rotation.x += (targetRotationRef.current.x - meshRef.current.rotation.x) * lerpFactor;
      meshRef.current.rotation.y += (targetRotationRef.current.y - meshRef.current.rotation.y) * lerpFactor;
      edgesRef.current.rotation.x = meshRef.current.rotation.x;
      edgesRef.current.rotation.y = meshRef.current.rotation.y;
    }

    // Subtle glow pulse animation
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.02 + 1.03;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  // Wireframe material - clean, thin lines
  const wireframeMaterial = useMemo(() => {
    return new LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.8,
    });
  }, [lineColor]);

  // Glow/atmosphere material
  const glowMaterial = useMemo(() => {
    return new MeshBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.12,
      side: BackSide,
      blending: AdditiveBlending,
    });
  }, [lineColor]);

  return (
    <group>
      {/* Main wireframe sphere */}
      <mesh ref={meshRef} visible={false}>
        <primitive object={sphereGeometry} />
      </mesh>
      
      {/* Wireframe edges - clean lines only, no dots */}
      <lineSegments ref={edgesRef} geometry={edgesGeometry} material={wireframeMaterial}>
        {/* Optional: Increase line width for thicker lines (performance impact) */}
        {/* <primitive object={new THREE.LineBasicMaterial({ linewidth: 2 })} /> */}
      </lineSegments>

      {/* Optional: Continental outlines layer */}
      {showContinents && (
        <ContinentsLayer lineColor={lineColor} />
      )}

      {/* Subtle glow/atmosphere sphere */}
      {atmosphere && (
        <mesh ref={glowRef} scale={1.03}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial 
            color={lineColor}
            transparent
            opacity={0.12}
            side={BackSide}
            blending={AdditiveBlending}
          />
        </mesh>
      )}
    </group>
  );
};

// Optional Continents Layer Component
// This is a simplified version - for full geoJSON support, use three-geojson-geometry
const ContinentsLayer: React.FC<{ lineColor: string }> = ({ lineColor }) => {
  // Simplified continent outlines using basic shapes
  // For production, load high-resolution geoJSON and convert to lines
  const continentsGeometry = useMemo(() => {
    // This is a placeholder - replace with actual geoJSON-to-lines conversion
    // Example approach: Load geoJSON → Extract coordinates → Create LineSegments
    const points: Vector3[] = [];
    
    // Simplified continent representation (you would load real geoJSON here)
    // For now, we'll create a basic outline pattern
    const segments = 64;
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const phi = Math.PI / 3; // Approximate continent latitude
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);
      points.push(new Vector3(x, y, z));
    }
    
    const geometry = new BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);

  const continentsMaterial = useMemo(() => {
    return new LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.4,
    });
  }, [lineColor]);

  return (
    <lineSegments geometry={continentsGeometry} material={continentsMaterial} />
  );
};

// Note: Import Canvas from @react-three/fiber in your main file
// import { Canvas } from '@react-three/fiber';
// 
// Example usage:
// <Canvas camera={{ position: [0, 0, 3], fov: 50 }} gl={{ alpha: true }}>
//   <ambientLight intensity={0.5} />
//   <pointLight position={[10, 10, 10]} intensity={1} />
//   <WireframeEarth rotationSpeed={0.15} interactive={true} />
// </Canvas>

