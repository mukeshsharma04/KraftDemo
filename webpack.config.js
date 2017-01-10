module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    css: "./src/main.css",
    html: "./src/index.html",
  },

  output: {
    path: __dirname + "/static",
    filename: "bundle.js",
  },
  module: {
    preLoaders: [
        //Eslint loader
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "eslint-loader"},
    ],
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader"]},
      {test: /\.png$/, loader: "url-loader?limit=100000"},
      {test: /\.jpg$/, loader: "file-loader" },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  eslint: {
    configFile: './.eslintrc'
  },
};
