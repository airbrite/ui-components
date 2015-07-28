UI Components
=============

> Reusable UI components

## Config vs Index

All components come with at least `config.less` and `index.less`. `config.less` includes all the configuration/variables and mixins. `index.less` actually defines the component rulesets or invokes mixins. If you do not want to include the default components, you can just include the config and use that to create your own components based on the variables and mixins.

## Styleguide

* `npm run build && npm run styleguide`
* Open `styleguide/index.html`

## Components

* Border
* Breakpoint
* Button
* Color
* Grid
* Input
* Link
* Logo
* Radio
* Select
* Transition
* Typography


## Development

```
npm install
npm run build-watch
// In another process
npm run styleguide-watch
```

This will watch the `components`, `mixins`, and `styleguide` directories. If any of them fail to compile, you have an error.

Don't forget to document things in the comments of the index files. Use [Styledown syntax](https://github.com/styledown/styledown/blob/master/docs/Documenting.md).

## License
MIT
