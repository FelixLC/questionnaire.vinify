exports.config = {
    /*
     * See referenceConf.js for an example and explanation of the options
     * https://github.com/angular/protractor/blob/master/referenceConf.js
     */

    allScriptsTimeout: 11000,

    specs: [
        '../src/**/*.e2e.spec.js'
    ],

    // A base URL for application under test. Calls to protractor.get()
    // with relative paths will be prepended with this.
    baseUrl: 'http://0.0.0.0:9001/',

    // framework: 'jasmine',
    allScriptsTimeout: 22000,
    multiCapabilities: [ { browserName: 'chrome'  } ]

    // jasmineNodeOpts: {
    //     showColors: true,
    //     defaultTimeoutInterval: 30000
    // }

};
