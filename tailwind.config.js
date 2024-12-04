/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          red: '#FF2B2B',
          magenta: '#FF00FF',
          cyan: '#00CED1',
          green: '#ADFF2F',
        },
      },
    },
  },
  plugins: [],
};