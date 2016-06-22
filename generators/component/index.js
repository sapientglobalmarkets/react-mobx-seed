module.exports = {
    description: 'Generate a React Component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is your Component\'s name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
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
                if ((/.+/).test(value)) { return true; }
                return 'featureName is required';
            },
            default: 'core'
        },
    ],
    actions: function (data) {
        var actions = [];

        actions.push({
            type: 'add',
            path: 'src/{{dashCase featureName}}/components/{{dashCase name}}/index.js',
            templateFile: __dirname + '/index.hbs'
        });

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