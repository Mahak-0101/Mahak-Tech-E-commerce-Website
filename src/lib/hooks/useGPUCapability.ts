/**
 * GPU CAPABILITY DETECTION
 * Detects device GPU capability and selects appropriate 3D quality tier
 * Avoids device-type sniffing in favor of actual GPU capability probing
 */

export type GPUTier = 'high' | 'medium' | 'low';

interface GPUCapabilityInfo {
  tier: GPUTier;
  maxTextureSize: number;
  maxAnisotropy: number;
  supportsFloatTextures: boolean;
  webglVersion: '1.0' | '2.0';
}

/**
 * Probe WebGL capabilities to determine GPU tier
 * Returns GPU tier and capability info
 */
export function detectGPUCapability(): GPUCapabilityInfo {
  // Create temporary canvas for WebGL detection
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');

  if (!gl) {
    // WebGL not supported - fallback to lowest tier
    return {
      tier: 'low',
      maxTextureSize: 2048,
      maxAnisotropy: 1,
      supportsFloatTextures: false,
      webglVersion: '1.0',
    };
  }

  // Detect WebGL version
  const webglVersion = gl instanceof WebGL2RenderingContext ? '2.0' : '1.0';

  // Get max texture size
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);

  // Get max anisotropy
  const anisotropyExtension = gl.getExtension('EXT_texture_filter_anisotropic');
  const maxAnisotropy = anisotropyExtension
    ? gl.getParameter(anisotropyExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
    : 1;

  // Check for float textures
  const floatTextureExtension = gl.getExtension('OES_texture_float');
  const supportsFloatTextures = floatTextureExtension !== null;

  // Determine tier based on capabilities
  let tier: GPUTier = 'low';

  if (webglVersion === '2.0' && maxTextureSize >= 4096 && supportsFloatTextures) {
    tier = 'high';
  } else if (maxTextureSize >= 2048) {
    tier = 'medium';
  } else {
    tier = 'low';
  }

  return {
    tier,
    maxTextureSize,
    maxAnisotropy,
    supportsFloatTextures,
    webglVersion,
  };
}

/**
 * Quality tier configuration
 * Defines geometry density, particle counts, shader complexity per tier
 */
export const QUALITY_TIERS = {
  high: {
    orbResolution: 256,          // Geometry segments
    particleCount: 1024,         // Number of particles in field
    shaderComplexity: 'full',    // Volumetric + refraction
    textureSize: 4096,
    anisotropy: 16,
  },
  medium: {
    orbResolution: 128,
    particleCount: 512,
    shaderComplexity: 'reduced', // Baked glow only
    textureSize: 2048,
    anisotropy: 8,
  },
  low: {
    orbResolution: 64,
    particleCount: 128,
    shaderComplexity: 'basic',   // Flat colors, no complex shaders
    textureSize: 1024,
    anisotropy: 1,
  },
};

/**
 * FPS target per quality tier
 */
export const FPS_TARGETS = {
  high: 60,
  medium: 50,
  low: 30,
};
