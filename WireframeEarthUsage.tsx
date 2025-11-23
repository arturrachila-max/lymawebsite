/**
 * Example usage of WireframeEarth component
 * 
 * This file shows how to integrate the WireframeEarth component
 * into your hero section with proper setup.
 */

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { WireframeEarth } from './WireframeEarth';

export const HeroWithEarth: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          {/* Your hero text content here */}
          <h1>Your Hero Title</h1>
          <p>Your hero description</p>
        </div>
        
        <div className="hero-right">
          {/* Wireframe Earth Container */}
          <div style={{
            width: '100%',
            height: '500px',
            maxWidth: '600px',
            position: 'relative',
            background: 'transparent'
          }}>
            <Canvas
              camera={{ position: [0, 0, 3], fov: 50 }}
              style={{ background: 'transparent', width: '100%', height: '100%' }}
              gl={{ 
                alpha: true, 
                antialias: true, 
                preserveDrawingBuffer: false,
                powerPreference: 'high-performance'
              }}
            >
              {/* Ambient light for subtle illumination */}
              <ambientLight intensity={0.4} />
              
              {/* Point light for depth */}
              <pointLight position={[5, 5, 5]} intensity={0.6} color="#66ccff" />
              <pointLight position={[-5, -5, -5]} intensity={0.3} color="#66ccff" />
              
              {/* Wireframe Earth Component */}
              <WireframeEarth
                rotationSpeed={0.15}
                interactive={true}
                showContinents={false}
                atmosphere={true}
                lineColor="#66ccff"
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

// Alternative: Standalone usage
export const StandaloneEarth: React.FC = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <WireframeEarth
          rotationSpeed={0.1}
          interactive={true}
          showContinents={true}
          atmosphere={true}
          lineColor="#66ccff"
        />
      </Canvas>
    </div>
  );
};

