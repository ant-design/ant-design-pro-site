---
order: 6
title: Migration antd@4 Guide
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2020-01-16
---

antd@4 rc has been released for a while (about two weeks), and [Official Website](https://next.ant.design/index) has also been released simultaneously. For a person who loves early adopters, of course, he must install and upgrade the first time. After consulting the bean paste teacher and getting a promise that the api will not be modified, I have completed the migration in my project. Enjoy the advantages of antd@4 for the first time.

### 🚀 Upgrade points

First of all, the biggest improvement for me is performance. Select, table and tree have fully supported virtual scrolling. As an early adopter of rc-tree to solve performance problems, it is naturally better to provide it in antd@4. After all, writing styles and dynamics yourself is very complicated.

The rewritten table and from solve many of the remaining incurable diseases. For details, please see the antd@4 series of the bean paste teacher [article](https://www.zhihu.com/people/smith-jiang/activities), which contains details. After writing the mental journey, we don't need to use the two methods `getFieldDecorator` and `Form.create` in the form. Pro full block has been taken as an example. These two methods have appeared 87 and 22 times respectively. I found 142 `getFieldDecorator` in one of my own maintenance projects, not to mention that in order to encapsulate components,`getFieldDecorator` was passed as props The complexity caused by the pass has increased. We can finally get rid of it in v4.

![diff](https://gw.alipayobjects.com/zos/antfincdn/xJ0Xhrkwvu/8EA666B0-76C7-47AC-B999-9EE15D043215.png#align=left&display=inline&height=399&name=&originHeight=1800&originWidth=2880&status=done&style=none)

See this is the removed diff

Table can now also get the width automatically, and has a better fixed to the side, [Pro-Table](https://procomponents.ant.design/components/table) as an example, here is a table of 3.0.

![image.png](https://gw.alipayobjects.com/zos/antfincdn/1nVM1VDeiz/a4ede9b8-1822-495d-9141-9c15107172a5.png)

In 4.0, the problem of high misalignment does not occur.

![image.png](https://gw.alipayobjects.com/zos/antfincdn/fyP4ANU8Eb/ea9962b9-a317-48b6-a37a-47b6eef9664a.png)

### Migration method

antd@4 has become more multi-billion and brought a huge amount of improvement, so how can we use such a great 4.0? In fact, it is easy, Pro has all migrated [One] (https: // github. com / ant-design / pro-blocks / issues / 145). Officially provided us with `codemod-v4`, which is also easy to use.

```shell
# Run directly through npx
npx -p @ ant-design / codemod-v4 antd4-codemod src

# Or global installation
# Use npm
npm i -g @ ant-design / codemod-v4
# Or use yarn
yarn global add @ ant-design / codemod-v4

# Run
antd4-codemod src
```

It is worth noting that if `<Icon type = {type} />` is used in the project, it will be converted to `LegacyIcon`. You need to check here. If you are not a component library, you must not need`LegacyIcon`. After migration, you must Delete it, otherwise the icon file will be typed in full, but it has a size of about 540K.

In order to be more semantic, the icon will be changed from the i tag to the span tag. After the change, you need to remember to check if there are similar usages like `i {}`, `i.anticon`, and if you can, you can change it to`span {}.`,`span.antion` to ensure that the migration is complete.

In addition, because form is not compatible, codemod will not automatically help you to migrate to the new writing, but migrate to the compatibility package `@ ant-design / compatible` is convenient to use with the new version without full migration. The `ant-from` class name in the compatibility package will be updated to`ant-legacy-form`. If you modify the default style of the form remember to check it and modify it.

If you encounter the problem that the form cannot be extended, you can add the following code:

```css
:global {
  .ant-legacy-form-item .ant-legacy-form-item-control-wrapper {
    width: 100%;
  }
}
```

### Used in Pro

Pro also migrated antd@4 in the first time, we only need to select ant-design-pro in create umi to get the latest 4.0 branch code.

```bash
❯❯❯ create-umi
? Select the boilerplate type ant-design-pro
? 🤓 Which language do you want to use? TypeScript
? 🦄 Want to use better and faster antd? Yes
>
> There may be some compatibility issues when using antd 4.0. Read the following documents for specific changes
> There may be some compatibility issues when using antd 4.0. Read the following documents for specific changes
> https://next.ant.design/docs/react/migration-v4-cn
>
```

If you want to migrate to the new version, you can implement it as described in the above document, but you can set the icon configuration menu icon in Pro, which will not be supported in 4.0, so we provide the corresponding [plugin] (https: / /github.com/umijs/umi-plugin-antd-icon-config) to retain this feature.

Use as follows:

```bash
yarn add umi-plugin-antd-icon-config -D
```

And set in config.ts

```tsx | pure
export default {
  plugins: [['umi-plugin-antd-icon-config', {}]],
};
```

Painless migration antd@4 is as easy as that. All official blocks also support antd@4. Please use it with peace of mind.

> Due to the deletion of the 4.0 icon, if the icon disappears, please find a suitable replacement in the official website of antd.

### ✨ A teaser

Pro 4 has been released for some time, and we hope to explore a set of best practices in various internal and external practices, [sorrycc](https://github.com/sorrycc/blog/issues/90) article Made deep thoughts. Next we will publish our solution. Stay tuned!
