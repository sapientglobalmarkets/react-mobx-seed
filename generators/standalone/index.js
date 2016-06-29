const util = require('../util');

module.exports = {
    description: 'Generate a standalone React Component',
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
            type: 'confirm',
            name: 'stateless',
            message: 'Make it a Stateless Functional Component?',
            default: true
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
        var actions = [
            // css
            {
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}.css',
                templateFile: './component/css.hbs'
            },
        ];

        if (data.stateless) {
            actions.push({
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}.jsx',
                templateFile: './component/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: '../src/{{folder}}/{{dashCase name}}.jsx',
                templateFile: './component/class.hbs'
            });
        }

        return actions;
    }
};

