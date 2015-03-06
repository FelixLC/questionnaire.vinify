/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {
  /**
   * The `build_dir` folder is where our projects are compiled during
   * development and the `compile_dir` folder is where our app resides once it's
   * completely built.
   */
  build_dir: 'build',
  compile_dir: 'bin',

  /**
   * This is a collection of file patterns that refer to our app code (the
   * stuff in `src/`). These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `ctpl` contains
   * our reusable components' (`src/common`) template HTML files, while
   * `atpl` contains the same, but for our app's code. `html` is just our
   * main HTML file, `less` is our main stylesheet, and `unit` contains our
   * app's unit tests.
   */
  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    coffee: [ 'src/**/*.coffee', '!src/**/*.spec.coffee' ],
    coffeeunit: [ 'src/**/*.spec.coffee' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  /**
   * This is a collection of files used during testing only.
   */
  test_files: {
    js: [
      'bower_components/angular-mocks/angular-mocks.js'
    ]
  },

  /**
   * This is the same as `app_files`, except it contains patterns that
   * reference vendor code (`bower_components/`) that we need to place into the build
   * process somewhere. While the `app_files` property ensures all
   * standardized files are collected for compilation, it is the user's job
   * to ensure non-standardized (i.e. vendor-related) files are handled
   * appropriately in `vendor_files.js`.
   *
   * The `vendor_files.js` property holds files to be automatically
   * concatenated and minified with our project source files.
   *
   * The `vendor_files.css` property holds any CSS files to be automatically
   * included in our app.
   *
   * The `vendor_files.assets` property holds any assets to be copied along
   * with our app's assets. This structure is flattened, so it is not
   * recommended that you use wildcards.
   */
  vendor_files: {
    js: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-payments/lib/angular-payments.min.js',
      'bower_components/angular-load/angular-load.js',
      'bower_components/angular-toaster/angular-toaster.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-bootstrap/ui-bootstrap-custom-tpls.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angulartics/dist/angulartics.min.js',
      'bower_components/angulartics/dist/angulartics-ga.min.js',
      'bower_components/angulartics/dist/angulartics-mixpanel.min.js',
      'bower_components/angular-soap/soapclient.js',
      'bower_components/angular-soap/angular.soap.js',
      'bower_components/angular-mass-autocomplete/massautocomplete.js',
      'node_modules/lodash-compat/index.js'
    ],
    css: [
    ],
    assets: [
      'bower_components/bootstrap/fonts/*.*'

    ]
  }
};
