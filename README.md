#### ESLint, Typecheck and NPM Check Updates
> yarn add -D eslint @lipex360-ui/eslint-config && code `package.json`

file: `package.json`
```json
"scripts": {
  "typecheck": "tsc --noEmit",
  "lint": "npx eslint . --ext .ts,.tsx --fix",
  "ncu": "npx npm-check-updates -i --dep=prod,dev --format group"
},

"eslintConfig": {
  "extends": [
    "@lipex360-ui/eslint-config"
  ]
}

```
<br />

#### Commit Lint - [Docs](https://www.conventionalcommits.org/en/v1.0.0/#summary)
> yarn add -D  @commitlint/{cli,config-conventional}

> echo "module.exports = { extends: ['@commitlint/config-conventional'] }" > commitlint.config.js

<br />

#### Husky
> yarn add -D husky

> yarn husky install

> npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'

<br />

#### Lint staged

> yarn add -D lint-staged

> npx husky add .husky/pre-commit "npx lint-staged" && code .lintstagedrc.js

file: `.lintstagedrc.js`
```js
module.exports = {
  '*.{js,jsx,ts,tsx,json,css,html}': ['prettier --write'],
  '*.{js,ts,tsx}': [
    'eslint --fix',
    // 'jest --bail --findRelatedTests --passWithNoTests',
  ],
  '**/*.ts': () => 'yarn typecheck',
};

```
