# occ-react-solution

[React](https://reactjs.org/ "React") Based Solution for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud")

##### OCC version 16+

- [React 16 (Flow)](https://reactjs.org/ "React")
- [React Router 4](https://github.com/ReactTraining/react-router "React Router")
- [React Redux](https://github.com/reduxjs/react-redux "React Redux")
- [Webpack 4](https://webpack.js.org/ "Webapck")
- [Babel 7](https://babeljs.io/ "Babel 7")
- [eslint](https://eslint.org/ "Eslint")

### Descriptions

This is a working proof-of-concept, "quasi-headless" [React Redux](https://github.com/reduxjs/react-redux "React Redux") Solution for [Oracle Commerce Cloud](https://cloud.oracle.com/en_US/commerce-cloud "Oracle Commerce Cloud").
Using the Admin / Design View, you can create [React](https://reactjs.org/ "React") based Web Content using custom React
elements. Full design-view layouts are preserved.

The solution wraps the knockout.js view model with [Redux](https://redux.js.org/ "Redux") and injects both the model and dependencies
into each [React](https://reactjs.org/ "React") component allowing developers access to best of both worlds, "old" and new.

### Installation

Install the dependencies

```
npm i
```

### Instructions

dev build

```
npm run build:dev
```

prod build

```
npm run build:prod
```

watcher

```
npm run watch
```

Because the [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") Admin extension linter will prevent non Require,js files from being uploaded,
you will need to install the widget only the bundle.js first, and then use the DCU to install your remaining
bundles, adding additional ones as they are created.

## Configuration

Add all [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") [Require.js AMD OCC modules](https://docs.oracle.com/cd/E97801_01/Cloud.18C/WidgetDev/html/index.html "Developing Widgets") dependencies required for your app in componentConfig.js
These will be shimmed and made available at runtime to your application.

#### app/js/index.jsx

Main [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") widget entry file. This is the react equivalent to the main OCC widget file

#### file/widget/occReact/js

React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here. The "/file" is needed to preserve the path strructure
on the [OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") server.

[Webpack](https://webpack.js.org/ "Webapck") depending on how you split your bundles(dynamic imports) will create several files.

#### occ/

[OCC](https://docs.oracle.com/en/cloud/saas/commerce-cloud/index.html "Oracle Commer Cloud Portal") representations for your [React](https://reactjs.org/ "React") widgets and elements. Use and install these to position your React components in the design view.

### Credits
Thanks to @btholt for the React starter
