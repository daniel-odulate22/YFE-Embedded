import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Custom hook to load texture safely without crashing Suspense
function useSafeTexture(url) {
  const [texture, setTexture] = useState(null);
  
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (loadedTexture) => {
        console.log(`Successfully loaded texture: ${url}`);
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.error(`Failed to load texture at ${url}. Please ensure the image is in the public folder.`, error);
        // We set a dummy texture so it doesn't crash
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#4f2d7f';
        ctx.fillRect(0, 0, 128, 128);
        ctx.fillStyle = '#ffffff';
        ctx.font = '16px Arial';
        ctx.fillText('No Robot', 20, 64);
        const fallback = new THREE.CanvasTexture(canvas);
        setTexture(fallback);
      }
    );
  }, [url]);

  return texture;
}

function RobotPlane() {
  const meshRef = useRef();
  const texture = useSafeTexture('/robot.png');
  const { viewport } = useThree();
  
  // Cache max scroll to prevent expensive DOM reflows every frame (which was causing browser freezes)
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const updateScrollMetrics = () => {
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      setMaxScroll(Math.max(0, scrollHeight - window.innerHeight));
    };
    
    updateScrollMetrics();
    window.addEventListener('resize', updateScrollMetrics);
    
    // Also update metrics after a slight delay to account for images loading
    const timeout = setTimeout(updateScrollMetrics, 1000);
    
    return () => {
      window.removeEventListener('resize', updateScrollMetrics);
      clearTimeout(timeout);
    };
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;
    
    const scrollY = window.scrollY;
    const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Smooth dampening towards the target scroll values
    // Twist motion: Rotate on the Z-axis (like steering a wheel) and translate slightly on Y
    // This avoids the X/Y rotation that causes the "floating paper/water" effect.
    const targetY = THREE.MathUtils.lerp(1, -1.5, scrollProgress);
    const targetRotZ = THREE.MathUtils.lerp(-0.3, 0.3, scrollProgress); // Mechanical twist
    
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    
    // Keep X and Y rotation at 0 so it stays perfectly flat to the camera, eliminating the paper look
    meshRef.current.rotation.x = 0;
    meshRef.current.rotation.y = 0;
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, targetRotZ, 0.05);
  });

  if (!texture) return null;

  const scale = Math.min(viewport.width, viewport.height) * 0.8;

  return (
    <mesh ref={meshRef} scale={[scale, scale, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
    </mesh>
  );
}

class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function RobotCanvas() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    }}>
      <CanvasErrorBoundary>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <React.Suspense fallback={null}>
            <RobotPlane />
          </React.Suspense>
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
}
