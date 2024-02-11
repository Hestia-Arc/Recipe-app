import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/ts/app.ts'
  ],
  theme: {
    fontSize: {
      'xs': '0.7rem',
      'xss': '0.88rem',
      '1xs': '1.5rem',
      'xl': '2.5rem',
      '2xl': '3rem'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

