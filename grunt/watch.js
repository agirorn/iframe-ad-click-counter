module.exports = function () {
  'use strict';

  // Watches files for changes and runs tasks based on the changed files
  var watch = {
    options: {
      livereload: true
    },
    server: {
      files: ['server.js', 'server/*.js'],
      tasks:  [ 'express:server' ],
      options: {
        spawn: false
      }
    },

    adserver: {
      files: ['adserver.js', 'adserver/*.js'],
      tasks:  [ 'express:adserver' ],
      options: {
        spawn: false
      }
    },

    adverticer: {
      files: ['adverticer.js', 'adverticer/*.js'],
      tasks:  [ 'express:adverticer' ],
      options: {
        spawn: false
      }
    },





    // bower: {
    //   files: ['bower.json'],
    //   tasks: ['wiredep']
    // },

    // js: {
    //   files: ['app/scripts/{,*/}*.js'],
    //   tasks: ['newer:jshint:all', 'karma:unit:run'],
    //   options: {
    //     livereload: '<%= connect.options.livereload %>',
    //     spawn: false
    //   }
    // },

    // jsTest: {
    //   files: ['test/spec/{,*/}*.js'],
    //   tasks: ['newer:jshint:test', 'karma:unit:run'],
    //   options: { spawn: false }
    // },

    // compass: {
    //   files: ['app/styles/{,*/}*.{scss,sass}'],
    //   tasks: ['compass:server', 'autoprefixer'],
    //   options: {
    //     livereload: '<%= connect.options.livereload %>',
    //     spawn: false,
    //   }
    // },

    // gruntfile: {
    //   files: ['Gruntfile.js'],
    //   options: { spawn: false }
    // },

    // livereload: {
    //   options: {
    //     livereload: '<%= connect.options.livereload %>',
    //     spawn: false
    //   },
    //   files: [
    //     'app/{,*/}*.html',
    //     '.tmp/styles/{,*/}*.css',
    //     'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    //   ]
    // },

    // express: {
    //   files:  [ 'server/*.js' ],
    //   tasks:  [ 'express:api' ],
    //   options: {
    //     spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
    //   }
    // }
  };

  return watch;
};
