const path = require('path');

const conf = {
    entry: './es6/scripts.js',
    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'main.js',
        publicPath: 'js/'
    }
}

module.exports = conf;
