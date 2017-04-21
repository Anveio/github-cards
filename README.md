# Installation

You'll need yarn or npm. This project uses Webpack 2 and TypeScript 2.2.

1. Clone this repo and `cd` into the directory.
2. Type `yarn install` into the command line and hit enter
3. Type `yarn run build-dev` into the command line and hit enter. `build-prod`, which produces a minified JS file is not yet working due to a wierd interaction with UglifyJS.
4. If everything went according to plan, you should now have a `bundle.js` in your `/dist` directory. 
5. If you open `index.html`, the app should be working.

# Description

This app pulls users from the GitHub API and displays their name and profile picture. It demonstrates a modern stack of TypeScript + React using Webpack to automate transpilation and minification.

# Acknowledgements

Special thanks to Samer Buna.