---
order: 1
title: Ant Design Pro 的 Layout 组件
type: Blog
time: 2019-05-08
---

在 Pro 中一直存在一个问题，我们将整个项目交给了用户，虽然提升了用户的 DIY 的能力，可以让用户对任何功能修改，完全掌控项目。但是也会让用户需要了解很多细节。并且无法快速的进行版本的升级。

尤其是 Pro 的核心 Layout，作为 Pro 的中使用最多的一块，在业务支持中我们见到了几乎的各个时期的版本。 0.x，1.x，2.x，几乎每个版本都有用户，但是却无法跟随官方升级，只能发生了错误之后再官方社区提供帮助。

在 V4 中我们提供了一个解决方案。将 Layout 进行组件化，既可以让任何脚手架使用 Layout 的能力，同时也可以平滑升级，跟进社区的发展。代码仓库在这里[pro-layout](https://github.com/ant-design/ant-design-pro-layout)。

Layout 提供了丰富的 api 配置,解耦了对 umi 的依赖,即使是旧的项目也可以快速接入。

## 使用

使用起来也是非常简单

```shell
npm i @ant-design/pro-layout --save
// or
yarn add @ant-design/pro-layout
```

在 jsx 中:

```jsx
import BasicLayout from '@ant-design/pro-layout';

render(<BasicLayout />, document.getElementById('root'));
```

启动项目，你就可以得到

![image](https://user-images.githubusercontent.com/8186664/55930941-276e6580-5c56-11e9-800d-bc284bda4daf.png)
