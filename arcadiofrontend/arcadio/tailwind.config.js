module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'pink' : '#eb8484',
      'white' : '#ffffff',
      'green' : '#3ef771',
      'pale-green' : '#4af7d8',
      'dark-pink' : '#f154bc',
      'lavender' : '#b49cfa',
      'peach' : '#fb7575',
      'blue' : '#66f6ff',
    },
    backgroundColor: {
      'pink' : '#eb8484',
      'dark-blue' : '#0d0c33',
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss")
  ],
}
