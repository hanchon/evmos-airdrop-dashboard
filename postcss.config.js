module.exports = {
  plugins: [
    require('postcss-modules')({
      getJSON: () => null,
    }),
    require('autoprefixer'),
    require('postcss-nested'),
  ],
};
