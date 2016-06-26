const plop = require('plop');
const util = require('../util');

module.exports = {
    description: 'Generate a React Component',
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
            type: 'input',
            name: 'featureName',
            message: 'Which feature does it belong to?',
            validate: function (value) {
                if ((/.+/).test(value)) {
                    return true;
                }

                return 'featureName is required';
            },
            default: 'core'
        },
    ],
    actions: function (data) {
        if (util.componentExists(data.name, data.featureName)) {
            throw `${data.featureName}/${data.name} already exists`;
        }

        var actions = [
            // index
            {
                type: 'add',
                path: '../src/{{dashCase featureName}}/components/{{dashCase name}}/index.js',
                templateFile: './component/index.hbs'
            },

            // test
            {
                type: 'add',
                path: '../src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.test.jsx',
                templateFile: './component/test.hbs'
            },

            // css
            {
                type: 'add',
                path: '../src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.css',
                templateFile: './component/css.hbs'
            }

        ];

        if (data.stateless) {
            actions.push({
                type: 'add',
                path: '../src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.jsx',
                templateFile: './component/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: '../src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.jsx',
                templateFile: './component/class.hbs'
            });
        }

        return actions;
    }
};

