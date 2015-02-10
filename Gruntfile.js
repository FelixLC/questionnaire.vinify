module.exports = function (grunt) {

  /**
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-html-snapshot');

  /**
   * Load in our build configuration file.
   */
  var userConfig = require('./build.config.js');

  /**
   * This is the configuration object Grunt uses to give each plugin its
   * instructions.
   */
  var taskConfig = {

    /**
     * Load our secret access keys
     */
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'eu-west-1',
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      staging: {
        options: {
          bucket: 'staging.vinify.co',
          differential: 'true'
        },
        files: [
          {dest: 'assets/', 'action': 'delete', cwd: 'bin/assets/'},
          {expand: true, cwd: 'bin/', src: ['*.html'], dest: '', params: {CacheControl: 'max-age=0', ContentType: 'text/html; charset=utf-8'}},
          {expand: true, cwd: 'bin/assets/', src: ['**'], exclude: ["**/*.js", "**/*.css"], dest: 'assets/'},
          {expand: true, cwd: 'dist/assets/',  src: ['**/*js'], dest: 'assets/', params: {ContentType: 'application/javascript; charset=utf-8', ContentEncoding: 'gzip'}},
          {expand: true, cwd: 'dist/assets/',  src: ['**/*css'], dest: 'assets/', params: {ContentType: 'text/css; charset=utf-8', ContentEncoding: 'gzip'}}
        ]
      },
      production: {
        options: {
          bucket: 'start.vinify.co'
        },
        files: [
          {dest: 'assets/', 'action': 'delete', cwd: 'bin/assets/', differential: 'true'},
          {expand: true, cwd: 'bin/', src: ['*.html'], dest: '', params: {CacheControl: 'max-age=0', ContentType: 'text/html; charset=utf-8'}},
          {expand: true, cwd: 'bin/assets/', src: ['**'], exclude: ["**/*.js", "**/*.css"], dest: 'assets/', differential: 'true'},
          {expand: true, cwd: 'dist/assets/',  src: ['**/*js'], dest: 'assets/', params: {ContentType: 'application/javascript; charset=utf-8', ContentEncoding: 'gzip'}, differential: 'true'},
          {expand: true, cwd: 'dist/assets/',  src: ['**/*css'], dest: 'assets/', params: {ContentType: 'text/css; charset=utf-8', ContentEncoding: 'gzip'}, differential: 'true'}
        ]
      },
      clean_production: {
        options: {
          bucket: 'my-wonderful-production-bucket',
          debug: true // Doesn't actually delete but shows log
        },
        files: [
          {dest: 'app/', action: 'delete'},
          {dest: 'assets/', exclude: "**/*.tgz", action: 'delete'}, // will not delete the tgz
          {dest: 'assets/large/', exclude: "**/*copy*", flipExclude: true, action: 'delete'} // will delete everything that has copy in the name
        ]
      },
      download_production: {
        options: {
          bucket: 'my-wonderful-production-bucket'
        },
        files: [
          {dest: 'app/', cwd: 'backup/', action: 'download'}, // Downloads the content of app/ to backup/
          {dest: 'assets/', cwd: 'backup-assets/', exclude: "**/*copy*", action: 'download'} // Downloads everything which doesn't have copy in the name
        ]
      },
      secret: {
        options: {
          bucket: 'my-wonderful-private-bucket',
          access: 'private'
        },
        files: [
          {expand: true, cwd: 'secret_garden/', src: ['*.key'], dest: 'secret/'}
        ]
      }
    },

    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON("package.json"),
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build'
        }
      }
    },
    /**
     * The banner is the comment that is placed at the top of our compiled
     * source files. It is first processed as a Grunt template, where the `<%=`
     * pairs are evaluated based on this very configuration object.
     */
    meta: {
      banner:
        '/**\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
        ' */\n'
    },

    /**
     * Creates a changelog on a new version.
     */
    changelog: {
      options: {
        dest: 'CHANGELOG.md',
        template: 'changelog.tpl'
      }
    },

    /**
     * Increments the version number, etc.
     */
    bump: {
      options: {
        files: [
          "package.json",
          "bower.json"
        ],
        commit: false,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
          "package.json",
          "client/bower.json"
        ],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'origin'
      }
    },

    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: [
      '<%= build_dir %>',
      '<%= compile_dir %>'
    ],

    /**
     * The `copy` task just copies files from A to B. We use it here to copy
     * our project assets (images, fonts, etc.) and javascripts into
     * `build_dir`, and then to copy the assets to `compile_dir`.
     */
    copy: {
      build_app_assets: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= build_dir %>/assets/',
            cwd: 'src/assets',
            expand: true
          }
       ]
      },
      build_vendor_assets: {
        files: [
          {
            src: [ '<%= vendor_files.assets %>' ],
            dest: '<%= build_dir %>/assets/',
            cwd: '.',
            expand: true,
            flatten: true
          }
       ]
      },
      build_vendor_css: {
        files: [
          {
            src: [ '<%= vendor_files.css %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
       ]
      },
      build_appjs: {
        files: [
          {
            src: [ '<%= app_files.js %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
        ]
      },
      build_vendorjs: {
        files: [
          {
            src: [ '<%= vendor_files.js %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
        ]
      },
      compile_assets: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= compile_dir %>/assets',
            cwd: '<%= build_dir %>/assets',
            expand: true
          }
        ]
      },
      copy_global: {
        files: [
          {
            src: [ '<%= build_dir %>/**' ],
            dest: '../global',
            cwd: '.',
            expand: true
          }
        ]
      }
    },

    /**
     * `grunt concat` concatenates multiple source files into a single file.
     */
    concat: {
      /**
       * The `build_css` target concatenates compiled CSS and vendor CSS
       * together.
       */
      build_css: {
        src: [
          '<%= vendor_files.css %>',
          '<%= recess.build.dest %>'
        ],
        dest: '<%= recess.build.dest %>'
      },
      /**
       * The `compile_js` target is the concatenation of our application source
       * code and all specified vendor source code into a single file.
       */
      compile_js: {
        options: {
          banner: '<%= meta.banner %>'
        },
        src: [
          '<%= vendor_files.js %>',
          'module.prefix',
          '<%= build_dir %>/src/**/*.js',
          '<%= html2js.app.dest %>',
          '<%= html2js.common.dest %>',
          'module.suffix'
        ],
        dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },

    /**
     * `grunt coffee` compiles the CoffeeScript sources. To work well with the
     * rest of the build, we have a separate compilation task for sources and
     * specs so they can go to different places. For example, we need the
     * sources to live with the rest of the copied JavaScript so we can include
     * it in the final build, but we don't want to include our specs there.
     */
    coffee: {
      source: {
        options: {
          bare: true
        },
        expand: true,
        cwd: '.',
        src: [ '<%= app_files.coffee %>' ],
        dest: '<%= build_dir %>',
        ext: '.js'
      }
    },

    /**
     * `ng-min` annotates the sources before minifying. That is, it allows us
     * to code without the array syntax.
     */
    ngmin: {
      compile: {
        files: [
          {
            src: [ '<%= app_files.js %>' ],
            cwd: '<%= build_dir %>',
            dest: '<%= build_dir %>',
            expand: true
          }
        ]
      }
    },

    ngAnnotate: {
      app: {
        files: [
          {
            src: [ '<%= app_files.js %>' ],
            cwd: '<%= build_dir %>',
            dest: '<%= build_dir %>',
            expand: true
          }
        ]
      }
    },

    /**
     * Minify the sources!
     */
    uglify: {
      compile: {
        options: {
          banner: '<%= meta.banner %>'
        },
        files: {
          '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
        }
      }
    },

    /**
     * Compress our images
     */
    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [
          {
            expand: true,                  // Enable dynamic expansion
            cwd: 'src/',                   // Src matches are relative to this path
            src: [ '**/*.{png,jpg,gif}' ],   // Actual patterns to match
            dest: 'bin/'                  // Destination path prefix
          }
        ]
      }
    },

    /**
     * `recess` handles our LESS compilation and uglification automatically.
     * Only our `main.less` file is included in compilation; all other files
     * must be imported from this file.
     */
   less: {
      build: {
        options: {
          paths: [ "assets/css" ]
        },
        files: {
          "<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css": "<%= app_files.less %>"
        }
      },
      compile: {
        options: {
          paths: [ "assets/css" ],
          cleancss: true
        },
        files: {
          "<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css": "<%= app_files.less %>"
        }
      }
    },

    recess: {
      build: {
        src: [ '<%= app_files.less %>' ],
        dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css',
        options: {
          compile: true,
          compress: false,
          noUnderscores: false,
          noIDs: false,
          zeroUnits: false
        }
      },
      compile: {
        src: [ '<%= recess.build.dest %>' ],
        dest: '<%= recess.build.dest %>',
        options: {
          compile: true,
          compress: true,
          noUnderscores: false,
          noIDs: false,
          zeroUnits: false
        }
      }
    },

    /**
     * `jshint` defines the rules of our linter as well as which files we
     * should check. This file, all javascript sources, and all our unit tests
     * are linted based on the policies listed in `options`. But we can also
     * specify exclusionary patterns by prefixing them with an exclamation
     * point (!); this is useful when code comes from a third party but is
     * nonetheless inside `src/`.
     */
    jshint: {
      src: [
        '<%= app_files.js %>'
      ],
      test: [
        '<%= app_files.jsunit %>'
      ],
      gruntfile: [
        'Gruntfile.js'
      ],
      options: {
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    },

    /**
     * `coffeelint` does the same as `jshint`, but for CoffeeScript.
     * CoffeeScript is not the default in ngBoilerplate, so we're just using
     * the defaults here.
     */
    coffeelint: {
      src: {
        files: {
          src: [ '<%= app_files.coffee %>' ]
        }
      },
      test: {
        files: {
          src: [ '<%= app_files.coffeeunit %>' ]
        }
      }
    },

    /**
     * HTML2JS is a Grunt plugin that takes all of your template files and
     * places them into JavaScript files as strings that are added to
     * AngularJS's template cache. This means that the templates too become
     * part of the initial payload as one JavaScript file. Neat!
     */
    html2js: {
      /**
       * These are the templates from `src/app`.
       */
      app: {
        options: {
          base: 'src/app'
        },
        src: [ '<%= app_files.atpl %>' ],
        dest: '<%= build_dir %>/templates-app.js'
      },

      /**
       * These are the templates from `src/common`.
       */
      common: {
        options: {
          base: 'src/common'
        },
        src: [ '<%= app_files.ctpl %>' ],
        dest: '<%= build_dir %>/templates-common.js'
      }
    },

  /**
   * gzip assets.
   */
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        files: [
          { expand: true, cwd: 'bin/assets', src: [ '**/*.css' ], dest: 'dist/assets/' },
          { expand: true, cwd: 'bin/assets', src: [ '**/*.js' ], dest: 'dist/assets/' }
        ]
      }
    },

    /**
     * The Karma configurations.
     */
    karma: {
      options: {
        configFile: '<%= build_dir %>/karma-unit.js'
      },
      unit: {
        port: 9101,
        background: true
      },
      continuous: {
        singleRun: true
      }
    },

    /**
     * The `index` task compiles the `index.html` file as a Grunt template. CSS
     * and JS files co-exist here but they get split apart later.
     */
    index: {

      /**
       * During development, we don't want to have wait for compilation,
       * concatenation, minification, etc. So to avoid these steps, we simply
       * add all script files directly to the `<head>` of `index.html`. The
       * `src` property contains the list of included files.
       */
      build: {
        dir: '<%= build_dir %>',
        src: [
          '<%= vendor_files.js %>',
          '<%= build_dir %>/src/**/*.js',
          '<%= html2js.common.dest %>',
          '<%= html2js.app.dest %>',
          '<%= vendor_files.css %>',
          '<%= recess.build.dest %>'
        ]
      },

      /**
       * When it is time to have a completely compiled application, we can
       * alter the above to include only a single JavaScript and a single CSS
       * file. Now we're back!
       */
      compile: {
        dir: '<%= compile_dir %>',
        src: [
          '<%= concat.compile_js.dest %>',
          '<%= vendor_files.css %>',
          '<%= recess.compile.dest %>'
        ]
      }
    },

    /**
     * This task compiles the karma template so that changes to its file array
     * don't have to be managed manually.
     */
    karmaconfig: {
      unit: {
        dir: '<%= build_dir %>',
        src: [
          '<%= vendor_files.js %>',
          '<%= html2js.app.dest %>',
          '<%= html2js.common.dest %>',
          '<%= test_files.js %>'
        ]
      }
    },

    /**
     * And for rapid development, we have a watch set up that checks to see if
     * any of the files listed below change, and then to execute the listed
     * tasks when they do. This just saves us from having to type "grunt" into
     * the command-line every time we want to see what we're working on; we can
     * instead just leave "grunt watch" running in a background terminal. Set it
     * and forget it, as Ron Popeil used to tell us.
     *
     * But we don't need the same thing to happen for all the files.
     */
    delta: {
      /**
       * By default, we want the Live Reload to work for all tasks; this is
       * overridden in some tasks (like this file) where browser resources are
       * unaffected. It runs by default on port 35729, which your browser
       * plugin should auto-detect.
       */
      options: {
        livereload: true
      },

      /**
       * When the Gruntfile changes, we just want to lint it. In fact, when
       * your Gruntfile changes, it will automatically be reloaded!
       */
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: [ 'jshint:gruntfile' ],
        options: {
          livereload: false
        }
      },

      /**
       * When our JavaScript source files change, we want to run lint them and
       * run our unit tests.
       */
      jssrc: {
        files: [
          '<%= app_files.js %>'
        ],
        tasks: [ 'jshint:src', 'karma:unit:run', 'copy:build_appjs', 'copy:copy_global' ]
      },

      /**
       * When our CoffeeScript source files change, we want to run lint them and
       * run our unit tests.
       */
      coffeesrc: {
        files: [
          '<%= app_files.coffee %>'
        ],
        tasks: [ 'coffeelint:src', 'coffee:source', 'karma:unit:run', 'copy:build_appjs', 'copy:copy_global' ]
      },

      /**
       * When assets are changed, copy them. Note that this will *not* copy new
       * files, so this is probably not very useful.
       */
      assets: {
        files: [
          'src/assets/**/*'
        ],
        tasks: [ 'copy:build_app_assets', 'copy:copy_global' ]
      },

      /**
       * When index.html changes, we need to compile it.
       */
      html: {
        files: [ '<%= app_files.html %>' ],
        tasks: [ 'index:build' ]
      },

      /**
       * When our templates change, we only rewrite the template cache.
       */
      tpls: {
        files: [
          '<%= app_files.atpl %>',
          '<%= app_files.ctpl %>'
        ],
        tasks: [ 'html2js' ]
      },

      /**
       * When the CSS files change, we need to compile and minify them.
       */
      less2: {
        files: [ 'src/**/*.less' ],
        tasks: [ 'less:build' ]
      },

      /**
       * When a JavaScript unit test file changes, we only want to lint it and
       * run the unit tests. We don't want to do any live reloading.
       */
      jsunit: {
        files: [
          '<%= app_files.jsunit %>'
        ],
        tasks: [ 'jshint:test', 'karma:unit:run' ],
        options: {
          livereload: false
        }
      },

      /**
       * When a CoffeeScript unit test file changes, we only want to lint it and
       * run the unit tests. We don't want to do any live reloading.
       */
      coffeeunit: {
        files: [
          '<%= app_files.coffeeunit %>'
        ],
        tasks: [ 'coffeelint:test', 'karma:unit:run' ],
        options: {
          livereload: false
        }
      }
    },

      /**
       * generates html snapshots and save it
       */
      htmlSnapshot: {
            all: {
              options: {
                //that's the path where the snapshots should be placed
                //it's empty by default which means they will go into the directory
                //where your Gruntfile.js is placed
                snapshotPath: 'snapshots/',
                //This should be either the base path to your index.html file
                //or your base URL. Currently the task does not use it's own
                //webserver. So if your site needs a webserver to be fully
                //functional configure it here.
                sitePath: 'https://start.vinify.co/index.html',
                //sanitize function to be used for filenames. Converts '#/' to '_' as default
                //has a filename argument, must have a return that is a sanitized string
                sanitize: function (requestUri) {
                    //returns 'index.html' if the url is '/', otherwise a prefix
                    if (/\/$/.test(requestUri)) {
                      return 'index.html';
                    } else {
                      return requestUri.replace(/\//g, 'prefix-');
                    }
                },
                //here goes the list of all urls that should be fetched
                urls: [
                  "#/vin/pouilly-fume-vieilles-vignes-jp-bailly-2011",
                  "#/vin/chateau-baret-2002",
                  "#/vin/chateau-baret-2003",
                  "#/vin/marquis-de-montmelas-rouge-2007",
                  "#/vin/montmelas-cuvee-speciale-1566-2010",
                  "#/vin/marquis-de-montmelas-blanc-2011",
                  "#/vin/montmains-domaine-chevallier-2012",
                  "#/vin/cuvee-prestige-domaine-chevallier-2012",
                  "#/vin/montmains-domaine-chevallier-2013",
                  "#/vin/cuvee-prestige-domaine-chevallier-2013",
                  "#/vin/chateau-la-trochoire-2008",
                  "#/vin/chateau-la-trochoire-2010",
                  "#/vin/fleurie-cuvee-jules-appert-2011",
                  "#/vin/riesling-rittersberg-bernhard-et-reibel-2011",
                  "#/vin/pinot-noir-domaine-bernhard-et-reibel-2012",
                  "#/vin/anjou-rouge-domaine-la-croix-2011",
                  "#/vin/anjou-rouge-domaine-la-croix-2013",
                  "#/vin/domaine-de-venus-rouge-2004",
                  "#/vin/domaine-de-venus-rouge-2006",
                  "#/vin/leffrontee-de-venus-2009",
                  "#/vin/domaine-de-venus-rose-2012",
                  "#/vin/chateau-de-chamirey-2008",
                  "#/vin/le-renard-2011",
                  "#/vin/cotes-dauxerre-domaine-felix-fils-2012",
                  "#/vin/loi-domaine-saladin-2010",
                  "#/vin/paul-domaine-saladin-2012",
                  "#/vin/tralala-2013",
                  "#/vin/le-clos-des-joubert-2010",
                  "#/vin/lexcellence-vieilles-vignes-2012",
                  "#/vin/lexcellence-vieilles-vignes-2013",
                  "#/vin/terroir-les-gras-moutons-2013",
                  "#/vin/gewurztraminer-pierre-frick-2009",
                  "#/vin/riesling-gd-cru-steinert-pierre-frick-2009",
                  "#/vin/pinot-noir-pierre-frick-2010",
                  "#/vin/cuvee-florence-domaine-les-goubert-2006",
                  "#/vin/beaumes-de-venise-domaine-les-goubert-2010",
                  "#/vin/sablet-rouge-domaine-les-goubert-2011",
                  "#/vin/les-favoris-domaine-les-goubert-2012",
                  "#/vin/sablet-blanc-domaine-les-goubert-2012",
                  "#/vin/beaumes-de-venise-domaine-les-goubert-2012",
                  "#/vin/gewurztraminer-gloeckelberg-koehly-2011",
                  "#/vin/riesling-hahnenberg-koehly-2011",
                  "#/vin/gewurztraminer-gloeckelberg-koehly-2012",
                  "#/vin/gewurztraminer-hannenberg-koehly-2012",
                  "#/vin/pinot-noir-koehly-2012",
                  "#/vin/saumur-domaine-lavigne-2012",
                  "#/vin/marquis-de-pennautier-2011",
                  "#/vin/chateau-de-ciffre-2011",
                  "#/vin/chateau-la-veille-cure-2006",
                  "#/vin/chateau-la-veille-cure-2011",
                  "#/vin/les-grains-merlot-2011",
                  "#/vin/orca-2011",
                  "#/vin/doria-2012",
                  "#/vin/grand-marrenon-blanc-2012",
                  "#/vin/private-gallery-rouge-2012",
                  "#/vin/grand-marrenon-rouge-2012",
                  "#/vin/les-grains-syrah-2012",
                  "#/vin/les-grains-chardonnay-2013",
                  "#/vin/les-grains-vermentino-2013",
                  "#/vin/doria-2013",
                  "#/vin/private-gallery-blanc-2013",
                  "#/vin/les-grains-viognier-2013",
                  "#/vin/petula-2013",
                  "#/vin/rosefine-2013",
                  "#/vin/cuvee-m-2013",
                  "#/vin/alliance-des-generations-2005",
                  "#/vin/boa-le-rouge-2009",
                  "#/vin/cent-visages-2010",
                  "#/vin/la-rosee-2012",
                  "#/vin/laurus-2011",
                  "#/vin/laurus-2012",
                  "#/vin/laurus-blanc-2013",
                  "#/vin/terre-de-galets-blanc-2013",
                  "#/vin/chateau-de-tresques-2013",
                  "#/vin/plan-de-dieu-saint-mapalis-2013",
                  "#/vin/gm-gabriel-meffre-2013",
                  "#/vin/chateau-des-jacques-louis-jadot-2004",
                  "#/vin/expression-domaine-de-lebeaupin-2007",
                  "#/vin/confidence-domaine-de-lebeaupin-2010",
                  "#/vin/malbec-domaine-de-lebeaupin-2011",
                  "#/vin/tentation-domaine-de-lebeaupin-2012",
                  "#/vin/elegance-domaine-de-lebeaupin-2012",
                  "#/vin/elegance-domaine-de-lebeaupin-2013",
                  "#/vin/st-lambert-domaine-de-paimpare-2011",
                  "#/vin/clos-de-bretonneau-domaine-de-paimpare-2011",
                  "#/vin/cuvee-floriane-domaine-de-paimpare-2011",
                  "#/vin/vielles-vignes-domaine-de-paimpare-2013",
                  "#/vin/cremant-de-loire-rose-sec-domaine-de-paimpare-2013",
                  "#/vin/clos-castelot-2010",
                  "#/vin/chateau-sipian-2010",
                  "#/vin/chateau-moya-2011",
                  "#/vin/clos-des-lunes-lune-dargent-2012",
                  "#/vin/r-cru-classe-2013",
                  "#/vin/chateau-boutisse-2009",
                  "#/vin/recougne-terra-recognita-2010",
                  "#/vin/burkes-of-bordeaux-blanc-2012",
                  "#/vin/les-renardes-domaine-thevenot-fils-2011",
                  "#/vin/pinot-beurot-domaine-thevenot-le-brun-fils-2012",
                  "#/vin/les-renardes-domaine-thevenot-fils-2012",
                  "#/vin/pinot-beurot-domaine-thevenot-le-brun-fils-2013"
                ]
              }
            }
        }

  };

  grunt.initConfig(grunt.util._.extend(taskConfig, userConfig));

  /**
   * In order to make it safe to just compile or copy *only* what was changed,
   * we need to ensure we are starting from a clean, fresh build. So we rename
   * the `watch` task to `delta` (that's why the configuration var above is
   * `delta`) and then add a new task called `watch` that does a clean build
   * before watching for changes.
   */
  grunt.renameTask('watch', 'delta');
  grunt.registerTask('watch', [ 'connect', 'build', 'karma:unit', 'delta' ]);

  /**
   * The default task is to build and compile.
   */
  grunt.registerTask('default', [ 'build', 'compile' ]);

  /**
   * The `build` task gets your app ready to run for development and testing.
   */
  grunt.registerTask('build', [
    'clean', 'html2js', 'jshint', 'coffeelint', 'coffee', 'less:build',
    'concat:build_css', 'copy:build_app_assets', 'copy:build_vendor_assets', 'copy:build_vendor_css',
    'copy:build_appjs', 'copy:build_vendorjs', 'index:build', 'copy:copy_global', 'karmaconfig',
    'karma:continuous'
  ]);

  /**
   * The `compile` task gets your app ready for deployment by concatenating and
   * minifying your code.
   */
  grunt.registerTask('compile', [
    'less:compile', 'copy:compile_assets', 'ngAnnotate', 'concat:compile_js', 'uglify', 'index:compile',
     'imagemin'
  ]);

  grunt.registerTask('deploy', [
    'bump', 'compile', 'compress', 'aws_s3:production'
  ]);

  /**
   * A utility function to get all app JavaScript sources.
   */
  function filterForJS (files) {
    return files.filter(function (file) {
      return file.match(/\.js$/);
    });
  }

  /**
   * A utility function to get all app CSS sources.
   */
  function filterForCSS (files) {
    return files.filter(function (file) {
      return file.match(/\.css$/);
    });
  }

  /**
   * The index.html template includes the stylesheet and javascript sources
   * based on dynamic names calculated in this Gruntfile. This task assembles
   * the list into variables for the template to use and then runs the
   * compilation.
   */
  grunt.registerMultiTask('index', 'Process index.html template', function () {
    var dirRE = new RegExp('^('+grunt.config('build_dir')+'|'+grunt.config('compile_dir')+')\/', 'g');
    var jsFiles = filterForJS(this.filesSrc).map(function (file) {
      return file.replace(dirRE, '');
    });
    var cssFiles = filterForCSS(this.filesSrc).map(function (file) {
      return file.replace(dirRE, '');
    });

    grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
      process: function (contents, path) {
        return grunt.template.process(contents, {
          data: {
            scripts: jsFiles,
            styles: cssFiles,
            version: grunt.config('pkg.version')
          }
        });
      }
    });
  });

  /**
   * In order to avoid having to specify manually the files needed for karma to
   * run, we use grunt to manage the list for us. The `karma/*` files are
   * compiled as grunt templates for use by Karma. Yay!
   */
  grunt.registerMultiTask('karmaconfig', 'Process karma config templates', function () {
    var jsFiles = filterForJS(this.filesSrc);

    grunt.file.copy('karma/karma-unit.tpl.js', grunt.config('build_dir') + '/karma-unit.js', {
      process: function (contents, path) {
        return grunt.template.process(contents, {
          data: {
            scripts: jsFiles
          }
        });
      }
    });
  });
};
