import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  {
    ignores: ['scripts', 'components/shadcn', 'shadcn'],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
])
