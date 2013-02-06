module.exports = function( grunt ) {

	"use strict";

	var distpaths = [
			"dist/jquery.js",
			"dist/jquery.min.map",
			"dist/jquery.min.js"
		],
		readOptionalJSON = function( filepath ) {
			var data = {};
			try {
				data = grunt.file.readJSON( filepath );
			} catch(e) {}
			return data;
		};

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		dst: readOptionalJSON("dist/.destination.json"),
		jade: {
	      debug: {
	        options: {
	          pretty: true
	        },
	        files: {
	          "index.html": "jade/index.jade",
	          "filedownload.html": "jade/filedownload.jade",
	        }
	      }
	    },
	    stylus: {
	      compile: {
	        options: {
	          compress: false
	        },
	        files: {
	          'css/page.css': ['styl/page.styl'] // compile individually into dest, maintaining folder structure
	        }
	      }
	    },
	    watch: {
	      jade: {
	        files: ['jade/*.jade','jade/**/*.jade'],
	        tasks: 'jade'
	      },
	      stylus: {
	        files: ['styl/*.styl'],
	        tasks: 'stylus'
	      },
	      uglify: {
	        files: ["js/*.js","js/**/*.js"],
	        tasks: 'uglify'
	      }
	    },
	    connect:{
	 		server: {
	 			options:{
	 				port: 80,
		      		base: '.'
	 			}
		    }
	    },
		uglify: {
			all: {
				files: {
					"dist/merge.js": [ "js/jquery.js",
									   "js/underscore.js",
									   "js/underscore.string.js",
									   "js/backbone.js",
									   "js/bootstrap.js",
									   "js/flash.js",
									   "js/FileSaver.js",
									   "js/log.js",
									   "js/**/*.js" ]
				},
				options: {
				}
			}
		}
	});
	// Load grunt tasks from NPM packages
	grunt.loadNpmTasks("grunt-compare-size");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-jade");
	grunt.loadNpmTasks("grunt-contrib-stylus");
	grunt.loadNpmTasks("grunt-contrib-connect");

	// Default grunt
	// grunt.registerTask( "default", ["stylus"] );
	grunt.registerTask( "default", ["uglify", "jade", "stylus", "connect", "watch"] );

	// Short list as a high frequency watch task
	// grunt.registerTask( "dev", [ "selector", "build:*:*", "jshint" ] );
};
