---
order: 1
title: Pro-layout
type: Blog
time: 2019-05-08
---

There has always been a problem in Pro. We handed the entire project to the user. Although the user's DIY ability has been improved, the user can modify any function and fully control the project. But it also allows users to understand a lot of details. And it is not possible to quickly upgrade the version.

In particular, Pro's core Layout, as the most used piece of Pro, we have seen almost every version of the business support. 0.x, 1.x, 2.x, almost every version has users, but can not follow the official upgrade, only after the error has occurred, the official community to help.

We offer a solution in V4. Make a Layout into a component that allows any scaffolding to use Layout's capabilities, as well as smooth upgrades to keep up with the community. The code repository is here [pro-layout](https://github.com/ant-design/ant-design-pro-layout).

Layout provides a rich api configuration that decouples umi's dependencies, allowing even fast access to older projects.

## Use

It is also very simple to use

```shell
npm i @ant-design/pro-layout --save
// or
yarn add @ant-design/pro-layout
```

In jsx:

```jsx
import BasicLayout from '@ant-design/pro-layout';

render(<BasicLayout />, document.getElementById('root'));
```

Start the project and you can get

![image](https://user-images.githubusercontent.com/8186664/55930941-276e6580-5c56-11e9-800d-bc284bda4daf.png)
