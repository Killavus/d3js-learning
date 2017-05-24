var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'app.js'
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', include: path.resolve(__dirname, 'app') },
      { test: /\.(png|jpg|jpeg|woff|ttf|otf|otf2|gif|svg|svg2)/, use: 'url-loader?limit=16384' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}
