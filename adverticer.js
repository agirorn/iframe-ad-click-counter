'use strict';

var express = require('express');
var app = express();
var serverPort = process.env.PORT || 3000;

app.set('json spaces', 2);
app.use(express.static('adverticer/public'));

var server = app.listen(serverPort, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('API server listening at http://%s:%s', host, port);
});
