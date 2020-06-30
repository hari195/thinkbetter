module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {

    fontFamily:{
      'sans': ['Inter'],
      'serif': ['Roboto Slab']
    },
    extend: {
      boxShadow:{
        inner2: 'inset 2px 4px 6px 1px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        primary: {
          100:'var(--primary-100)',
          500:'var(--primary-500)',
          900:'var(--primary-900)',
        },
        secondary: {
          100:'var(--secondary-100)',
          500:'var(--secondary-500)',
          900:'var(--secondary-900)',
        },
       copy: {
          100:'var(--copy100)',
          500:'var(--copy500)',
          900:'var(--copy900)',
        },

      },
    },
  },
  variants: {},
  plugins: [],
}