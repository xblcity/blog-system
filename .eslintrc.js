module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended', // 使用react推荐配置
    'plugin:@typescript-eslint/recommended', // 使用eslint-ts推荐配置
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended' // 使用eslint-prettier推荐配置
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 在这部分禁用或者修改一些 react/recommend和 prettier/recommended的默认配置
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prefer-const': 2,
    'no-var': 2,
    'no-multiple-empty-lines': 2,
    'react/prop-types': 0,
    'react/display-name': 0,
    'lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'function-paren-newline': 'multiline' // 函数参数换行
  },
  settings: {
    // 让eslint自动检测react版本
    react: {
      version: 'detect'
    }
  },
  // 环境配置
  env: {
    browser: true
  }
}
