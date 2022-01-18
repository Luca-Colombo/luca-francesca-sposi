module.exports = {
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        handwrite: ['Rouge Script', 'cursive'],
      },
    },
  },
  shortcuts: {
    'btn': 'cursor-pointer py-2 px-4 font-semibold rounded-lg shadow-md ',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
    'hero': 'bg-cover bg-center min-h-screen-75',
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
      'styles.css'
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
}
