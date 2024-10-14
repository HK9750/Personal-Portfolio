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
        "bg-1": "#1A1A1A",
        "bg-2": "#252525",
        "brand-1": "#26FFE5",
        "brand-2": "#86FFCE",
        grey: "#A9A9A9",
        white: "#FFFFFF",
        html: "#F96232",
        css: "#21568B",
        js: "#FAA638",
        react: "#0C8BC6",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "20px"],
        sm: ["14px", "22px"],
        base: ["16px", "24px"],
        lg: ["18px", "27px"],
        xl: ["24px", "30px"],
        "2xl": ["32px", "40px"],
        "3xl": ["36px", "44px"],
        "4xl": ["42px", "50px"],
        "5xl": ["48px", "56px"],
        "6xl": ["56px", "64px"],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
