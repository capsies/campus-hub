/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode based on a CSS class
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FDF8E2',
          text: '#1E1E1E',
          primary: '#213E60',
          accent: '#A3B565',
          backD: '#D9D5C5',
        },
        dark: {
          background: '#1E1E1E',
          text: '#FDF8E2',
          primary: '#9CAAB9',
          accent: '#4D5435',
          backD: '#353030',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'], // Font for headings
        subheading: ['Hind', 'sans-serif'], // Font for subheadings
        body: ['Poppins', 'sans-serif'], // Font for all other text
      },
    },
  },
  plugins: [],
};

export default config;