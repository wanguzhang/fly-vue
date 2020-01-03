module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'eslint:recommended',
        '@vue/airbnb',
    ],
    globals: {

    },
    rules: {
        // 强制 error
        indent: ['error', 4, { SwitchCase: 1 }],
        'vue/html-indent': ['error', 4],
        'vue/html-quotes': ['error', 'double'],
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-alert': 'off',
        'no-param-reassign': 'off',
        'no-empty': ['error', { allowEmptyCatch: true }],
        // 推荐 warn
        'max-len': ['warn', { code: 200 }],
        'no-underscore-dangle': 'warn',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
