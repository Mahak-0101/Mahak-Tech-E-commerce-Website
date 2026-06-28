/** @type {import('tailwindcss').Config} */

const { TAILWIND_THEME_EXTEND } = require('./src/lib/constants/tokens');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: TAILWIND_THEME_EXTEND,
    // Override defaults for critical tokens
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
    },
  },
  plugins: [],
};
