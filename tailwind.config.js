/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E0E',
        cream: '#F4F2EE',
        red: {
          accent: '#EA3324',
          accentdark: '#C0271A',
        },
        warm: {
          50: '#FAFAF7',
          200: '#ECE7DC',
          300: '#DED8CC',
          400: '#9B968C',
          500: '#807B72',
          700: '#46423D',
          800: '#3A3631',
          900: '#1A1714',
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        script: ['Allura', 'cursive'],
        serif: ['Newsreader', 'serif'],
      },
      maxWidth: {
        shell: '1280px',
        content: '1180px',
        narrow: '1100px',
      },
    },
  },
  plugins: [],
}
