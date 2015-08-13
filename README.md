# webpack多文件打包

首先得保证有node和webpack。

1. npm i
2. webpack -w
3. 查看index.html
4. 试着修改src下面的js文件。


### webpack.config.js配置
```js
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
```


###资源
1. node <https://nodejs.org/>
2. webpack <http://webpack.github.io/>
