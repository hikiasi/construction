/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E8720C',
          dark: '#B85A0A',
        },
        secondary: {
          DEFAULT: '#1A2B4A',
          dark: '#111C31',
        },
        anthracite: '#2D3340',
        bg: {
          light: '#F5F5F5',
          accent: '#FFF8F3',
        }
      },
      borderRadius: {
        'lg': '12px',
      }
    },
  },
  plugins: [],
}
