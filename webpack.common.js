module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(eot|otf|svg|ttf|woff|woff2)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      },
    ],
  },
};
