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
