module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-ui-router/release/angular-ui-router.js',
            'node_modules/firebase/lib/firebase-web.js',
            'node_modules/angularfire/dist/angularfire.js',
            'node_modules/mockfirebase/browser/mockfirebase.js',
            'node_modules/angular-animate/angular-animate.js',
            'node_modules/angular-aria/angular-aria.js',
            'node_modules/angular-messages/angular-messages.js',
            'node_modules/angular-material/angular-material-mocks.js',
            'node_modules/angular-material/angular-material.js',
            'node_modules/angular-material-data-table/dist/md-data-table.js',
            'app.js',
            'pages/currency-page/currencyPage.js',
            'pages/main-page/mainPage.js',
            'components/ngf-stocks/ngfStocks.js',
            'app*.js',
            'components/**/*.js',
            'pages/**/*.js',
            'components/**/*.tmpl.html',
            'pages/**/*.tmpl.html'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'pages/**/!(*spec).js': ['coverage'],
            'components/**/!(*spec).js': ['coverage'],
            'app!(*spec).js': ['coverage'],
            'pages/**/*.spec.js': ['babel'],
            'components/**/*.spec.js': ['babel'],
            '**/*.tmpl.html': ['ng-html2js']
        },

        // Babel preprocessor configuration
        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            }
        },

        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // Code test coverage reporter configuration
        coverageReporter: {
            type: 'html',
            dir: 'coverage/',
            subdir: 'report-html'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE ||
        // config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
