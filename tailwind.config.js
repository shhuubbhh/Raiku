/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        academyBg: '#000000ff',   // ← your new background color
        academyCard: '#121212'
      }
    }
  },
  content: ["./**/*.html"]
}
