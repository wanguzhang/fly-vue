const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: false, // boolean (default: true)
            // files: '', // string | [string] (default: ['src/**/*.{vue,htm,html,css,sss,less,scss}'])
        },
    },
    chainWebpack: (config) => {
        // 设置 public 目录别名
        config.resolve.alias.set('#', resolve('public'));
        // 设置 src 目录别名
        config.resolve.alias.set('@', resolve('src'));
    },
};
