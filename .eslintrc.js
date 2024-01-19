module.exports = {
    ignorePatterns: ['node_modules', 'build', '*.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'no-console': ['error', { allow: ['info'] }],
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-useless-fragment': 2,
        'no-debugger': 0,
        'import/first': 1,
        'import/no-duplicates': 1,
        'import/newline-after-import': 1,
        'max-len': [
            'error',
            {
                'comments': 80,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreTrailingComments': true,
                'ignoreRegExpLiterals': true
            }
        ]
    }
}