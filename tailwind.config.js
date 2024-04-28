/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-500": "#ACB7C1",
        "background-600": "#8F9BA8",
        "background-700": "#6E7E91",
      },
    },
  },
  plugins: [],
}
