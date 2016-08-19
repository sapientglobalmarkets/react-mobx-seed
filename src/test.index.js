const filesContext = require.context('.', true, /\.test\.(js|jsx)$/);

console.log(filesContext.keys());

filesContext.keys().forEach(filesContext);

