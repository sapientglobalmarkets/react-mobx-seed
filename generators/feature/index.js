const util = require('../util');

module.exports = {
    description: 'Generate a Feature-level, React Component',
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
            type: 'confirm',
            name: 'stateless',
            message: 'Make it a Stateless Functional Component?',
            default: true
        },
    ],
    actions: function (data) {
        var actions = [
            // index
            {
                type: 'add',
                path: 'src/{{dashCase featureName}}/components/{{dashCase name}}/index.js',
                templateFile: __dirname + '/index.hbs'
            },

            // test
            {
                type: 'add',
                path: 'src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.test.jsx',
                templateFile: __dirname + '/test.hbs'
            },

            // css
            {
                type: 'add',
                path: 'src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.css',
                templateFile: __dirname + '/css.hbs'
            }

        ];

        if (data.stateless) {
            actions.push({
                type: 'add',
                path: 'src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.jsx',
                templateFile: __dirname + '/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: 'src/{{dashCase featureName}}/components/{{dashCase name}}/{{dashCase name}}.jsx',
                templateFile: __dirname + '/class.hbs'
            });
        }

        return actions;
    }
};