/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0B2838',          // azul escuro (footer, seções dark)
          primary: '#1B4965',       // azul petróleo (navbar, CTA principal)
          light: '#F0F7FA',         // azul gelo (fundos claros)
          accent: '#62B6A8',        // verde teal (botões secundários, ícones)
          'accent-light': '#BEE3DB', // verde menta (fundos alternados)
          gold: '#D4A853',          // dourado (destaques premium)
        }
      }
    },
  },
  plugins: [],
}
