/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#111415",
        "surface-dim": "#111415",
        "surface-bright": "#373a3b",
        "surface-container-lowest": "#0c0f10",
        "surface-container-low": "#191c1d",
        "surface-container": "#1d2021",
        "surface-container-high": "#282a2b",
        "surface-container-highest": "#323536",
        "on-surface": "#e1e3e4",
        "on-surface-variant": "#c5c6cd",
        outline: "#8f9097",
        "outline-variant": "#44474d",
        primary: "#b9c7e4",
        "primary-container": "#0a192f",
        secondary: "#e9c176",
        "secondary-container": "#604403",
        tertiary: "#b6c6ed",
        background: "#111415",
        "on-background": "#e1e3e4",
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        unit: "8px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        gutter: "24px",
        "container-padding": "40px",
      },
      maxWidth: {
        page: "1440px",
      },
      boxShadow: {
        ambient: "0 20px 40px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};
