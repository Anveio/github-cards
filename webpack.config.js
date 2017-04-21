const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
    new LiveReloadPlugin({
      port: 5000,
      hostname: 'https://' + process.env.C9_HOSTNAME + "psadmin",
    }),
    new ExtractTextPlugin('styles.css')
  ],
  entry: "./src/app.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  
  devtool: "source-map",

  resolve: {
    extensions: ["webpack.js", ".web.js", ".ts", ".tsx", ".js", "json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader" 
      },
      
      // All image files will be handled by 'url-loader'
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000, // Images can be 25kb max;
        },
      },
      
      // Handle our CSS
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        })
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  }
}