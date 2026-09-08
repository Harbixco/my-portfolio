import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9ddfd",
          300: "#7cc1fb",
          400: "#36a1f7",
          500: "#1d6ec2",
          600: "#0954a7",
          700: "#094388",
          800: "#0b3970",
          900: "#0e315d",
          950: "#0a1f3c",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
