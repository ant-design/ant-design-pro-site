---
order: 15
title: 内置布局
type: 基础使用
---

## 简介

在最佳实践中我们内置了 Layout，你可以通过简单的配置就可以让项目拥有侧边菜单和头部导航，最佳实践插件会通过路由配置自动生成相关菜单。不再需要在项目中直接引入 `@ant-design/pro-layout`  相关代码。

## 如何使用

### 初始配置

要打开 layout 你需要在配置文件 `config/config.ts`  中配置 `layout` 。

```typescript
export default {
  // 其它配置
  routes: [
    /* 路由配置 */
  ],
  layout: {
    name: '你的项目名称',
  },
};
```

### 更多配置

1. 除了在 `config/config.ts`  中的配置以外，还支持在 `src/app.ts`  中配置更多的运行时配置，你可以自定义登出的方法，可以自定义头部导航扩展区域等，具体参考[ Layout 插件详细文档](https://umijs.org/plugins/plugin-layout)。

2. layout 的 `PRO` 主题完全内置了 pro-layout 的所有功能，更多用例请参考：[Pro-Layout](https://prolayout.ant.design/example)

3. 如果 layout 插件实在难以满足您的需求，可以通过配置 `layout: false`, 来关闭它。（方便的话也请告诉一下你们的需求，我们可以考虑是否内置，也欢迎给我们提 pr）

### 路由和菜单的关系

路由的基础配置还是和 umi 本身的路由配置一致，只是在那之上扩展支持了一些额外的配置用于支持不同的菜单的需求。比如在菜单中隐藏部分路由入口，或者和权限打通等。路由和权限支持部分，可以到[权限处理](authority-management)查看。
