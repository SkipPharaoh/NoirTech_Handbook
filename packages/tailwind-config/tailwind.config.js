const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx,mdx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        primary: "#00CC66",
        primaryHoverandFocus: "#00994d",
        secondary: "#003366",
        secondaryHoverandFocus: "#0066cc",
        tertiary: "#778899",
        tertiaryHoverandFocus: "#586674",
      },
    },
  },
  plugins: [],
};
