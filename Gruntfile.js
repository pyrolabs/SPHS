module.exports = function (grunt) {
  'use strict';
  //Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    config: grunt.file.readJSON('config.json'),
    php: {
        watch:{
          files:'docs/**/*.md',
          options:{
            keepalive: true,
            open: true,
            port: 8085,
            base:'daux'

          }
        },

    },
    less: {
      development: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          "css/daux-blue.min.css": "less/daux-blue.less",
          "css/daux-green.min.css": "less/daux-green.less",
          "css/daux-navy.min.css": "less/daux-navy.less",
          "css/daux-red.min.css": "less/daux-red.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        },
      },
      markdown:{
        files:'docs/**.md',
        tasks:['php'],
        options:{
          livereload:true
        }
      }
    },
    aws_s3:{
      static:{
        options: {
          accessKeyId: '<%= config.AWSAccessKeyId %>',
          secretAccessKey: '<%= config.AWSSecretKey %>',
          bucket:'pyro-cdn',
          uploadConcurrency: 30
        },
        files:[
          {'action': 'upload', expand: true, cwd: 'static', src: ['**'], dest: 'sphs', differential:true}
        ]
      },

    }
  });

  //grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('default', ['php:watch', 'watch:markdown']);
};
