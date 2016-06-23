'use strict';

module.exports = env=> {
    return env === 'dev'
        ? require('./config/webpack-dev.config')
        : require('./config/webpack-prod.config');
};