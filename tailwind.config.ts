import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#07152f",
        ink: "#0b1430",
        blue: "#0B63F6",
        skysoft: "#EAF3FF",
        gold: "#F5A623",
        green: "#087C4D"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(11,99,246,.12)",
        card: "0 10px 30px rgba(7,21,47,.08)"
      }
    }
  },
  plugins: []
};
export default config;
