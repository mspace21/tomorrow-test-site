const {nextui} = require('@nextui-org/theme');
module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "// Include app folder in purge paths",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { letterSpacing: '0px' },
          '100%': { letterSpacing: '8px'},
        },
        link: {
          '0%': { fontWeight: 100 },
          '100%': { fontWeight: 700 },
        },
      },
    },
    animation: {
      expand: 'expand 6s ease-in forwards',
      link: 'link 0.1s ease-in forwards',  
    },
  },
  plugins: [nextui()],
};
