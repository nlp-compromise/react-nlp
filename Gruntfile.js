module.exports = function (grunt) {

  grunt.initConfig({

    //watcher for backend library work
    watch: {
      files: ['./src/**', './date_demo/**', './test/**', '!./dist/*', '!./demo/build/*'],
      tasks: ['run:run']
    // tasks: ['run:buildDemo']
    },

    run: {
      //watcher for clientside work
      clientWatch: {
        exec: 'webpack-dev-server --inline'
      },
      run: {
        exec: 'node ./src/index.js'
      },
      test: {
        exec: 'pwd; mocha ./test/unit_test/**'
      },
      demo: {
        exec: 'echo http://localhost:8888/demo && python -m SimpleHTTPServer 8888'
      },
      buildLib: {
        exec: 'browserify ./src/index.js --standalone nlp -o ./build/bundle.es5.js -t [ babelify --presets [ es2015 ] ]'
      },
      buildDemo: {
        exec: 'browserify ./demo/main.jsx --standalone main -o ./build/demo.es5.js -t [ babelify --presets [ es2015 react ] ]'
      }
    },

    uglify: {
      'do': {
        src: ['./build/bundle.es5.js'],
        dest: './build/bundle.es5.min.js'
      },
      'options': {
        preserveComments: false,
        mangle: true,
        banner: ' /*spencer kelly, 2016*/\n',
        compress: {
          drop_console: true,
          dead_code: true,
          properties: true,
          unused: true,
          warnings: true
        }
      }
    },

    filesize: {
      base: {
        files: [{
          src: ['./build/bundle.es5.js', './build/bundle.es5.min.js']
        }],
        options: {
          ouput: [{
            stdout: true
          }]
        }
      }
    }

  })


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-run')
  grunt.loadNpmTasks('grunt-filesize')

  //turn the lib into a flat file
  grunt.registerTask('build', ['run:buildLib', 'uglify', 'filesize'])
  //for development
  grunt.registerTask('demo', ['run:clientWatch'])
  grunt.registerTask('server', ['run:clientWatch'])
  grunt.registerTask('front', ['run:clientWatch'])
  grunt.registerTask('back', ['watch'])

  grunt.registerTask('test', ['run:test'])
  grunt.registerTask('bump', ['bumpup'])
  grunt.registerTask('default', ['run:clientWatch'])
}
