/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14183E',
          50: '#F0F1F8',
          100: '#D8DAE8',
          200: '#A8ABD0',
          300: '#787DB9',
          400: '#484FA1',
          500: '#14183E',
          600: '#101332',
          700: '#0C0E26',
          800: '#080A19',
          900: '#04050D',
        },
        orange: {
          DEFAULT: '#F1A501',
          50: '#FFF8E6',
          100: '#FEECB3',
          200: '#FDD980',
          300: '#F9C54D',
          400: '#F5B11A',
          500: '#F1A501',
          600: '#C48601',
          700: '#976701',
          800: '#6A4801',
          900: '#3D2900',
        },
        coral: {
          DEFAULT: '#DF6951',
          50: '#FDF0ED',
          100: '#F9D6CF',
          200: '#F3ADA0',
          300: '#EC8471',
          400: '#E67B61',
          500: '#DF6951',
          600: '#C05038',
          700: '#913C2A',
          800: '#62281C',
          900: '#33140E',
        },
        purple: {
          DEFAULT: '#747DEF',
          light: '#E7E9FF',
        },
        cream: {
          DEFAULT: '#FFF1DA',
          light: '#FFF9F0',
        },
      },
      fontFamily: {
        volkhov: ['Volkhov', 'Georgia', 'serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'button': '0 8px 24px rgba(241, 165, 1, 0.4)',
        'button-hover': '0 12px 32px rgba(241, 165, 1, 0.5)',
        'nav': '0 2px 20px rgba(0, 0, 0, 0.06)',
        'testimonial': '0 6px 30px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
