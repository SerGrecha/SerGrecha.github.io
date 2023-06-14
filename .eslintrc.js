module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],

    rules: {
        'no-console': 'off',
        'camelcase': 'error',
        'indent': ['error', 4],
        'no-undef': 'error',
        'quotes': ['error', 'double', { avoidEscape: true }],
        'max-len': ['error', { code: 120, ignoreComments: true }],
        'no-trailing-spaces': 'error',
        'curly': 'error',
        'strict': 'off',
    },
    env: {
        browser: true,
        node: true,
        jquery: true,
        es2018: true,
        es6: true,
    },
    globals: {
        $: false,
    },
};
