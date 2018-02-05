const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    resolve(__dirname, "src") + "/index.jsx"
  ],
  output: {
   filename: 'app.bundle.js',
   path: resolve(__dirname, 'build'),
 },

 resolve: {
   extensions: ['.js', '.jsx']
 },

// instruct webpack to use babel as a loader

// a loader is an additional library that works with webpack to pre-process code before webpack bundles it.
 module: {
   rules: [
     {
       test: /\.jsx?$/,
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
