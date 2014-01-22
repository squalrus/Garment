module.exports = function (grunt) {

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        underpants: [
            "lib/underpants/reset.less",
            "lib/underpants/main.less"
        ],

        tshirt: [
            "lib/tshirt/sections.less",
            "lib/tshirt/layout.less",
            "lib/tshirt/grouping.less",
            "lib/tshirt/navigation.less",
            "lib/tshirt/button.less"
        ],

        outfit: [
            "<%= underpants %>",
            "<%= tshirt %>"
        ],

        // Compile LESS
        less: {
            development: {
                options: {
                    compress: false,
                    ieCompat: true
                },
                files: {
                    "dist/underpants/latest.css": "<%= underpants %>",
                    "dist/tshirt/latest.css": "<%= tshirt %>",
                    "dist/outfit/latest.css": "<%= outfit %>"

                }
            },
            production: {
                options: {
                    compress: true,
                    cleancss: true,
                    report: "min"
                },
                files: {
                     "dist/underpants/latest.min.css": "<%= underpants %>",
                     "dist/tshirt/latest.min.css": "<%= tshirt %>",
                     "dist/outfit/latest.min.css": "<%= outfit %>"

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
