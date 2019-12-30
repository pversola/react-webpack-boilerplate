# Setup React Using webpack 4, babel 7 & ES lint from scratch
## Create projecr
- Create project and into it.
`mkdir <PROJECT NAME> && cd <PROJECT NAME>`

- Create a package.json
`npm init -y` or `yarn init -y`

- Create a .gitignore
`touch .gitignore`

```javascript
node_modules
```

- Create an *"src folder, index.js and index.html"* file

`mkdir src`

`touch src/index.js`

`touch src/index.html`

## Setup Babel
See more on [Babel](https://babeljs.io/docs/en/index.html)
To set up babel need install:
- @babel/cli            --> is a bable tool that allow us to use babel from the command line
- @babel/core           --> is a babel tool which contains the core babel modules
- @babel/preset-env     --> is a babel plugin to set up transformation environment
- @babel/preset-react   --> is a babel plugin to set up transformation environment for react
- babel-loader          --> is a babel plugin to complie using webpack

To install them:

`npm install @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader -D`

or

`yarn add @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader -D`

## Config Babel
- create file *".babelrc"*
`touch .babelrc`

```javascript
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```
## Setup Webpack
See more on [Webpack](https://webpack.js.org/concepts/)

** tool **
- webpack
- webpack-cli
- webpack-dev-server

** plugin **
- html-webpack-plugin
- style-loader
- css-loader

`npm install webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader -D`

or

`yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader -D`

## Config Webpack
create a file *"webpack.config.js"* and add following code;

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app_bin.js',
    },
    devServer: {
        inline: true,
        port: 3000,
    },
    module: {
        rules: [
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-env', '@babel/react'],
            },
            },
            {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
```

## reference
1. [Reference](https://blog.usejournal.com/setup-react-using-webpack4-babel-7-and-eslint-airbnb-styling-d69c4b2e1da9)
1. [Reference2](https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637)
1. [Reference3](https://engineering.thinknet.co.th/tutorial-%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%95%E0%B8%AD%E0%B8%B1%E0%B8%9E-webpack-%E0%B9%81%E0%B8%A5%E0%B8%B0-react-%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%88%E0%B8%99-deploy-fa3d53e96469)