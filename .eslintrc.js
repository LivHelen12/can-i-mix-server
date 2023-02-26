module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Especifica o analisador ESLint
  parserOptions: {
    ecmaVersion: 2020, // Permite a análise de recursos modernos do ECMAScript
    sourceType: 'module', // Permite o uso de imports
  },
  env: {
    es6: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
};
