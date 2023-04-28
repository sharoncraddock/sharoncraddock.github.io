/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '7': '4rem',
        '8': '5rem',
        '9': '6rem',
        '10': '7rem',
        '11': '8rem',
        '12': '9rem',
        '13': '10rem',
      },
      lineHeight: {
        '11': '3.5rem',
      },
      colors: {
        'custom-blue': '#0a192f',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      'mono': ['Inconsolata', 'SFMono-Regular'],
      'split-flap': ['Oswald', 'ui-sans-serif'],
    },
  },
  plugins: [],
}

