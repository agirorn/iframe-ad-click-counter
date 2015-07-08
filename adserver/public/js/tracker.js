( function( window ) {
  'use strict';

  var adId,
      protocol = 'http://',
      host = 'localhost:3000',
      path = '/api/click';

  function mblStartTrackingAd( mblAdId, beconProtocol, beconHost, beconPath ) {
    adId = mblAdId;
    protocol = beconProtocol;
    host = beconHost;
    path = beconPath;

    setTimeout(function() {
      document.onclick = clickNotification;
    }, 200);
 }

  function clickNotification() {
     var img = document.createElement('img');
     img.src = clickUrl(adId);
  }

  function uuid() {
    /* jshint bitwise: false */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  function clickUrl(id) {
    return [
      protocol, host, path, '?',
      [
        'mbl-ad-id=' +id,
        'bust-the-cache=' +uuid(),
      ].join('&')
    ].join('');
  }

  window.mblStartTrackingAd = mblStartTrackingAd;
})(window);
