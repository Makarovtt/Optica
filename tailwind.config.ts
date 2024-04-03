import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      maxw: "1900px",
      "2xl": "1400px",
      lg: "1021px",
      md: "630px",
      "xl-max": { max: "1180px" },
      "lg-max": { max: "1020px" },
      "md-max": { max: "940px" },
      "2/1-md-max": { max: "630px" },
      "2md-max": { max: "540px" },
      "3md-max": { max: "494px" },
      "4md-max": { max: "310px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        maxwbig: "970px",
        maxw2big: "",
        maxw3big: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
