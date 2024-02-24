import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/pages/RecipeInfo.html',
    './src/pages/SearchResult.html',
    './src/ts/app.ts'
  ],
  theme: {
    screens: {
     'mb': {'min': '320px', 'max': '599px'},
     'sm': {'min': '600px', 'max': '1023px' },
     'md': {'min': '1024px', 'max': '1299px'},
     'lg': {'min': '1300px', },
     'xl': {'min': '1440px' }
    },
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

