# Setup React Using webpack 4, babel 7 & ES lint from scratch
## Create projecr
- Create project and into it.
`mkdir <PROJECT NAME> && cd <PROJECT NAME>`

- Create a package.json
`npm init -y` or `yarn init -y`

- Create a .gitignore
`touch .gitignore`

- Create an "src folder, index.js and index.html" file
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
- create file ".babelrc"
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

## Config Webpack