module.exports = function (grunt) {

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        underpants: [
            "lib/underpants/font.less",
            "lib/underpants/reset.less",
            "lib/underpants/main.less",
            "lib/underpants/table.less"
        ],

        tshirt: [
            "lib/tshirt/sections.less",
            "lib/tshirt/layout.less",
            "lib/tshirt/grouping.less",
            "lib/tshirt/navigation.less"
        ],

        pantsuit: [
            "lib/pantsuit/sections.less"
        ],

        outfit: [
            "<%= underpants %>",
            "<%= tshirt %>",
            "<%= pantsuit %>"
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
                    "dist/pantsuit/latest.css": "<%= pantsuit %>",
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
                     "dist/pantsuit/latest.min.css": "<%= pantsuit %>",
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
            tasks: ["default"],
            options: {
                spawn: false
            }
        }
    });

    grunt.event.on("watch", function (action, filepath) {
        grunt.config("lesslint.src", filepath);
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-lesslint");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default tasks
    grunt.registerTask("default", ["less"]);
};
