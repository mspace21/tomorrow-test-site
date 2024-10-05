module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Include app folder in purge paths
  ],
  theme: {
    extend: {
      keyframes: {
        expand: {
          '0%': { letterSpacing: '0px' },
          '50%': { letterSpacing: '2px', fontSize: '64px'},
          '100%': { letterSpacing: '8px', fontSize: '128px'},
        }
      }
    },
    animation: {
      expand: 'expand 6s ease-in forwards',
    },
  },
  plugins: [],
};
