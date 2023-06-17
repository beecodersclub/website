module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/images/bg-hero.jpg')",
      }),
      colors: {
        'primary': '#9C51D2',
        'secondary': '#6A0DAD',
        'dark-purple': '#3A0461',
        'gray': '#F0F0F0',
        'highlight': '#FCC700',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}