module.exports = function() {
  'use strict';

  var tasks = {
    'server': [
      'express:server',
      'express:adserver',
      'express:adverticer',
      'watch'
      // 'express-keepalive'
    ],


    'default': [
      'newer:jshint',
      'test',
      'build'
    ]
  };

  return tasks;
};
