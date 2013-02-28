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
	          "loading.html": "jade/loading.jade"
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
									   "js/editor/base/*.js",
									   "js/**/*.js" ]
				},
				options: {
					 sourceMap: "dist/merge.map",
					 sourceMapRoot: "http://sjpsega.github.com/beechart-editor/"
					 // beautify: true,
					 // compress: false,
					 // mangle: false
				}
			}
		},
		mincss: {
		  compress: {
		    files: {
		      "dist/merge.css": ["css/*.css"]
		    }
		  }
		},
		watch: {
	      jade: {
	        files: ['jade/*.jade','jade/**/*.jade',"Gruntfile.js"],
	        tasks: 'jade'
	      },
	      stylus: {
	        files: ['styl/*.styl',"Gruntfile.js"],
	        tasks: 'stylus'
	      },
	      uglify: {
	        files: ["js/*.js","js/**/*.js","Gruntfile.js"],
	        tasks: 'uglify'
	      },
	      mincss: {
	        files: ["css/*.css","Gruntfile.js"],
	        tasks: 'mincss'
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
	grunt.loadNpmTasks("grunt-contrib-mincss");

	// Default grunt
	// grunt.registerTask( "default", ["mincss"] );
	grunt.registerTask( "default", ["uglify", "jade", "stylus", "mincss", "connect", "watch"] );

	// Short list as a high frequency watch task
	// grunt.registerTask( "dev", [ "selector", "build:*:*", "jshint" ] );
};
