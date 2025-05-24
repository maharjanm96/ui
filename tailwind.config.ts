import type { Config } from 'tailwindcss'
import containerQueries from '@tailwindcss/container-queries'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000',
      current: 'currentColor',
      lime: {
        200: '#d5ff3f',
        300: '#bce138'
      },
      gray: {
        300: '#dcdcdc',
        350: '#c4c4c4',
        600: '#606060',
        800: '#292929',
        900: '#171717'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-clash-display)', 'sans-serif']
      },
      fontSize: {
        '2.5xl': ['1.75rem', '2rem'],
        '5xl': '3.25rem',
        '8xl': '5.375rem'
      },
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        relaxed: '1.62',
        loose: '1.955'
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      }
    },
  },
  plugins: [containerQueries],
}

export default config