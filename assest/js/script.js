
async function myFunction() {
    const response = await fetch("https://api.teleport.org/api/urban_areas/slug:los-angeles/scores/")
    const obj = await response.json()

    return obj;
} 


const path = require('path');
module.exports = { 
    entry: './src/script.js', 
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' 
    }
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

