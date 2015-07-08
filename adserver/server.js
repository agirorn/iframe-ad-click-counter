'use strict';
var fs = require('fs');
var parseUrl = require('url').parse;
var log = console.log;
var blankImageFilePath = 'adserver/public/blank-click.jpeg';
var trackerJavascriptFilePath = 'adserver/public/js/tracker.js';

function getMblAdIdFrom(url) {

  if (url) {
    return parseUrl(url, true).query['mbl-ad-id'];
  }

  return 'mbl-ad-id-is-not-sett';
}

function startTrackerScript(id, protocol, host, path ) {
  function inQuotes(value) {
    return '\'' +value+ '\'';
  }

  return [
    'mblStartTrackingAd(', [ inQuotes(id),
                             inQuotes(protocol),
                             inQuotes(host),
                             inQuotes(path) ].join(','),
    ');'
  ].join('');
}

function logObj(obj, name) {
  if (name) {
    log('#### => ', name);
  }
  for ( var index in obj) {
    var value = obj[index];
    if (typeof(value) !== 'function') {
      log(index+ ':' +value);
    }
  }
}

function customTrackerJsForAd(req, res) {
  var referer = req.headers.referer,
      mblAdId = getMblAdIdFrom( referer ),
      protocol = 'http://',
      host = 'localhost:3000',
      path = '/api/click',
      startTracker = startTrackerScript( mblAdId, protocol, host, path);

  res.set('Content-Type', 'application/javascript' );
  fs.readFile(trackerJavascriptFilePath, { encoding: 'UTF-8' }, function (err, data) {
    if (err) { res.send(err); }
    var file = [ data, startTracker ].join('\n');
    res.send(file);
  });

  log('#####################################################');
  log('New custom tracker served for ' +mblAdId+ ' AT: ' +referer);
}

function handleClickNotification(req, res) {
  var query= req.query;

  log('#####################################################');
  log('Request: /api/click*');
  log('mbl-ad-id: ', query['mbl-ad-id']);
  log('bust-the-cache: ', query['bust-the-cache']);


  //
  // Respond with an image to prevent client side errors.
  //
  res.set('Content-Type', 'image/jpeg' );
  fs.createReadStream(blankImageFilePath, 'utf-8').pipe(res);
}

function homeRoute(req, res) {
  res.send('Ad tracker server.');
  log('referer: ', req.headers.referer);

  logObj(req, 'Request');
}

module.exports = {
  customTrackerJsForAd: customTrackerJsForAd,
  handleClickNotification: handleClickNotification,
  homeRoute: homeRoute
};
