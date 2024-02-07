/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    scrollbar: false, // Disable default Tailwind scrollbar styles
  },
  variants: {
    extend: {},
  },
  styles: {
    // Add the custom scrollbar styles
    '.hide-scrollbar::-webkit-scrollbar': {
      display: 'none',
    },
  },
}
