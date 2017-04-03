# eslint-config-ibmresearch

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs)
for the IBM Research JavaScript style guide.

## Installation

```
npm install --save-dev eslint eslint-plugin-html eslint-config-ibmresearch
```

## Usage

Once the `eslint-config-ibmresearch` package is installed, you can use it by
specifying `ibmresearch` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "ibmresearch",
  "rules": {
    // Additional, per-project rules...
  }
}
```
