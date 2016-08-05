// Loading dependencies.
var gulp = require('gulp');
var gulpProtractor = require('gulp-protractor');

/**
 * Ensures that webdriver/selenium .jar files and binaries are downloaded.
 */
gulp.task('webdriver_update', gulpProtractor.webdriver_update);

/**
 * After ensuring webdriver/selenium files are present, trigger protractor
 * to run through the E2E tests.
 */
gulp.task('default', ['webdriver_update'], function() {
    return gulp
        .src(['./tests/*.js' ])
        .pipe(gulpProtractor.protractor({
            configFile: 'protractor.config.js'
        }))
        .on('error', function(error) {
            throw error;
        })
});
