module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:@typescript-eslint/recommended',
    ],
    ecmaFeatures: {
        jsx: true,
    },
    plugins: ['react', 'prettier'],
    parser: '@typescript-eslint/parser',
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': 'error',
        'no-debugger': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
}
