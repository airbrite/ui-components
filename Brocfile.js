// Smoke test to make sure the LESS compiles correctly

var funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
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

module.exports = mergeTrees([componentsLess, mixinsLess, styleguideLess]);
