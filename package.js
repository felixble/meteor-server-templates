Package.describe({
  name: 'felixble:server-templates',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Server side template engine based on blaze',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use([
    'blaze',
    'ecmascript',
    'spacebars',
    'random',
    'spacebars-compiler'
  ], 'server');
  api.mainModule('server-templates.js');
});

Package.onTest(function(api) {
  api.use([
    'ecmascript',
    'tinytest',
    'blaze',
    'spacebars',
    'random',
    'spacebars-compiler'
  ], 'server');
  api.use('felixble:server-templates');
  api.mainModule('server-templates-tests.js');
});
