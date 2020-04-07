# eslint-config-ibmresearch

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for the IBM Research JavaScript style guide.

## Installation

#### JavaScript

```
npm install --save-dev eslint eslint-config-ibmresearch
```

#### TypeScript

```
npm install --save-dev eslint eslint-config-ibmresearch @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### TypeScript (with lit-html)

```
npm install --save-dev eslint eslint-config-ibmresearch @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-lit eslint-plugin-wc
```

## Usage

Once the `eslint-config-ibmresearch` package is installed, you can use it by specifying `ibmresearch`, `ibmresearch/typescript` or `ibmresearch/typescript-lit-html` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "ibmresearch",
  "rules": {
    // Additional, per-project rules...
  }
}
```
