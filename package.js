Package.describe({
  name: 'felixble:server-templates',
  version: '0.0.4',
  summary: 'Server side template engine based on blaze',
  git: 'https://github.com/felixble/meteor-server-templates',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use([
    'blaze',
    'ecmascript@0.4.6',
    'spacebars',
    'random',
    'spacebars-compiler'
  ]);
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
  ]);
  api.use('felixble:server-templates');
  api.mainModule('server-templates-tests.js');
});
