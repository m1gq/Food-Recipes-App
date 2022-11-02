/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        backgroundImage: {
            'hero-bg': "url('https://unsplash.com/photos/z5bPsP916QA')"
        },
    },
  },
  plugins: [],
}
