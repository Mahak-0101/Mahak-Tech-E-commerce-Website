/** @type {import('next').NextConfig} */

const nextConfig = {
  // React strict mode for development
  reactStrictMode: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Font optimization
  optimizeFonts: true,

  // SWC minification
  swcMinify: true,

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },

  // Webpack config for Three.js
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });
    return config;
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
