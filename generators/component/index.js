const plop = require('plop');
const util = require('../util');

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
                { name: 'Stateless Function', value: 'function'},
                { name: 'Component Class', value: 'class'},
            ],
            default: 'function'
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
            // index
            {
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}/index.js',
                templateFile: './component/index.hbs'
            },

            // test
            {
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.test.jsx',
                templateFile: './component/test.hbs'
            },

            // css
            {
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.css',
                templateFile: './component/css.hbs'
            }

        ];

        if (data.type === 'function') {
            actions.push({
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.jsx',
                templateFile: './component/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}/{{dashCase name}}.jsx',
                templateFile: './component/class.hbs'
            });
        }

        return actions;
    }
};
