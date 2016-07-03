const filesContext = require.context('.', true, /\.test\.(js|jsx)$/);
filesContext.keys().forEach(filesContext);

