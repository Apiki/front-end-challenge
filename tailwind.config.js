/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "const-dark": "var(--const-dark)",
        "const-white": "var(--const-white)",
        "accent-dark": "var(--accent-dark)",
        "accent-light": "var(--accent-light)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        quaternary: "var(--quaternary)",
        heading: "var(--heading)",
        title: "var(--title)",
        body: "var(--body)",
        placeholder: "var(--placeholder)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
