/**
 * componentExists
 *
 * Check whether the given component exist in src directory
 */

const fs = require('fs');
const path = require('path');

module.exports = {
    componentExists,
    featureExists
};

function componentExists(componentName, featureName) {
    const fullPath = path.resolve(process.cwd(), `src/${featureName}/${componentName}`);
    return !!fs.statSync(fullPath);
}

function featureExists(featureName) {
    const fullPath = path.resolve(process.cwd(), `src/${featureName}`);
    return !!fs.statSync(fullPath);
}

