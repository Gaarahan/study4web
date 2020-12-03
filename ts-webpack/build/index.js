const path = require('path');

module.exports = {
  entry: "./main.ts",

  context: path.resolve(__dirname, '../'),

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      }
    ]
  }
}
