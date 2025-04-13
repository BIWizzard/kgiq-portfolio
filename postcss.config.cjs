// postcss.config.cjs
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss,
    autoprefixer,
  ],
};
