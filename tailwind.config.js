module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
        footer: '200px minmax(900px, 1fr) 100px',
        gridTemplateColumns: ['hover', 'focus'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
