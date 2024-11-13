/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "1.5xl": "1.25rem",
      },
      fontFamily: {
        jua: ["Jua"],
      },
      textShadow: {
        grey: "3px 3px 2px rgba(105, 105, 105, 0.8)", // Custom text shadow
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lavender: "#ceb7d0",
        "pale-blush": "#f6efef",
        brown: {
          400: "#A67C52",
        },
      },
      // lantern start at my viewpoint
      // keyframes: {
      //   floatUp: {
      //     "0%": { transform: "translateY(0)", opacity: "0.8" }, // Start with more opacity (0.8)
      //     "100%": { transform: "translateY(-100vh)", opacity: "0.1" }, // Fade out at the top
      //   },
      // },
      // lantern start at the very bottom of the screen
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(180vh)", opacity: "0.9" }, // Start far below the viewport
          "100%": { transform: "translateY(-100vh)", opacity: "0.4" },
        },
      },
      animation: {
        floatUp: "floatUp 24s ease-in-out infinite", // Adjust duration for floating effect
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
