// We require the webpack package and the resolve functionality from the path package at the top of the file.
// Resolving a path is the act of providing a dedicated tool (like the path library) the name of a directory or file, and relying upon it to find the exact path.

// This allows us to say things like resolve('file_name') instead of ./../much/longer/filepath/to/the/file_name.js
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
// Within the module we declare an entry specifying the file where the bundling process starts. Similar to the main.ts file in Angular, we specify index.jsx as our entry point.

// An entry point is the file responsible for instructing the module bundler how to build the application. The browser loads this file first.
  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],

  output: {
    // filename determines the name of the file containing our bundled code. We've named ours app.bundle.js.
    // In summary, this section instructs Webpack to place bundled code in build/app.bundle.js.
   filename: 'app.bundle.js',
   // path: points to a directory called build. This is where our transpiled, bundled source code will reside. __dirname refers to the current directory webpack.config.js is located in. We call resolve() and pass the name of the directory we're attempting to locate (build) and __dirname. The path library then resolves the exact file path for us.
   path: resolve(__dirname, 'build'),
 },

 resolve: {
   // The resolve option tells Webpack to locate files with specific extensions. By specifying the extensions here, we can later import files without explicitly listing an extension in their import statement. (ie,: require(myComponent) instead of: require(myComponent.jsx)). This is certainly not mandatory, but a helpful feature
   extensions: ['.js', '.jsx']
 },

// we need to configure Webpack and Babel to work together. We need Webpack to invoke Babel during the bundling process to transpile our JSX into ES5. We do this by adding more configurations to webpack.config.js:

// * test takes a RegEx expression indicating which files the loader should transform.
// * loader details which loader tool will transform these files
// * excluded outlines which files, if any, should not be transformed. We don't need to transform our npm dependencies so we list node_modules here.
// * options tells Babel what kind of project we’re working with (React), and what version of JavaScript code should be transpiled to (ES5).
// * In plain English, the configuration above reads “Hey Webpack, use this babel-loader tool to transpile our JSX into ES5 in this React project. You can find the JSX in files with a .jsx extension. But ignore .jsx files in the nodemodules directory.”_

 module: {
   rules: [
     {
       test: /\.jsx?$/,
       // a loader is an additional library that works with webpack to pre-process code before webpack bundles it.
       loader: "babel-loader",
       exclude: /node_modules/,
       options: {
         presets: [
           "es2015",
           "react"
         ]
       }
     },
   ],
 }
};
