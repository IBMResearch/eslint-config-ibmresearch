/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: [
    require.resolve('./index'),
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    require.resolve('./imports'),
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never' }],
  },
};
