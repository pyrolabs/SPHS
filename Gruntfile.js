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
          "daux/css/daux-sphs.min.css": "daux/less/daux-sphs.less",
          "daux/templates/default/themes/daux-sphs/css/daux-sphs.css": "daux/less/daux-sphs.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['daux/less/**/*.less'],
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
    },
    exec:{
      static:{
        command:'php daux/generate.php daux/global.json static',
        stdout:false,
      }
    }
  });

  grunt.registerTask('dev', ['less', 'watch']);
  grunt.registerTask('upload', ['less', 'exec:static', 'aws_s3:static']);
  grunt.registerTask('default', ['php:watch', 'watch:markdown']);

};
