import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // single component styles
    "./node_modules/@nextui-org/theme/dist/components/button.js",
    // or you can use a glob pattern (multiple component styles)
    // './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      maxw: "1900px",
      "2xl": "1400px",
      lg: "1021px",
      md: "630px", 
      "3xl-max": { max: "1320px" },
      "2xl-max": { max: "1250px" },
      "xl-max": { max: "1180px" },
      "lg-max": { max: "1020px" },
      "md-max": { max: "940px" },
      "0/5-md-max": { max: "850px" },
      "2/1-md-max": { max: "630px" },
      "2md-max": { max: "540px" },
      "3md-max": { max: "494px" },
      "3/4md-max": { max: "410px" },
      "4md-max": { max: "310px" },
    },
    extend: {
      colors: {
        basicBlue: "#1C626B",
        basicDarkBlue: "#1C8594",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        maxwbig: "970px",
        maxw2big: "1170px",
        maxw3big: "1920px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
