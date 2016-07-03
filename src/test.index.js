const testsContext = require.context('.', true, /\.test\.(js|jsx)$/);
testsContext.keys().forEach(testsContext);

