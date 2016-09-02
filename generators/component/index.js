const util = require('../util');
const file = require('../util/file');

module.exports = {
    description: 'Generate a React Component under a feature directory',
    prompts: [
        {
            type: 'input',
            name: 'componentName',
            message: 'What is your Component\'s name?',
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
        {
            type: 'folder',
            name: 'folder',
            message: 'Which folder should this go to?',
            basePath: './src', // Relative to CwD
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return true;
                }

                return 'folder is required';
            },
            default: 'core/components'
        },
    ],
    actions: function (data) {

        const actions = [
            file.addIndex('../src/{{folder}}/{{dashCase componentName}}/index.js'),
            file.addTest('../src/{{folder}}/{{dashCase componentName}}/{{dashCase componentName}}.test.jsx'),
            file.addCss('../src/{{folder}}/{{dashCase componentName}}/{{dashCase componentName}}.css'),
        ];

        if (data.componentType === 'function') {
            actions.push(
                file.addFunction('../src/{{folder}}/{{dashCase componentName}}/{{dashCase componentName}}.jsx')
            );
        } else {
            actions.push(
                file.addClass('../src/{{folder}}/{{dashCase componentName}}/{{dashCase componentName}}.jsx')
            );
        }

        return actions;
    }
};
