const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions: any) => {
        return {
          ...sassLoaderOptions,
          api: "modern",
        }
      }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },

  }
};