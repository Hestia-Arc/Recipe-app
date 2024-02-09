import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/ts/app.ts'
  ],
  theme: {
    fontSize: {
      'xl': '2.5rem',
      '2xl': '3rem'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

