const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        DEFAULT: '0px 20px 40px rgba(0, 0, 0, 0.1)',
      },
      boxShadow: {
        DEFAULT: '0px 20px 40px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        gradient1:
          'linear-gradient(69.19deg, #00607B -0.86%, #207861 76.36%, #6AAF23 100%)',
        gradient2: 'linear-gradient(76.23deg, #00607B 9.84%, #127E86 90.16%)',
        gradient3:
          'linear-gradient(93.45deg, #00607B -6.42%, #207861 93.99%, #449343 106.89%, #6AAF23 114.03%)',
        'gradient-header':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.04) -144.62%, rgba(0, 0, 0, 0) 80.38%)',
      },
      colors: {
        primary: '#FFFFFF',
        secondary: '#9C9B9B',
        body: '#000000',
        background: '#FAFAFA',
      },
      fontFamily: {
        primary: ['var(--raleway-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
