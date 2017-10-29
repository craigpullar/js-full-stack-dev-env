module.exports = function(grunt) {



	grunt.initConfig({
		release: {
			options: {

				folder : '/',
				npm: false,
				npmtag: false
			}
		},
		gitadd: {
			task: {
				options: {
					force: false,
					all: true
				},

			}
		},
		assemble: {
			options: {
				assets : './client/images/',
				partials: ['./client/partials/*.html'],
				layout: ['./client/layouts/default.html'],
			},
			site: {
				src: ['./client/views/*.html'],
				dest: './host/'
			}
		},
	});

	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-assemble');



	//git
	grunt.registerTask('version', function(args) {
		grunt.task.run(['gitadd', 'release:'+args]);
	});


};
