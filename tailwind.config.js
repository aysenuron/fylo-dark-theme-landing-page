module.exports = {
  content: [
    './*.html',      // Scans root HTML files
    './src/**/*.html', // Scans all HTML files in src folder
    './src/**/*.js',   // Scans JS files if you use dynamic classes
  ],
  theme: {
    fontFamily: {
      Railway: ["Railway", 'sans-serif'],
      OpenSans: ["OpenSans", 'sans-serif'],
    },
    extend: {
      colors: {
        main: {
          "intro": "#33435B",
          "main": "#181F2B",
          "footer": "#23190B",
          "testimonials": "#1F263C"
        },
        gradient: {
          "gr1": "#E2656D",
          "gr2": "#CC6133"
        }
      }
    },
  },
  plugins: [],
};
