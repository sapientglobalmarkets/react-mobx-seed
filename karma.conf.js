process.env.BABEL_ENV = 'test'; // Set the proper environment for babel

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],

        files: [
            'src/test.index.js',
        ],
        exclude: [],


        preprocessors: {
            'src/test.index.js': ['webpack', 'sourcemap'],
        },
        webpack: require('./config/webpack-test.config'),
        webpackMiddleware: {stats: 'none'},


        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {type: 'html', subdir: 'html'},
                {type: 'text-summary'}
            ],
            includeAllSources: true,
            instrumenterOptions: {
                istanbul: {noCompact: true}
            }
        },


        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    });
};
