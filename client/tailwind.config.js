/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-navbar-player' : 'calc(100vh - 6rem - 6rem)'
      },
      colors: {
        primary: '#946047',
        bg: '#F2E7E0'
      }
    },
  },
  plugins: [],
}

