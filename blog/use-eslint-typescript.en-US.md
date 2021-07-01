---
order: 1
title: Let's use eslint
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2019-06-21
---

We always use tslint in TypeScript to guarantee the quality of our code. But tslint is a subset of eslint. Tslint offers about 151 basic rules, but eslint has 249, not to mention the well-developed ecology of eslint, which provides more specification code. The tslint team also found this problem and decided to [transfer](https://eslint.org/blog/2019/01/future-typescript-eslint) into eslint.

## Cause

In the preparation of Pro v4, we added a feature that converts TypeScript into JavaScript. After the conversion is complete, we ran eslint and prettier to make the code more human-like. The js code after the conversion is complete cannot pass the eslint check:

For example here:

![image](https://user-images.githubusercontent.com/8186664/59903736-55311100-9434-11e9-99b0-8406d5b56b97.png)

Also here：

![image](https://user-images.githubusercontent.com/8186664/59903712-4185aa80-9434-11e9-84fd-4cf2ff3ec0ca.png)

## Result

If we are using eslint, these issues should be directly exposed. So began to conduct research and use. First try one in Pro. The effect is very good, you can see this [PR](https://github.com/ant-design/ant-design-pro/pull/4336). I have joined this lint in [pro-blocks](https://github.com/ant-design/pro-blocks/pull/28).

We publish these rules as a package  🌟🌟**umi-fabric** 🌟🌟, This library provides some presets for eslint , stylelint and prettier , which is great for everyone. All open rules are meaningful for improving code quality.

## Use

The use of **umi-fabric** is easy.

```bash
npm install eslint @umijs/fabric --save-dev
```

And do the following configuration in the root directory `.eslintrc.js`.

```tsx | pure
const fabric = require('@umijs/fabric');

module.exports = fabric.eslint;
```

The eslint plugin in vscode does not default to the lint .ts file, we need to set it in `settings.json`

```tsx | pure
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
],
```

Then you can use it happily. Using `eslint fix` to get old ts code is amazing.
