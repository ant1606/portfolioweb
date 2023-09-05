import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'web-blue': '#0E1A37',
        'web-light-blue': '#394A72',
        'web-gray': '#C0BDBD',
        'web-light-gray': '#E2E1E1',
        'web-black': '#0D0D0D',
        'web-white': '#FAFAFA',
      },
      fontFamily: {
        kanit: ['var(--font-kanit)'],
      },
    },
  },
  plugins: [],
}
export default config
