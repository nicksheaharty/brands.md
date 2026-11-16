import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9670",
        surface: "#FFEFEA",
        background: "#090200",
        films: "#455FE5",
        design: "#F25672",
        social: "#FFB957",
        health: "#01775A",
      },
      fontFamily: {
        title: ["broadacre-medium-1", "sans-serif"],
        "title-light": ["broadacre-light-1", "sans-serif"],
        "title-thin": ["broadacre-thin-1", "sans-serif"],
        body: ["roca", "sans-serif"],
        swash: ["bookmania", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
