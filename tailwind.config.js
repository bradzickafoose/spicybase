module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  variants: {},
  experimental: {
    applyComplexClasses: true,
  },
  plugins: [require('@tailwindcss/ui')],
};
