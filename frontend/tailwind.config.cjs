/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["alert-success", "alert-error", "alert-warning"],
  plugins: [require("daisyui")],
};
