// Loading dependencies.
var fs = require('fs');

// Building a regular expression to find .jar file.
var jarFileRegex = new RegExp(/\.jar$/);

// Building path to the selenium folder.
var seleniumFolder = `${__dirname}/node_modules/protractor/node_modules/webdriver-manager/selenium/`;

// Retrieve the file listings from the selenium folder.
var seleniumFiles = fs.readdirSync(seleniumFolder);

// Cycle the directory listings to find the selenium .jar file.
var jarFilename = seleniumFiles.find(function(file) {
    return jarFileRegex.test(file);
});

// Building the absolute path to the selenium .jar file.
var jarFilePath = `${seleniumFolder}${jarFilename}`;

/**
 * Configuration options for WebDriver and Protractor.
 * https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 *
 * @type {Object}
 */
module.exports.config = {

    /**
     * The name of the test framework to use.
     *
     * @type {String}
     */
    framework: 'mocha',

    /**
     * Options passed to mocha.
     *
     * @type {Object}
     */
    mochaOpts: {
        ui: 'bdd',
        reporter: 'list',
        slow: 4000,
        timeout: 8000
    },

    /**
     * The absolute path to the selenium standalone jar file.
     *
     * @type {String}
     */
    seleniumServerJar: jarFilePath,

    /**
     * Options for single browser testing.
     * https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
     *
     * @type {Object}
     */
    capabilities: {

        /**
         * The name of the browser being used.
         *
         * @type {String}
         */
        browserName: 'chrome'

    }

};
