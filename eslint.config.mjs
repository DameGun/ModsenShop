import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactConfig from 'eslint-plugin-react/configs/recommended.js';

export default tseslint.config(
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactConfig,
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  }
);
