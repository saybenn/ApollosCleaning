/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "up-xl": "0 -10px 25px -5px rgba(0, 0, 0, 0.25)", // Upward shadow
        "up-lg": "0 -6px 20px -4px rgba(0, 0, 0, 0.2)", // Slightly smaller
        "up-md": "0 -4px 12px -2px rgba(0, 0, 0, 0.15)", // Medium size
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Custom font
        stix: ["STIX Two Text", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};

