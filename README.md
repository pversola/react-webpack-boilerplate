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
dist
```

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

**Tool**
- webpack
- webpack-cli
- webpack-dev-server

**Plugin**
- html-webpack-plugin
- style-loader
- css-loader

`npm install webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader -D`

or

`yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader -D`

## Config Webpack
- Create a file *"webpack.config.js"* and add following code;

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
                presets: ['@babel/preset-env', '@babel/preset-react'],
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

- Add scripts to in **package.json**

```javascript
"scripts": {
    "start": "webpack-dev-server --open --hot --mode development",
    "build": "webpack --mode production"
  },
```

## Setup React
- Install React and ReactDOM
`npm i react react-dom`

or

`yarn add react react-dom`

- Create file *"index.html"* in root

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="root">

  </div>
</body>
</html>
```

- Create *"src"* folder and add *"index.js"* file to the folder

`mkdir src`

`touch src/index.js`

In src/index.js add

```javascript
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(<App />, document.getElementById('root'));
```

- Create *"components"* folder in src and add *"APP.js"* file to the folder

`mkdir components`

`touch components/APP.js`

In components/App.js add

```javascript
import React from 'react';

const App = () => {
  return (
    <div>
      <h1>You just setup react with babel and eslint</h1>
    </div>
  );
};
 
export default App;
```

## Setup ES lint
- Install ES lint and plugin
  
`npm i eslint eslint-config-airbnb-base eslint-plugin-import -D`

or

`yarn add eslint eslint-config-airbnb-base eslint-plugin-import -D`

- Create file *".eslintrc"* in root
  
`touch .eslinrc`

In .eslinrc add

```javascript
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "commonjs": true
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
```

## reference
1. [Reference](https://blog.usejournal.com/setup-react-using-webpack4-babel-7-and-eslint-airbnb-styling-d69c4b2e1da9)
1. [Reference2](https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637)
1. [Reference3](https://engineering.thinknet.co.th/tutorial-%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%95%E0%B8%AD%E0%B8%B1%E0%B8%9E-webpack-%E0%B9%81%E0%B8%A5%E0%B8%B0-react-%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%88%E0%B8%99-deploy-fa3d53e96469)