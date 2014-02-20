var express = require('express'),
    hbs = require('express-hbs');

module.exports = function(app, config) {
  app.configure(function () {
    app.use(express.compress());
    app.use('/public', express.static(config.root + '/public'));
    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'hbs');

    // Hook in express-hbs and tell it where known directories reside
    app.engine('hbs', hbs.express3({
        partialsDir: [config.root + '/app/views/_partials'],
        defaultLayout: config.root + '/app/views/_layouts/default.hbs'
    }));

    app.use(express.favicon(config.root + '/public/img/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(function(req, res) {
      res.status(404).render('404', { title: '404' });
    });
  });
};
