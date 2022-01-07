---
order: 13
title: Title and loading page
group:
  title: Basic Usage
nav:
  title: Documents
  path: /docs
  order: 1
---

Pro provides the configuration of the title Logo and loading page by default. By default, you don't need to modify them. If you need to modify it, this document can help you modify the loading everywhere.

## Title and Logo

In actual use, we generally use `config\defaultSettings.ts` to control the title and logo. This part of the function comes from the function of [ProLayout](https://procomponents.ant.design/components/layout). We can copy the settings in [Preview Interface](https://preview.pro.ant.design/) and overwrite them to `config\defaultSettings.ts` to modify the configuration.

```tsx | pure
const settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // Modify the logo in the upper left corner
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // Set the title of the title
  title: 'Ant Design Pro',
  navTheme: 'light',
  // Dawn Blue
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixSiderbar: true,
};

export default settings;
```

> The defaultSettings is not in the config, and you cannot import any files other than js and json. If you need to use the logo in the project, you can modify it dynamically.

If you need to dynamically modify the title or logo, you need to use runtime capabilities. We can do the following configuration in `src\app.tsx`:

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {};
```

The `initialState` is to get data through the initialization plug-in. Every time the `initialState` changes, it will trigger the re-rendering of the layout. We can customize the title according to the initialState. It looks like this, and the logo is the same.

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    title: initialState.serverName,
  };
};
```

At the same time, ProLayout supports to automatically match the title of the browser according to the menu and path. The welcome page will display `Welcome-Ant Design Pro`, if you don't like this, you can set `pageTitleRender=false` to turn it off.

If you need to dynamically update the page title based on the content, you can use the browser document.title API. For more complex scenarios, when you want to change the title from React components, you can use the third-party library `React Helmet`.

## favicon

A favicon is the content displayed on the browser tab. Strictly speaking, it is part of the browser meta. The browser believes that favicon will not be changed frequently and has a very strong cache. So we did not make a plan to dynamically modify the favicon.

The default favicon configuration of Pro exists in `src\pages\document.ejs`, we can write html related code here, we configure the `favicon.ico` file in the public folder by default, you can directly overwrite it to modify . Of course, you can also modify the href to the cdn address you want.

```tsx | pure
<link rel="icon" href="<%= context.config.publicPath +'favicon.ico'%>" type="image/x-icon" />
```

## Load page

Due to different scenes, there are many loading pages preset in Pro. It can be a bit confusing to use.

### js before loading

The first is the landing page where js has not been loaded successfully, but html has been loaded successfully. The configuration of this page exists in `src\pages\document.ejs`. It uses `home_bg.png`, `pro_icon.svg` and `KDpgvguMpGfqaHPjicRK.svg` three pictures with brand information, you can modify them as needed.

![Home page loading map](https://gw.alipayobjects.com/zos/antfincdn/xp9h2lyw8d/500D5525-C5A4-4ce8-9CB3-B76D14B50B98.png)

### js after loading

If we open [Code Split](https://umijs.org/zh-CN/config#dynamicimport) in the project, we will enter a loading page every time the route is switched.

```tsx | pure
dynamicImport: {
 loading:'@ant-design/pro-layout/es/PageLoading',
}
```

The configuration here is a path string, which supports the configuration of aliases.

### Loading in business

In the actual project, we need to wait for the user information or the authentication system to complete the request before displaying the page. So we let `getInitialState` support asynchronous requests, and at the same time, the page rendering will be stopped when the request is made. In this case, a loading page is also required. We can configure in `src\app.tsx`:

```tsx | pure
/** When obtaining user information is slow, a loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
```
