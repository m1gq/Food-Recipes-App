/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-bg': "url('../../assets/bg-chad-montano-unsplash.jpg')"
        }
    },
  },
  plugins: [],
}
