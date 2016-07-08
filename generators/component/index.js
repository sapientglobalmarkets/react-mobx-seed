const plop = require('plop');
const util = require('../util');
const file = require('../util/file');

module.exports = {
    description: 'Generate a React Component under a feature directory',
    prompts: [
        {
            type: 'input',
            name: 'name',
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
            name: 'type',
            message: 'What type of Component do you want?',
            choices: [
                {name: 'Stateless Function', value: 'function'},
                {name: 'Component Class', value: 'class'},
            ],
            default: 'function'
        },
        {
            type: 'confirm',
            name: 'container',
            message: 'Make it a Container component?',
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
            file.addIndex('../src/{{folder}}/{{dashCase name}}/index.js'),
            file.addTest('../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.test.jsx'),
            file.addCss('../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.css'),
        ];

        if (data.type === 'function') {
            actions.push(
                file.addFunction('../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.jsx')
            );
        } else {
            actions.push(
                file.addClass('../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.jsx')
            );
        }

        return actions;
    }
};
