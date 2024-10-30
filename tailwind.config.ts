import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueText: '#C1E4F2',
        pinkText: '#FBDBE3',
        customPink: '#E94063',
        customBlue: '#3CBCD8',
        gold: '#daa520',
        red: '#ff0000',
        orange:'#ff6400'
      },
    },
  },
  plugins: [],
};
export default config;
