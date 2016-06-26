module.exports = function (plop) {
    plop.setGenerator('component', require('./component'));
    plop.setGenerator('feature', require('./feature'));
};