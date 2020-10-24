module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    fontFamily:{
      'sans': ['Inter'],
      'serif': ['Roboto Slab'],
      'open' : ['Open Sans']
    },
    extend: {
      boxShadow:{
        inner2: 'inset 2px 4px 6px 1px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        primary: {
          100:'var(--primary-100)',
          300:'var(--primary-300)',
          500:'var(--primary-500)',
          700:'var(--primary-700)',
          900:'var(--primary-900)',
        },
        secondary: {
          100:'var(--secondary-100)',
          300:'var(--secondary-300)',
          500:'var(--secondary-500)',
          700:'var(--secondary-700)',
          900:'var(--secondary-900)',
        },
       copy: {
        100:'var(--copy-100)',
        300:'var(--copy-300)',
        500:'var(--copy-500)',
        700:'var(--copy-700)',
        900:'var(--copy-900)',
        },
        brand: {
          100:'var(--brand-100)',
          500:'var(--brand-500)',
          900:'var(--brand-900)',
          },

      },
    },
  },
  variants: {},
  plugins: [],
}