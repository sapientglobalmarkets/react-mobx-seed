const util = require('../util');
const file = require('../util/file');

module.exports = {
    description: 'Generate a feature',
    prompts: [
        {
            type: 'input',
            name: 'featureName',
            message: 'What is your Feature\'s name?',
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return util.featureExists(value) ? 'This feature already exists' : true;
                }

                return 'name is required';
            },
            default: 'MyFeature'
        },
        {
            type: 'input',
            name: 'componentName',
            message: 'What is the name of your root Component?',
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return true;
                }
                return 'name is required';
            },
            default: 'MyComponent'
        },
        {
            type: 'list',
            name: 'componentType',
            message: 'What type of Component do you want?',
            choices: [
                {name: 'Stateless Function', value: 'function'},
                {name: 'Component Class', value: 'class'},
            ],
            default: 'function'
        },
        {
            type: 'confirm',
            name: 'observer',
            message: 'Make it a MobX observer?',
            default: false
        },
    ],
    actions: function (data) {
        const actions = [
            file.addFeatureIndex('../src/{{dashCase featureName}}/index.js'),
            file.addStore('../src/{{dashCase featureName}}/{{dashCase featureName}}.store.js'),
            file.addTest('../src/{{dashCase featureName}}/components/{{dashCase componentName}}.test.jsx'),
            file.addCss('../src/{{dashCase featureName}}/components/{{dashCase componentName}}.css'),
        ];

        if (data.componentType === 'function') {
            actions.push(
                file.addFunction('../src/{{dashCase featureName}}/components/{{dashCase componentName}}.jsx')
            );
        } else {
            actions.push(
                file.addClass('../src/{{dashCase featureName}}/components/{{dashCase componentName}}.jsx')
            );
        }

        return actions;
    }
};
