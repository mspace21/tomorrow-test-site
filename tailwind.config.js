module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include app folder in purge paths
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { letterSpacing: '0px' },
          '100%': { letterSpacing: '8px'},
        },
        link: {
          '0%': { transform: translateX('0px') },
          '100%': { transform: translateX('5px') },
        },
      },
    },
    animation: {
      expand: 'expand 6s ease-in forwards',
      link: 'link ease-in forwards',
    },
  },
  plugins: [],
};
