import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1146a8',
          dark: '#0c3a8c',
          soft: '#eaf2ff',
          ring: 'rgba(17, 70, 168, 0.18)',
        },
        accent: {
          DEFAULT: '#0aa5a2',
          soft: '#e3f7f6',
        },
        ink: {
          DEFAULT: '#10233f',
          secondary: '#1f3358',
        },
        muted: {
          DEFAULT: '#51627a',
          secondary: '#7a8699',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f5f8fd',
          tint: '#fafcff',
          line: '#dbe3f1',
          'line-2': '#eef2f9',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
