module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 1,
      importFrom: [
        {
          customMedia: {
            '--tablet-viewport': '(min-width: 480px)',
            '--desktop-viewport': '(min-width: 1024px)',
          },
        },
      ],
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'custom-properties': false,
        'dir-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'color-functional-notation': false,
      },
    }),
  ],
};
