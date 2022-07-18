---
order: 12
title: 标题和加载页
group:
  title: 基础使用
nav:
  title: 文档
  path: /docs
  order: 1
---

Pro 默认提供标题 Logo 和 loading 页面的配置，默认情况下你不需要改造他们，如果你有修改的需求，这个文档可以帮你修改各处的 loading。

## 标题和 Logo

在实际使用中我们一般会通过 `config\defaultSettings.ts` 来控制标题和 Logo，这部分功能来自 [ProLayout](https://procomponents.ant.design/components/layout) 的功能。我们可以在[预览界面](https://preview.pro.ant.design/) 中拷贝设置覆盖到 `config\defaultSettings.ts` 中来修改配置。

```tsx | pure
const settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // 修改左上角的 logo
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // 设置标题的 title
  title: 'Ant Design Pro',
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixSiderbar: true,
};

export default settings;
```

> defaultSettings 不在 config 中，是不能 import js 和 json 以外的任何文件的，如果需要使用项目中的 logo，可以用动态修改的方式。

如果你需要动态的修改标题或者 Logo，就需要使用运行时的能力了。我们可以在 `src\app.tsx` 中做如下配置：

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {};
```

其中的 `initialState` 就是通过初始化插件获得数据，每次 `initialState` 改变就会触发 layout 的重新渲染，我们就可以根据 initialState 来自定义 title，看起来像是这样的，Logo 也是同理。

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    title: initialState.serverName,
  };
};
```

同时 ProLayout 会根据菜单和路径来自动匹配浏览器的标题。欢迎页就会显示 `欢迎 - Ant Design Pro` ，如果你不喜欢这样可以设置 `pageTitleRender=false` 来关掉它。

如果需要根据内容动态更新页面标题，则可以使用浏览器 document.title API。 对于更复杂的场景，当您想从 React 组件更改标题时，可以使用第三方库 React Helmet。

## favicon

favicon 是展示在浏览器标签页上的内容，严格来说它是属于浏览器 meta 的一部分，浏览器认为 favicon 不会经常改动做了非常强的缓存。所以我们并没有做动态修改 favicon 的方案。

我们可以在 `config/config.ts` 中配置 `favicon` ，支持配置多个 favicon 文件。配置 favicons 路径，可以是绝对路径，也可以是基于项目根目录的相对路径。比如：

favicons: ['/assets/favicon.ico']

HTML 中会生成

`<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />。`

## 加载页

由于场景的不同，Pro 中预设了不少的加载页。使用起来可能会有点混淆。

### js 加载后

如果我们在项目中打开了[代码分割](https://umijs.org/zh-CN/config#dynamicimport)的话，在每次路由切换的时候都会进入一个加载页面。

```tsx | pure
dynamicImport: {
 loading: '@ant-design/pro-layout/es/PageLoading',
}
```

这里的配置是一个路径的 string，也可以使用别名的配置。

### 业务中的加载

在实际的项目中，我们需要等待用户信息或者鉴权系统的请求完成后才能展示页面。所以我们让 `getInitialState`支持了异步请求，同时在请求时会停止页面的渲染。这种情况下也是需要一个加载页的。我们可以在 `src\app.tsx` 中配置：

```tsx | pure
/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
```
