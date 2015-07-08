module.exports = function() {
  'use strict';

  var express = {
    server: {
      options: {
        port: 2000,
        script: 'server.js',
      }
    },
    adserver: {
      options: {
        port: 3000,
        script: 'adserver.js',
      }
    },
    adverticer: {
      options: {
        port: 4000,
        script: 'adverticer.js',
      }
    }
 
  };

  return express;
};
