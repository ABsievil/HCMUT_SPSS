/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "default-white": "var(--default-white)",
        "surface-overlay": "var(--surface-overlay)",
        "text-gray-100": "var(--text-gray-100)",
        "text-gray-300": "var(--text-gray-300)",
      },
    },
  },
  plugins: [],
}