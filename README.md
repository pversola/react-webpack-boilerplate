# Setup React Using webpack 5, babel 7 & ES lint from scratch
## Create projecr
- Create project and into it.
`mkdir <PROJECT NAME> && cd <PROJECT NAME>`

- Create a package.json
`npm init -y` or `yarn init -y`

- Create a .gitignore
`touch .gitignore`

```
node_modules
```

- Create an *"src folder, index.js and index.html"* file

`mkdir src`

`touch src/index.js`

`touch src/index.html`

### Babel
See more on [Babel](https://babeljs.io/docs/en/index.html)
To set up babel need install:
- @babel/cli            --> is a bable tool that allow us to use babel from the command line
- @babel/core           --> is a babel tool which contains the core babel modules
- @babel/preset-env     --> is a babel plugin to set up transformation environment
- @babel/preset-react   --> is a babel plugin to set up transformation environment for react
- babel-loader          --> is a babel plugin to complie using webpack

To install them:

`npm install @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties -D`

or

`yarn add @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties -D`

#### Config Babel
- create file *".babelrc"* in root directory and add following code.

```javascript
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
### Webpack
See more on [Webpack](https://webpack.js.org/concepts/)

### **Tool**
- **webpack** - Module and asset bundler.
- **webpack-cli** - Command line interface for webpack
- **webpack-dev-server** - Development server for webpack
- **webpack-merge** - Simplify development/production configuration

`yarn add -D webpack webpack-cli webpack-dev-server` 

or

`npm install -D webpack webpack-cli webpack-dev-server`

### **Loaders**
- **babel-loader** - Transpile files with Babel and webpack
- **sass-loader** - Load SCSS and compile to CSS
  - **node-sass** - Node Sass
- **postcss-loader** - Process CSS with PostCSS
  - **postcss-preset-env** - Sensible defaults for PostCSS
- **css-loader** - Resolve CSS imports
- **style-loader** - Inject CSS into the DOM

`yarn add babel-loader sass-loader node-sass postcss-loader postcss-preset-env css-loader style-loader -D` 

or

`npm install babel-loader sass-loader node-sass postcss-loader postcss-preset-env css-loader style-loader -D`

#### Config Postcss

create a file *"postcss.config.js"* and add following code;

```javascript 
module.exports = {
  plugins: {
      'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
  },
}
```

### **Plugins**
- **clean-webpack-plugin** - Remove/clean build folders
- **copy-webpack-plugin** - Copy files to build directory
- **html-webpack-plugin** - Generate HTML files from template
- **optimize-css-assets-webpack-plugin** - Optimize and minimize CSS assets
- **css-minimizer-webpack-plugin** -
- **mini-css-extract-plugin** - Extracts CSS into separate files

`npm install clean-webpack-plugin copy-webpack-plugin html-webpack-plugin optimize-css-assets-webpack-plugin css-minimizer-webpack-plugin mini-css-extract-plugin -D`

or

`yarn add clean-webpack-plugin copy-webpack-plugin html-webpack-plugin optimize-css-assets-webpack-plugin css-minimizer-webpack-plugin mini-css-extract-plugin -D`


### Config Webpack
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
2. [how-to-use-webpack](https://www.taniarascia.com/how-to-use-webpack/)
3. [Github - taniarascia](https://github.com/taniarascia/webpack-boilerplate)