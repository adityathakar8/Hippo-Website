/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'hippo-light': '#cad2c5',
        'hippo-medium': '#84a98c',
        'hippo-dark': '#52796f',
        'hippo-darker': '#354f52',
        'hippo-darkest': '#2f3e46',
      },
      fontFamily: {
        'silom': ['Silom', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'alfa-slab': ['Alfa Slab One', 'serif'],
      },
      fontSize: {
        'display': '64px',
      }
    },
  },
  plugins: [],
}
