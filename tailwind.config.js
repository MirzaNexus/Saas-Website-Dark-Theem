/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "480px", // Add extra small screen breakpoint
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px", // Custom large screen breakpoint for widescreens
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".cursor-shadow": {
          // "border-radius": "10px",
          // "box-shadow": "0px 0px 10px 0px #F87BFF",
          filter: "drop-shadow(2px 2px 5px #000)",
        },
        ".cursor-md-shadow": {
          // "border-radius": "10px",
          // "box-shadow": "0px 0px 10px 0px #F87BFF",
          filter: "drop-shadow(3px -2px 5px #000)",
        },
        ".message-shadow": {
          filter: "drop-shadow(-2px 2px 5px #000)",
        },
        ".message-md-shadow": {
          filter: "drop-shadow(-3px 3px 5px #000)",
        },
        ".scroll_hidden": {
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
