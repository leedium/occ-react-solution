# occ-react-solution

React Based Solution for Oracle Commerce Cloud

- React(Flow) 16
- React Router 4
- Redux / React-Redux
- Webpack 4
- Babel 7
- eslint

### Descriptions

This is a working proof of concept "quasi-headless" React-Redux Solution for Oracle commerce Cloud.
Using the Admin / Design View, you can create React based Web Content using custom React
elements. Full design-view layouts are preserved.

The solution wraps the knockout.js view model with Redux and injects both the model and dependencies
into each React component allowing developers access to best of both worlds, "old" and new.

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

Because the OCC Admin extension linter will prevent non Require,js files from being uploaded,
you will need to install the widget only the bundle.js first, and then use the DCU to install your remaining
bundles, adding additional ones as they are created.

## Configuration

Add all OCC require.js dependencies required for your app in componentConfig.js
These will be shimmed and made available at runtime to your application.

#### app/js/index.jsx

Main OCC widget entry file. This is the react equivalent to the main OCC widget file

#### file/widget/occReact/js

React component will compile to this folder preserving the normal widget structure.
Add normal localized resource files here. The "/file" is needed to preserve the path strructure
on the OCC server.

Webpack depending on how you split your bundles(dynamic imports) will create several files.

#### occ/

OCC representations for your React widgets and elements. Use and install these to position you React components in the design view.
