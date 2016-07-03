const util = require('../util');

module.exports = {
    description: 'Generate a feature',
    prompts: [
        {
            type: 'input',
            name: 'name',
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
            type: 'list',
            name: 'type',
            message: 'What type of Component do you want?',
            choices: [
                { name: 'Stateless Functional', value: 'function' },
                { name: 'Component Class', value: 'class' },
            ],
            default: 'class'
        },
    ],
    actions: function (data) {
        const actions = [
            {
                type: 'add',
                path: '../src/{{dashCase name}}/index.js',
                templateFile: './feature/index.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/{{dashCase name}}.store.js',
                templateFile: './feature/store.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.test.jsx',
                templateFile: './component/test.hbs'
            },

            {
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.css',
                templateFile: './component/css.hbs'
            }
        ];

        if (data.type === 'function') {
            actions.push({
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.jsx',
                templateFile: './component/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: '../src/{{dashCase name}}/components/{{dashCase name}}.jsx',
                templateFile: './component/class.hbs'
            });
        }

        return actions;
    }
};

