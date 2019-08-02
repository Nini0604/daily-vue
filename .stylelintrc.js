module.exports = {
  'plugins': [
    'stylelint-order',
    'stylelint-scss'
  ],
  'extends': 'stylelint-config-recommended-scss',
  'rules': {
    'function-url-quotes': 'never',
    'no-empty-source': null,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'block-opening-brace-space-before': 'always',
    'function-comma-space-after': 'always',
    'scss/at-function-parentheses-space-before': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'indentation': 2,
    'order/properties-order': [
      'display',
      'overflow',
      'float',
      'position',
      'z-index',
      'width',
      'height',
      'margin',
      'padding',
      'border',
      'font',
      'background'
    ]
  }
}
