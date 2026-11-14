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
        ink: "#17324D",
        medical: "#197B8C",
        "medical-dark": "#125C6A",
        mist: "#F4FAFA",
        line: "#DCE9EA"
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
