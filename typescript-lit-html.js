/**
 * Copyright (c) IBM and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE.txt
 * file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: [
    'ibmresearch/typescript',
    'plugin:wc/best-practice',
    'plugin:lit/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: false,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'wc', 'lit'],
};
