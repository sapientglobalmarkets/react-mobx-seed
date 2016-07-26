'use strict';

const env = process.env.NODE_ENV;
module.exports = env === 'development'
    ? require('./config/webpack-dev.config')
    : require('./config/webpack-prod.config');
