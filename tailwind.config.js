/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffd23f',
        secondary: '#ff4d6d',
        tertiary: '#3a86ff',
        dark: '#1a1a2e',
        light: '#f4f1ff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pop': 'pop 1s cubic-bezier(.2,.8,.2,1.1) both',
        'slide-up': 'slideUp 0.9s ease both',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pop: {
          from: { opacity: '0', transform: 'translateY(50px) scale(0.95)' },
          to: { opacity: '1', transform: 'none' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(60px) rotate(-1deg)' },
          to: { opacity: '1', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
