const path = require('path');
const { POSTCSS_MODES } = require('@craco/craco');

module.exports = {
  style: {
    postcss: {
      mode: POSTCSS_MODES.file,
    },
  },
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@images': path.resolve(__dirname, 'src/images/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@types': path.resolve(__dirname, 'src/types/'),
    },
  },
};
