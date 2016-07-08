module.exports = {
    addCss: path=>templateFile(path, './component/css.hbs'),
    addIndex: path=>templateFile(path, './component/index.hbs'),
    addTest: path=>templateFile(path, './component/test.hbs'),
    addFunction: path=>templateFile(path, './component/function.hbs'),
    addClass: path=>templateFile(path, './component/class.hbs'),

    addFeatureIndex: path=>templateFile(path, './feature/index.hbs'),
    addStore: path=>templateFile(path, './feature/store.hbs'),
};

function templateFile(path, template) {
    return {
        type: 'add',
        path: path,
        templateFile: template
    };
}