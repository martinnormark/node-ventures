var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'inspectory'
    },
    port: 3000,
    db: 'mongodb://localhost/inspectory-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'inspectory'
    },
    port: 3000,
    db: 'mongodb://localhost/inspectory-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'inspectory'
    },
    port: 3000,
    db: 'mongodb://localhost/inspectory-production'
  }
};

module.exports = config[env];
