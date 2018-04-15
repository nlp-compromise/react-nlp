module.exports = function (grunt) {

  grunt.initConfig({


    run: {
      //watcher for clientside work
      clientWatch: {
        exec: 'webpack-dev-server --hot --progress --colors --host 0.0.0.0 --port 8080'
      }
    }


  })


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-babel')
  grunt.loadNpmTasks('grunt-run')
  
  grunt.registerTask('default', ['run:clientWatch'])
}
