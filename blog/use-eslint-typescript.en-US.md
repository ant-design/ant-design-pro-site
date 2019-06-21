---
order: 1
title: Let's use eslint
type: Blog
time: 2019-06-21
---

We always use tslint in TypeScript to guarantee the quality of our code. But tslint is a subset of eslint. Tslint offers about 151 basic rules, but eslint has 249, not to mention the well-developed ecology of eslint, which provides more specification code. The tslint team also found this problem and decided to [transfer](https://eslint.org/blog/2019/01/future-typescript-eslint) into eslint.

## 起因

In the preparation of Pro v4, we added a feature that converts typescript into javascript. After the conversion is complete, we ran eslint and prettier to make the code more human-like. The js code after the conversion is complete cannot pass the eslint check:

For example here:

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/93819/1561039456413-1a389431-a7ff-4b00-b872-8f34249bab35.png#align=left&display=inline&height=159&name=image.png&originHeight=318&originWidth=2848&size=96918&status=done&width=1424)

Also here：

![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/93819/1561039496763-22b0d0d8-172b-4b74-b50d-908a47024d22.png#align=left&display=inline&height=474&name=image.png&originHeight=948&originWidth=2238&size=175958&status=done&width=1119)

## Result

If we are using eslint, these issues should be directly exposed. So began to conduct research and use. First try one in Pro. The effect is very good, you can see this [PR](https://github.com/ant-design/ant-design-pro/pull/4336). I have joined this lint in [pro-blocks](https://github.com/ant-design/pro-blocks/pull/28).

We publish these rules as a package  🌟🌟**umi-fabric** 🌟🌟, This library provides some presets for eslint , stylelint and prettier , which is great for everyone. All open rules are meaningful for improving code quality.

## Use

The use of **umi-fabric ** is very simple.

```bash
npm install eslint @umijs/fabric -save-dev
```

And do the following configuration in the root directory `.eslintrc.js`.

```tsx
const fabric = require('@umijs/fabric');

module.exports = fabric.eslint;
```

The eslint plugin in vscode does not default to the lint .ts file, we need to set it in `settings.json`

```jsx
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
```

Then you can use it happily. Using `eslint fix` to get old ts code is amazing.
