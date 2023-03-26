/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  themes: [
    {
      mytheme: {
        primary: "#dbb95c",

        secondary: "#72e5d6",

        accent: "#ab86e8",

        neutral: "#302735",

        "base-100": "#432244",

        info: "#85A4D6",

        success: "#15AC8C",

        warning: "#E7BA27",

        error: "#EB5956",
      },
    },
  ],
  plugins: [require("daisyui")],
};
