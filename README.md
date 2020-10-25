# Webpack 5 boilerplate

![](https://habrastorage.org/webt/q-/lv/b0/q-lvb0d4li7cpi-hsctistlzooi.png)

[Webpack 5](https://webpack.js.org/) boilerplate with support of most common loaders and modules:

-   [babel](https://babeljs.io/)
-   typescript (using [ForkTsCheckerWebpack](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) )
-   sass, less, [css modules](https://github.com/css-modules/css-modules) with automatic typescript declaration
-   with react support (also with [react-refresh](https://www.npmjs.com/package/@pmmmwh/react-refresh-webpack-plugin))
-   [esLint](https://www.npmjs.com/package/eslint)
-   [prettier](https://www.npmjs.com/package/prettier) (with import sorting using [prettier-plugin-import-sort](https://www.npmjs.com/package/prettier-plugin-import-sort), [import-sort-style-module-and-prefix](https://www.npmjs.com/package/import-sort-style-module-and-prefix))
-   [webpack dev server](https://webpack.js.org/configuration/dev-server/) ([proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) support is also available)
-   importing svg as react components using [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)
-   postcss loader (with [autoprefixer](https://www.npmjs.com/package/autoprefixer) and [cssnano](https://www.npmjs.com/package/cssnano))
-   [husky](https://www.npmjs.com/package/husky) prehooks and [lint-staged](https://www.npmjs.com/package/lint-staged)

## Quick start

To run this locally:

1. run `git clone https://github.com/glook/webpack-typescript-react.git sample-project`
2. Install all dependencies using `yarn` or `npm install`
3. Start the development server using `yarn start` or `npm run start`
4. Open up [http://localhost:8080](http://localhost:8080)
