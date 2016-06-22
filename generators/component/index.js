module.exports = {
    description: 'Generate a React Component',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What is your Component\'s name?',
        validate: function (value) {
            if ((/.+/).test(value)) { return true; }
            return 'name is required';
        }
    }, {
        type: 'confirm',
        name: 'stateless',
        message: 'Make it a Stateless Functional Component?'
    }],
    actions: function (data) {
        var actions = [];

        if (data.stateless) {
            actions.push({
                type: 'add',
                path: 'src/components/{{dashCase name}}/index.js',
                templateFile: __dirname + '/function.hbs'
            });
        } else {
            actions.push({
                type: 'add',
                path: 'src/components/{{dashCase name}}/index.js',
                templateFile: __dirname + '/class.hbs'
            });
        }

        return actions;
    }
};