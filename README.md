UI Components
=============

> Reusable UI components

## Styleguide

* `npm install`
* `npm run build`
* Open `build/index.html` in browser

## Usage

You must be an approved npm user for the `@celery` namespace/private modules.

```
npm install @celery/ui-components
```

### Config vs Index

All components come with at least `config.less` and `index.less`. `config.less` includes all the configuration/variables and mixins. `index.less` actually defines the component rulesets or invokes mixins. If you do not want to include the default components, you can just include the config and use that to create your own components based on the variables and mixins.

## Development

```
npm install
npm run build-watch
```

This will watch the `components`, `mixins`, and `styleguide` directories. If any of them fail to compile, you have an error.

Open the styleguide by opening `build/index.html` in your browser.

Don't forget to document things in the comments of the index files. Use [Styledown syntax](https://github.com/styledown/styledown/blob/master/docs/Documenting.md).

## TODO

* Livereload styles
  * Express server to serve styleguide
* Migrate more components from other projects

## License
MIT
