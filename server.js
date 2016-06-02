#!/usr/bin/env node

'use strict';

// Modules
var debug = require('debug')('raneto'),
    raneto = require('raneto'),
    config = require('./config.default.js');

// We initialize Raneto
// with our configuration object
var app = raneto(config);

// Load the HTTP Server
var server = app.listen(app.get('port'), function () {
  debug('Express HTTP server listening on port ' + server.address().port);
});