/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],content: ["index.html"],
  theme: {
    extend: {
      gradients: (theme) => ({
        'colorpn': `linear-gradient(90deg, ${theme('colors.green.500')} 0%, ${theme('colors.blue.500')} 100%)`,
      }),
      zIndex: {
        '100': '100',
      },
      colors: {
        'gray88': '#888888',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

