module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options : {
                jshintrc: ".jshintrc",
                ignores : [ "node_modules/**/*.js" ]
            },
            src: ["Gruntfile.js", "app.js", "admin.js"],
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", [ "lint" ]);

    grunt.registerTask("lint", "Check for common code problems.", [ "jshint" ]);
};
