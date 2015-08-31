var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var CompileStyledown = require('broccoli-styledown');
var compileLess = require('broccoli-less-single');

var components = funnel('components', {
  include: ['**/*.less']
});

var mixins = funnel('mixins', {
  include: ['**/*.less']
});

var styleguide = funnel('styleguide', {
  include: ['**/*.less']
});

var componentsLess = compileLess([components], 'index.less', 'components.css', {
    paths: ['.']
});

var mixinsLess = compileLess([mixins], 'index.less', 'mixins.css', {
    paths: ['.']
});

var styleguideLess = compileLess([components, styleguide], 'app.less', 'app.css', {
  paths: ['.']
});

var styleguideMd = funnel('styleguide', {
  include: ['**/*.md']
});

var styledownAssets = funnel('styleguide', {
  include: ['**/*.css', '**/*.js'],
});

var styleguideHtml = new CompileStyledown([components, styleguideMd], {
  configMd: 'config.md'
});

module.exports = mergeTrees([
  componentsLess,
  mixinsLess,
  styleguideLess,
  styleguideHtml,
  styledownAssets
]);
