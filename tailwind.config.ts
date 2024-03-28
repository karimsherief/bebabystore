import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        main: {
          100: "#e9f5fc",
          200: "#97D5EE",
          300: "#5dbde3",
          400: "#5999B2",
        },
        secondary: "#F6DCB8"
      },
      backgroundColor: {
        main: {
          100: "#e9f5fc",
          200: "#97D5EE",
          300: "#5dbde3",
          400: "#5999B2",
        },
        secondary: "#F6DCB8"
      }
    }
  },
  plugins: [],
};
export default config;


