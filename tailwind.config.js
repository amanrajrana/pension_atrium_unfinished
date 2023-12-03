/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: "#F5F9FC",
        btngrad_1: "#1E3C72",
        btngrad_2: "#2A5298",
        textgrad_1: "#3494E6",
        textgrad_2: "#EC6EAD",
        footer: "#03122D",
        floor: "#FBFBFB",
        customblue: "#253871",
        placeColor: "#414141",
        dropdown: "#fafafa",
      },
      width: {
        "823/10": "82.3%",
      },
      gap: {
        26: "4.5rem",
      },

      fontSize: {
        xl: [
          "16px",
          {
            lineHeight: "26px",
          },
        ],
        sm: [
          "17px",
          {
            lineHeight: "20.4px",
            fontWeight: "400",
          },
        ],

        "2xl": [
          "25px",
          {
            lineHeight: "27.2px",
          },
        ],
        "2xlg": [
          "25px",
          {
            lineHeight: "30px",
            fontWeight: "700",
          },
        ],
        "2x": [
          "36px",
          {
            lineHeight: "43.2px",
          },
        ],
        // Or with a default line-height as well
        "3xl": [
          "52px",
          {
            lineHeight: "62.4px",
            fontWeight: "700",
          },
        ],
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
