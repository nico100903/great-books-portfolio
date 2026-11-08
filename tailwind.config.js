/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F4ED',
          light: '#FBF9F5',
          dark: '#EFEAE0',
          muted: '#E6DFCFA0',
        },
        forest: {
          DEFAULT: '#233D35',
          dark: '#172A24',
          deep: '#101E1A',
          light: '#315449',
          surface: '#2C4940',
        },
        sage: {
          DEFAULT: '#A8B5A0',
          light: '#C4CFBE',
          dark: '#7D9173',
          faint: '#EEF2EC',
        },
        beige: {
          DEFAULT: '#E7DDCC',
          light: '#F2ECE1',
          dark: '#D5C7B0',
        },
        charcoal: {
          DEFAULT: '#292B28',
          light: '#434742',
          muted: '#686E66',
        },
        gold: {
          DEFAULT: '#B49A65',
          light: '#CDB788',
          dark: '#937B49',
          amber: '#C5A059',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 10px 30px -10px rgba(35, 61, 53, 0.15), 0 4px 6px -2px rgba(35, 61, 53, 0.05)',
        'book-lg': '0 20px 40px -15px rgba(35, 61, 53, 0.22), 0 8px 12px -4px rgba(35, 61, 53, 0.08)',
        'parchment': '0 4px 20px rgba(180, 154, 101, 0.12)',
      }
    },
  },
  plugins: [],
}
