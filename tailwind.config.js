/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'mobileHero': "url('/images/bg-intro-mobile.svg')",
        'desktopHero': "url('/images/bg-intro-desktop.svg')",
      },
      colors: {
        'primaryBlue': 'hsl(223, 26%, 24%)',
        'primaryGreen': 'hsl(136, 65%, 51%)',
        'primaryCyan': 'hsl(192, 70%, 51%)',
        'neutralBlue': 'hsl(233, 8%, 62%)',
        'neutralLightBlue': 'hsl(220, 16%, 96%)',
        'neutralGray': 'hsl(0, 0%, 98%)',
      },
    },
    fontFamily: {
      'serif': '"Public Sans"',
    },
  },
  plugins: [],
}

