import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        roboto: 'var(--font-roboto)',
        ubuntu: 'var(--font-ubuntu)',
      },
      colors: {
        primary: 'hsl(var(--logo))',
        secondary: 'hsl(var(--secondary))',
        tertiary: 'hsl(var(--tertiary))',
        logo: 'hsl(var(--logo))',
      },
    },
  },
  plugins: [],
}
export default config
