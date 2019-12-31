const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true, // boolean (default: true)
        },
    },
    chainWebpack: (config) => {
        // 设置 public 目录别名
        config.resolve.alias.set('#', resolve('public'));
    },
};
