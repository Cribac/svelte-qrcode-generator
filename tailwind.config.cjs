module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      snow: '#F6FAFB',
      highlight: '#D49C6B',
      greyish: '#C1C8C7',
      tundra: '#5E6668',
      midnight: '#2B2E33',
      night: '#252B31',
      error: {
        background: '#E8B2BB',
        border: '#E53956',
      },
      warning: {
        background: '#D1B7A1',
        border: '#D49C6B',
      },
      info: {
        background: '#A1B0D1',
        border: '#1E56CE',
      },
    },
    extend: {},
  },
  plugins: [],
}
