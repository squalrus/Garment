module.exports = function (grunt) {

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // Compile LESS
        less: {
            development: {
                options: {
                    compress: false,
                    ieCompat: true
                },
                files: {
                     "dist/underpants/latest.css": ["lib/underpants/reset.less", "lib/underpants/main.less"],

                     "dist/tshirt/latest.css": ["lib/tshirt/layout.less", "lib/tshirt/navigation.less", "lib/tshirt/button.less"],

                     "dist/outfit/latest.css": ["dist/underpants/latest.min.css", "dist/tshirt/latest.min.css"]

                }
            },
            production: {
                options: {
                    compress: true,
                    cleancss: true,
                    report: "min"
                },
                files: {
                     "dist/underpants/latest.min.css": ["lib/underpants/reset.less", "lib/underpants/main.less"],

                     "dist/tshirt/latest.min.css": ["lib/tshirt/layout.less", "lib/tshirt/navigation.less", "lib/tshirt/button.less"],

                     "dist/outfit/latest.min.css": ["dist/underpants/latest.min.css", "dist/tshirt/latest.min.css"]

                }
            }
        },

        // csslint
        lesslint: {
            src: ["lib/**/*.less"]
        },

        // Watch Directories / Files
        watch: {
            files: ["lib/**/*.less"],
            tasks: ["default"]
        }
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-lesslint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default tasks
    grunt.registerTask("default", ["less", "lesslint"]);
};
