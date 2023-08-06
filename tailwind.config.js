/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#6BB12C"
      }
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xlg: '1152px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  plugins: [],
}

