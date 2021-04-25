/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: [
    require.resolve('./typescript'),
    'plugin:wc/best-practice',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
  ],
  env: {
    node: false,
    browser: true,
  },
  rules: {
    // We use the `.js` extension for TypeScript file paths. But those files
    // don't really exist, since `@web/dev-server` transforms them on the fly.
    'import/no-unresolved': 'off',
  },
};
