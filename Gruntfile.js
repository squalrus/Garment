module.exports = function (grunt) {

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Compile LESS
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                     "dist/underpants/latest.min.css": ["lib/underpants/reset.less", "lib/underpants/underpants.less"]
                }
            }
        },

        // csslint
        csslint: {
            src: ["dist/**/*.css"]
        },

        // Watch Directories / Files
        watch: {
            files: ["lib/**/*.less"],
            tasks: ["default"]
        }
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-csslint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default tasks
    grunt.registerTask("default", ["less", "csslint"]);
};
