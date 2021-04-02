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
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
