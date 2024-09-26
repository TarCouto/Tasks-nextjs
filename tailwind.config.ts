import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1a1a1a',
          700: '#0d0d0d',
        },
        purple: {
          DEFAULT: '#8284fa',
          dark: '#5e60ce',
        },
        blue: {
          DEFAULT: '#4ea8d3',
          dark: '#1e6f9f',
        },
        danger: '#e25858',
      },
    },
  },
  plugins: [],
}

export default config
