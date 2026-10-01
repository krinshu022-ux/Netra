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
          900: '#071B3A',
          800: '#0B2447',
          700: '#123A72',
          600: '#174EA6',
          100: '#E8EFF9',
          50: '#F4F7FB',
        },
        gov: {
          primary: '#071B3A',
          blue: '#123A72',
          royal: '#174EA6',
          bg: '#F4F7FB',
          card: '#FFFFFF',
          border: '#D1DCE8',
          borderDark: '#1E3A8A',
        },
        risk: {
          high: '#D32F2F',
          highLight: '#FFEBEE',
          medium: '#F59E0B',
          mediumLight: '#FEF3C7',
          low: '#15803D',
          lowLight: '#DCFCE7',
        },
        tricolor: {
          saffron: '#FF9933',
          white: '#FFFFFF',
          green: '#138808',
          navy: '#000080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gov': '0 1px 3px 0 rgba(7, 27, 58, 0.08), 0 1px 2px 0 rgba(7, 27, 58, 0.04)',
        'gov-md': '0 4px 6px -1px rgba(7, 27, 58, 0.1), 0 2px 4px -1px rgba(7, 27, 58, 0.06)',
        'gov-lg': '0 10px 15px -3px rgba(7, 27, 58, 0.12), 0 4px 6px -2px rgba(7, 27, 58, 0.05)',
      }
    },
  },
  plugins: [],
}
