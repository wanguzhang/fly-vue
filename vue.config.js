const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    pluginOptions: {
        lintStyleOnBuild: true,
        stylelint: {
            fix: true,
        },
    },
    chainWebpack: (config) => {
        // 设置 public 目录别名
        config.resolve.alias.set('#', resolve('public'));

        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
            .end();
    },
};
