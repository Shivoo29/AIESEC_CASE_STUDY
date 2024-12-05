/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-red': '#FF2B2B',
        'neon-magenta': '#FF00FF',
        'neon-cyan': '#00CED1', 
        'neon-green': '#ADFF2F',
        'neon-yellow': '#FFFF00',
        'neon-purple': '#9D00FF'
      },
    },
  },
  plugins: [],
 };