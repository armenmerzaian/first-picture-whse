module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      // mobile => 0-767px
      tablet: "768px",
      sketch: "842px",
      laptop: "1280px",
      desktop: "1440px",
    },
    opacity: {
      87: ".87",
      60: ".60",
      38: ".38",
      12: ".12",
      8: ".08",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      sm: ["0.813rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.188rem", { lineHeight: "2rem" }],
      xl: ["1.438rem", { lineHeight: "2rem" }],
      "2xl": ["1.75rem", { lineHeight: "2.5rem" }],
      "3xl": ["2.063rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.438rem", { lineHeight: "3rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.563rem", { lineHeight: "4rem" }],
      "7xl": ["4.313rem", { lineHeight: "5rem" }],
    },
    fontWeight: {
      light: "300",
      regular: "400",
      semibold: "600",
      bold: "700",
    },
    boxShadow: {
      sm: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
      md: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
      lg: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
      xl: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
      "2xl":
        "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
      none: "none",
    },
    extend: {
      colors: {
        primary: {
          85: "#FFFBB2",
          75: "#FFF980",
          65: "#FFF64D",
          55: "#FFF41A",
        },
        secondary: {
          dark: "#121212",
        },
        tertiary: {
          light: "#FFFFFF",
        },
        surface: {
          01: "#1E1E1E",
          03: "#252525",
          04: "#272727",
          06: "#2C2C2C",
          24: "#383838",
        },
        neutral: {
          10: "#1A1A1A",
          20: "#333333",
          30: "#4D4D4D",
          40: "#666666",
          50: "#808080",
          60: "#999999",
          70: "#B3B3B3",
          80: "#CCCCCC",
          90: "#E6E6E6",
          95: "#F2F2F2",
        },
        semantic: {
          error: "#E8827D",
          success: "#86E085",
          warning: "#F0C575",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
