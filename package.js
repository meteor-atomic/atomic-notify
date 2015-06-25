Package.describe({
  name: 'atomic:notify',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Display notifications in a notifications bar.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/meteor-atomic/atomic-notify',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('underscore');
  api.use('templating');
  api.use('reactive-dict');

  // Add the files
  api.addFiles('client/notify.js',         ["client"]);
  api.addFiles('client/template.html',     ["client"]);
  api.addFiles('client/template.js',       ["client"]);
  api.addFiles('client/template.css',      ["client"]);
  api.addFiles('client/notification.html', ["client"]);
  api.addFiles('client/notification.js',   ["client"]);

  // Export
  api.export("Notify");
});
