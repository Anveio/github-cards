const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  plugins: [
    new LiveReloadPlugin({
      port: 5000,
      hostname: 'https://' + process.env.C9_HOSTNAME + "psadmin",
    })
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

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { 
        enforce: "pre", 
        test: /\.js$/, 
        loader: "source-map-loader" 
      }
    ]
  },
  
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
}