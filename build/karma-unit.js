module.exports = function ( karma ) {
  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: '../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-payments/lib/angular-payments.min.js',
      'bower_components/angular-load/angular-load.js',
      'bower_components/angular-toaster/angular-toaster.js',
      'bower_components/angular-bootstrap/ui-bootstrap-custom-tpls.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angulartics/dist/angulartics.min.js',
      'bower_components/angulartics/dist/angulartics-ga.min.js',
      'bower_components/angulartics/dist/angulartics-mixpanel.min.js',
      'bower_components/angular-soap/soapclient.js',
      'bower_components/angular-soap/angular.soap.js',
      'build/templates-app.js',
      'build/templates-common.js',
      'bower_components/angular-mocks/angular-mocks.js',
      
      'src/**/*.js',

      'src/**/*.coffee',
    ],
    exclude: [
      'src/assets/**/*.js',
      'src/**/*.e2e.spec.js'
    ],
    frameworks: [ 'jasmine' ],
    plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher', 'karma-coffee-preprocessor' ],
    preprocessors: {
      '**/*.coffee': 'coffee',
    },

    /**
     * How to report, by default.
     */
    reporters: 'dots',

    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 9018,
    runnerPort: 9100,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test on. This includes only "Firefox" by
     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'
    ]
  });
};

