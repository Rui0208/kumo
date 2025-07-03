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
        background: "#252120",
        foreground: "#1a1a1a",
        primary: "#2c5530",
        "primary-foreground": "#ffffff",
        secondary: "#8b7355",
        "secondary-foreground": "#ffffff",
        muted: "#f5f5f5",
        "muted-foreground": "#6b7280",
        accent: "#e8f5e8",
        "accent-foreground": "#2c5530",
        border: "#e5e7eb",
        input: "#ffffff",
        ring: "#2c5530",
      },
      fontFamily: {
        sans: [
          "Source Han Sans Japanese",
          "游ゴシック体",
          "YuGothic",
          "游ゴシック Medium",
          "Yu Gothic Medium",
          "游ゴシック",
          "Yu Gothic",
          "Noto Serif JP",
          "Zen Maru Gothic",
          "Playfair Display",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config; 