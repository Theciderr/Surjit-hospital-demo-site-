import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10234B",
        medical: "#1A537C",
        "medical-dark": "#10385F",
        mist: "#F3F7FA",
        line: "#DCE4EB"
      },
      boxShadow: {
        soft: "0 16px 40px rgba(23, 50, 77, 0.08)"
      },
      borderRadius: {
        panel: "18px"
      }
    }
  },
  plugins: []
};

export default config;
