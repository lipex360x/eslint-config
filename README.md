#### ESLint, Typecheck and NPM Check Updates
* with yarn
> yarn add -D eslint@8.54.0 eslint-plugin-prettier@5.0.1 prettier@3.1.0 prettier-plugin-tailwindcss@0.5.7 @lipex360-ui/eslint-config --save-exact && code `package.json`

* with bun
> bun add -D eslint eslint-plugin-prettier @lipex360-ui/eslint-config && code `package.json`

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
  ],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "tailwindConfig": "./tailwind.config.ts",
        "plugins": [
          "prettier-plugin-tailwindcss"
        ],
        "pluginSearchDirs": false,
        "printWidth": 80,
        "tabWidth": 2,
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "always",
        "semi": false
      }
    ]
  }
}

```
