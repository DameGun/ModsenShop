import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactConfig,
    languageOptions: {
      ...reactConfig.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
    ignores: ['dist', 'node_modules'],
  },
];
