module.exports = function (plop) {
    plop.setGenerator('component', require('./generators/component'));
    plop.setGenerator('feature', require('./generators/feature'));
};