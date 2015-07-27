// Smoke test to make sure the LESS compiles correctly

var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var compileLess = require('broccoli-less-single');

var components = pickFiles('components', {
  srcDir: '/',
  files: ['**/*.less'],
  destDir: '/'
});

var mixins = pickFiles('mixins', {
  srcDir: '/',
  files: ['**/*.less'],
  destDir: '/'
});

var componentsLess = compileLess([components], 'index.less', 'components.css', {
    paths: ['.']
});

var mixinsLess = compileLess([mixins], 'index.less', 'mixins.css', {
    paths: ['.']
});

module.exports = mergeTrees([componentsLess, mixinsLess]);
