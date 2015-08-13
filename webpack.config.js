var path = require('path');
var glob = require('glob');

module.exports = {
    entry: (function () {
        var entry = {};
        glob.sync('./src/**/main.js').forEach(function (name) {
            var key = name.replace('./src/', './build/');
            entry[key] = name;
        });
        return entry;
    }()),
    output: {
        path: __dirname,
        filename: "[name]"
    },
};