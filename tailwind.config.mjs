/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#253729',
        secondary: '#98AD8D',
        light: '#E5E2D9',
        white: '#FFFFFF',
      },
      fontFamily: {
        abhaya: ['Abhaya Libre', 'serif'],
      },
    },
  },
  plugins: [],
};