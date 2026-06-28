/**
 * ORB SCENE
 * Three.js WebGL scene featuring the Floating Technology Orb
 * - Glass sphere with PBR materials
 * - Internal cyan volumetric core
 * - Thin electric indigo wireframe lattice
 * - Ambient particle field
 * - Cursor-responsive glow
 */

'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { detectGPUCapability, QUALITY_TIERS } from '@/lib/hooks/useGPUCapability';
import { COLORS } from '@/lib/constants/tokens';

interface OrbSceneProps {
  scrollProgress?: number; // 0-1 for scroll-linked animations
}

export default function OrbScene({ scrollProgress = 0 }: OrbSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const orbRef = useRef<THREE.Group | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      // Check WebGL support FIRST before creating renderer
      const canvas = document.createElement('canvas');
      const webglContext = canvas.getContext('webgl') || canvas.getContext('webgl2');
      
      if (!webglContext) {
        setError('WebGL not supported in your browser.');
        return;
      }

      // Detect GPU capability
      const capability = detectGPUCapability();
      const config = QUALITY_TIERS[capability.tier];

      // ========================================================================
      // SCENE SETUP
      // ========================================================================

      const scene = new THREE.Scene();
      sceneRef.current = scene;
      scene.background = new THREE.Color(COLORS.primary.obsidianInk);

      // ========================================================================
      // CAMERA
      // ========================================================================

      const camera = new THREE.PerspectiveCamera(
        75,
        Math.max(container.clientWidth, 100) || window.innerWidth,
        0.1,
        10000
      );
      camera.position.z = 3;

      // ========================================================================
      // RENDERER - WITH ERROR HANDLING
      // ========================================================================

      let renderer: THREE.WebGLRenderer;
      
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: capability.tier === 'high' ? 'high-performance' : 'default',
          failIfMajorPerformanceCaveat: false,
        });
      } catch (e) {
        setError('Failed to initialize WebGL. Try updating your browser or graphics drivers.');
        return;
      }

      rendererRef.current = renderer;
      
      const width = Math.max(container.clientWidth, 100) || window.innerWidth;
      const height = Math.max(container.clientHeight, 100) || window.innerHeight;
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // ========================================================================
      // LIGHTING
      // ========================================================================

      // Directional light (main)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);

      // Ambient light (fill)
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
      scene.add(ambientLight);

      // ========================================================================
      // CREATE ORB GROUP
      // ========================================================================

      const orbGroup = new THREE.Group();
      scene.add(orbGroup);
      orbRef.current = orbGroup;

      // Glass Sphere (PBR material)
      const sphereGeometry = new THREE.IcosahedronGeometry(1, config.orbResolution);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        metalness: 0.1,
        roughness: 0.05,
        transparent: true,
        opacity: 0.85,
        color: 0xffffff,
        emissive: COLORS.secondary.signalCyan,
        emissiveIntensity: 0.1,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      orbGroup.add(sphere);

      // Wireframe Lattice (thin lines)
      const wireframeGeometry = new THREE.IcosahedronGeometry(1.02, 4);
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: COLORS.primary.electricIndigo,
        linewidth: 2,
        transparent: true,
        opacity: 0.6,
      });
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      orbGroup.add(wireframe);

      // Glow Sphere (for outer halo effect)
      const glowGeometry = new THREE.IcosahedronGeometry(1.1, 8);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: COLORS.secondary.signalCyan,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide,
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      orbGroup.add(glow);

      // ========================================================================
      // CREATE PARTICLES
      // ========================================================================

      const particleCount = config.particleCount;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      // Randomly distribute particles in sphere around orb
      for (let i = 0; i < particleCount * 3; i += 3) {
        const radius = 3 + Math.random() * 4; // 3-7 units from center
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = radius * Math.cos(phi);
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particleMaterial = new THREE.PointsMaterial({
        color: COLORS.secondary.signalCyan,
        size: 0.05,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // ========================================================================
      // ANIMATION LOOP
      // ========================================================================

      const animate = () => {
        requestAnimationFrame(animate);

        const currentTime = Date.now();

        // Rotate orb slowly
        orbGroup.rotation.x += 0.0002;
        orbGroup.rotation.y += 0.0005;

        // Rotate particles in opposite direction
        particles.rotation.x -= 0.00005;
        particles.rotation.y -= 0.0002;

        // Pulsate glow based on scroll progress
        const glowPulse = 0.15 + Math.sin(currentTime * 0.001) * 0.05;
        glow.material.opacity = glowPulse * (1 - scrollProgress * 0.5);

        // Scale orb based on scroll progress (shrink as scroll progresses)
        const scale = 1 - scrollProgress * 0.3;
        orbGroup.scale.set(scale, scale, scale);

        // Shift orb position on scroll (move right)
        orbGroup.position.x = scrollProgress * 1.5;

        // Cursor-responsive glow (when not scrolling)
        if (Math.abs(mouseRef.current.x) > 0.01 || Math.abs(mouseRef.current.y) > 0.01) {
          sphere.material.emissiveIntensity = 0.2 + Math.abs(mouseRef.current.x) * 0.2;
        } else {
          sphere.material.emissiveIntensity = 0.1;
        }

        // Render scene
        renderer.render(scene, camera);
      };

      animate();

      // ========================================================================
      // EVENT LISTENERS
      // ========================================================================

      // Track mouse movement for cursor response
      const handleMouseMove = (event: MouseEvent) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      // Handle window resize
      const handleResize = () => {
        const width = Math.max(window.innerWidth, 100);
        const height = Math.max(window.innerHeight, 100);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);

      // ========================================================================
      // CLEANUP
      // ========================================================================

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        container.removeChild(renderer.domElement);
      };
    } catch (err) {
      setError(`Error initializing 3D scene: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }, [scrollProgress]);

  // Error state
  if (error) {
    return (
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full bg-obsidian-ink flex items-center justify-center"
      >
        <div className="text-center text-white px-6 max-w-md">
          <h3 className="text-xl font-bold mb-3">3D Experience Not Available</h3>
          <p className="text-sm text-slate-mist mb-4">{error}</p>
          <p className="text-xs text-slate-mist">
            Try: Chrome, Firefox, or Edge browser. Make sure WebGL is enabled.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: COLORS.primary.obsidianInk }}
    >
      {/* Canvas will be rendered here by Three.js */}
    </div>
  );
}
