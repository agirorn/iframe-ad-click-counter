'use strict';

var app = require('./adserver/app.js');

var serverPort = process.env.PORT || 3000;

var server = app.listen(serverPort, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('API server listening at http://%s:%s', host, port);
});
