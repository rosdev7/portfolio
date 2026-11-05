/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        rosep: {
          50:  '#fdf2f6',
          100: '#fce7ef',
          200: '#fbcfe0',
          300: '#f7aac6',
          400: '#f083a9',
          500: '#e85f8d',
          600: '#d94a78',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
