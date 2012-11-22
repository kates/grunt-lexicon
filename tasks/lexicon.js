/*
 * grunt-lexicon
 * https://github.com/kates/grunt-lexicon
 *
 * Copyright (c) 2012 kates
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('lexicon', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('lexicon'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('lexicon', function() {
    return 'lexicon!!!';
  });

};
