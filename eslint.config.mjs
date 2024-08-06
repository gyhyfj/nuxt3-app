// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  [
    {
      ignores: ['scripts'],
    },
    {
      rules: {
        // 'no-unused-vars': 'warn',
      },
    },
  ]
)
