/* eslint-env node */

'use strict';


var path = require('path');
var swPrecache = require('sw-precache');
var rootDir = 'src';

module.exports = function(gulp) {
gulp.task('generate-service-worker', function(callback) {



  swPrecache.write(`${rootDir}/service-worker.js`, {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: rootDir
  }, callback);
});
}
