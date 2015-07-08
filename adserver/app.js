var express = require('express');
var server = require('./server.js');

var app = express();

app.set('json spaces', 2);
app.use(express.static('adserver/public'));
app.get('/api/tracker.js', server.customTrackerJsForAd);
app.get('/api/click*', server.handleClickNotification);
app.get('/*', server.homeRoute);

module.exports = app;
