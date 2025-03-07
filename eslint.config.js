import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        // 添加 Jest 全局变量
        'describe': 'readonly',
        'test': 'readonly',
        'expect': 'readonly',
        'jest': 'readonly',
        'beforeEach': 'readonly',
        'afterEach': 'readonly',
        'it': 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // TypeScript 规则
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_|^this$' }],
      
      // 一般规则
      'indent': ['error', 2],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'no-console': 'warn',
      'comma-dangle': ['error', 'never'],
      
      // 禁用 no-undef 规则，因为 TypeScript 已经处理了这个问题
      'no-undef': 'off',
      'no-unused-vars': 'off', // 使用 @typescript-eslint/no-unused-vars 代替
    },
  },
  {
    // 测试文件的特定规则
    files: ['**/tests/**/*.ts', '**/tests/**/*.tsx', '**/*.test.ts', '**/*.test.tsx'],
    rules: {
      // 测试文件中允许使用 console
      'no-console': 'off',
    },
  },
]; 