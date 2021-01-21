module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'vue/no-v-html': 0,
    'no-console':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger':
      process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    $nuxt: true,
  },
}
