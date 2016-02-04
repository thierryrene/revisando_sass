module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'extended'
                },
                files: {
                    'build/css/style.css': 'source/scss/style.scss',
                }
            }
        },

        watch: {
            files: ['source/scss/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch')

}