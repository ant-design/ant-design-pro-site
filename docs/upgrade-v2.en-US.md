---
order: 24
title: Upgrade to V2
type: Other
---

In addition to many features in the Ant Design Pro 2.0 release, we also upgraded the front-end build tool from roadhog to [UmiJS] (https://umijs.org/) (referred to as umi). The reason for upgrading, not replacement, is that umi is more than just a front-end build tool. It also includes routing and a plugin system for building a complete React application.

So if you want to better add the feature of Ant Design Pro 2.0 to your original project and port the 2.0 code to your project, you'd better migrate your project from roadhog to umi. This document will guide you through the migration process. Before that, you may need to read umi's [documentation] (https://umijs.org/guide/) so that you have a preliminary understanding of umi. This is will helpful for your Migration work. The following are the overview of migration steps, and there will be more detail later.

Note: This migration guide is based on the latest v1 version, and you can find the changes in the [commit] (https://github.com/ant-design/ant-design-pro/commit/dc2118db78f9b2b7072051fea558e8d1386ce34c). This commit is for reference only and cannot be directly applied to your project. if your version is too old, there may be some difference in detail. Please migrate with the specific situation.

## Migration Steps Overview

- Change the dependency of `package.json` roadhog to umi. 
- Modify the configuration in `.webpackrc.js` to `config/config.js`.
- Modify the `src/routes` directory name to pages, where pages are the umi agreed directories.
- Remove `src/models/index.js` and the dva model in the models folder in umi will be mounted automatically.
- Rename `index.ejs` to `pages/document.ejs`, which is the file agreed by umi.
- Modify `index.less` to `global.less` and modify `index.js` to `global.js`, which are also umi-constrained files.
- Add route configuration routes in `config/config.js`.
- Modify the component nesting syntax in `src/layouts/BasicLayout.js`.
- Modify the 404 page.
- Modify the logic of the authorization route AuthorizedRoute.
- Modify the mock.
- Add umi related files to `.gitignore`.
- Modify possible problems by executing `tnpm start` and `tnpm run lint`.

## Migration step details

### Modify roadhog dependency to umi

Open `package.json` in the root directory of the project and change the dependency to umi:

```diff
"dependencies": {
- "dva": "^2.2.3",
- "dva-loading": "^2.0.3",
- "antd": "^3.8.0",
- "react": "^16.4.1",
- "react-dom": "^16.4.1",
- "react-loadable": "^5.5.0",
  ...
},
"devDependencies": {
+ "umi": "^2.0.0",
+ "umi-plugin-react": "^1.0.0",
- "roadhog": "^2.4.2",
- "roadhog-api-doc": "^1.1.2",
  ...
}
```

React is built into umi, and a library commonly used by React technology stacks such as antd and dva is built into the umi-plugin-react plugin set. See [Minor-plugin-react documentation] (https://umijs.org/plugin/umi-plugin-react.html).

In addition, the scripts in `package.json` also need to be modified accordingly:

```diff
- "start": "cross-env ESLINT=none roadhog dev",
- "start:no-proxy": "cross-env NO_PROXY=true ESLINT=none roadhog dev",
- "build": "cross-env ESLINT=none roadhog build",
+ "start": "umi dev",
+ "start:no-mock": "cross-env MOCK=none umi dev",
+ "build": "umi build",
```

Remember to don't forget to update the dependency to the latest with `npm update` after the modification is complete.

### Add configuration file config/config.js

Umi has agreed on `.umirc.js` and `config/config.js` as umi's configuration files (choose one). In Ant Design Pro, because of the more configuration, we choose to use `config/config.js`.

You need to create `config/config.js` in your project. This configuration file needs to export an object by default, which contains all the configuration of umi. You can initialize it to the following:

```js
export default {
  plugins: [[
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
    }
  ]]
};
```

This configuration mounts the umi-plugin-react plugin set and opens the antd and dva plugins, allowing you to use antd and dva directly in your project.

After adding `config/config.js` you can also migrate the configuration from `.webpackrc.js` under your project to `config/config.js`. `.webpackrc.js` is the af-webpack configuration file, umi and roadhog are dependent on it, so you can migrate directly. After the migration, you can delete the original `.webpackrc.js` and `.babelrc.js` files.

However, it should be noted that the following configuration in `.webpackrc.js` is not necessary to copy into `config/config.js`:

- entry: umi will have a default routing mechanism that needs to be removed.
- extraBabelPlugins: umi-plugin-react has built-in support for on-demand compilation of antd, no need to manually configure.
- The dva-hmr plugin under env: env is no longer needed and can be opened directly in the umi-plugin-react configuration.
- alias: umi will add the alias of `@/` to the src directory by default.
- html: umi uses `src/pages/document.ejs` as the html template by default.

In addition, we recommend writing the `theme` configuration directly to `config/config.js`, and then you can delete `src/theme.js`.

### Modify routes to pages

A lot of conventions and configurations are used in umi to efficiently implement some functions, where umi agrees that the `src/pages` directory is the directory where the page components are stored. In Ant Design Pro 1.0, our pages are stored under `src/routes`, so we only need to rename the routes to pages.

### Delete models/index.js

In umi, after the dva plugin is mounted, the files under models will be introduced as dva model by default, so you no longer need to manually mount the model in `models/index.js`, you can delete the file directly.

### Modify index.ejs

Move `index.ejs` to `pages/document.ejs`, which is the file agreed by umi. Reference [œumi HTML template
Documentation] (https://umijs.org/guide/html-template.html).

### Modify index.js and index.less

Rename `index.js` to `global.js` and rename `index.less` to `global.less` and they will be mounted automatically by umi. You can refer to umi's [Directory Convention] (https://umijs.org/guide/app-structure.html). In addition, because the dva plugin will automatically mount the model and add the dva-loading plugin by default, the dva related content in index.js can be removed. Just keep the initialization logic like this:

```js
import './polyfill';
import 'moment/locale/zh-cn';
import './rollbar';
```

In addition, the `:global` flag in `global.less` can also be removed, because the style in `global.less` is global by default. It should be noted that cssModule is used by default except for it.

### Add routing configuration

This step is the most important, umi has built-in routing implementation, providing both agreed and configured routing. In Ant Design Pro we use the way of profile routing. You need to add the configuration item `routes` in `config/config.js`, here we provide a sample based on the `/dashboard` page, you need to do the migration according to your project. We recommend adding a `config/router.config.js` file and introducing it in `config/config.js`:

```js
// config/router.config.js
module.exports = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
          { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
          { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
        ],
      },
    ],
  },
];
```

Where component is a string, relative to the path of `src/pages`, for more routing configuration you can refer to the v2 version of the routing configuration, and umi's documentation. In addition, the original 1.0 version of the routing code `src/common/router.js` and `src/router.js` can also be deleted.

### Modify layout components

Because component routing is not used with react-router@4, you will need to modify your layout components. Change the `<Switch/>` component part to `{this.props.children}`.

### Modify 404 page

By default, `src/pages/404.js` is used as the 404 page in umi, you need to migrate the original `src/routes/Exception/404.js`.

### Modify permission routing

In 2.0, you can use the [Permissions Routing] provided by umi directly (https://umijs.org/guide/router.html#%E6%9D%83%E9%99%90%E8%B7%AF%E7 %94%B1) program. Of course, you can also keep the scheme in 1.0 to continue to use. Since it is not necessary, it will not be specified in this article.

### Modifying mock data

In umi, the `mock/*.js` file is used as the mock file by default. So you can delete the `.roadhogrc.mock.js` file after migrating the URL information of the mock data to the mock file, but note that the mock data written directly in `.roadhogrc.mock.js` needs to be migrated, for example You can migrate this part of the data by creating a new `mock/common.js`.

For more instructions, please refer to umi's documentation [Mock Data] (https://umijs.org/guide/mock-data.html).

### Modify .gitignore

After using umi you need to add the temporary files of umi in development and build to `.gitignore`.

```
.umi
.umi-production
```

### Modify code alias and other details

After the above operation is completed, you can run `npm start` to start your project. You will see an error, but don't panic, follow the error message and modify it step by step. What you may need to modify is:

- Modify the alias `components/` to `@/components`. Of course, you can also keep the original alias directly in `config/config.js`.
- Modify the part related to dva in `src/utils/request.js`. You can use `umi/router` to do the jump directly.
- `/exception/400` of `src/utils/request.js` can be changed to `/400`.
- Remove `const baseRedirect = this.getBaseRedirect();` related logic in `BasicLayout`, the logic of the jump can be implemented through umi's routes configuration.
- Modify the related logic of `getPageTitle` and `getBreadcrumbNameMap` in `BasicLayout`, refer to the following code implementation. Complete code reference v1 upgrade [commit] (https://github.com/ant-design/ant-design-pro/commit/dc2118db78f9b2b7072051fea558e8d1386ce34c).

Note: `memoizeOne` is the method provided by the `memoize-one` npm package. You need to install memoize-one first. `deepEqual` is provided by the `lodash.isequal` package, and related dependencies need to be installed.

```js
/**
 * Get breadcrumb mapping
 * @param {Object} menuData menu configuration
 */
const getBreadcrumbNameMap = memoizeOne(meun => {
  const routerMap = {};
  const mergeMeunAndRouter = meunData => {
    meunData.forEach(meunItem => {
      if (meunItem.children) {
        mergeMeunAndRouter(meunItem.children);
      }
      // Reduce memory usage
      routerMap[meunItem.path] = meunItem;
    });
  };
  mergeMeunAndRouter(meun);
  return routerMap;
}, deepEqual);
```

In addition to the project can start normally, you should also run `tnpm run lint` to solve the lower-level problems that occur in the migration process. The problems and scenarios you may need to deal with are as follows:

- `no-unused-vars` error, you can delete it without checking the problem.
- `react/destructuring-assignment` error, you may need to modify something like `this.props.children` for `const { children } = this.props`.

In addition, we recommend that you migrate to the 2.0 recommended lint rules to make your code more elegant.

## Using the new features in 2.0

It's easy to use the new 2.0 features after the roadhog to umi migration. In 2.0 we have the following new features added:

- Add a user information page.
- Support internationalization.
- Support for style switching.

### Add account page

You only need to copy the related code in the v2 `pages` directory to your project and modify the routes configuration in `config/config.js`. This part is relatively simple, and I won't explain too much here. In addition to the new user information page, you can also refer to the update of other pages to jump to the code in your own project.

### Support internationalization

In Ant Design Pro 2.0 we used the umi plugin `umi-plugin-locale` for i18n. The plugin has also been built into the `umi-plugin-react` plugin set. You can turn on i18n by adding the `locale` configuration to the configuration of the collection.

After opening the i18n plugin, you can add the `locales` folder in the project directory, add the i18n resource file according to the convention, and then you can internationalize by using the API exposed by `umi/locale` in the project.

More about the `umi-plugin-locale` configuration can be plugged into its [documentation] (https://umijs.org/plugin/umi-plugin-react.html#locale).

### Support theme switching

Ant Design Pro uses less and cssModule as a style solution. You can configure this theme style by configuring lessVars at compile time. This function is built in umi. You can configure `theme` in the configuration file. Refer to umi's [Configuration Documentation] (https://umijs.org/config/#theme).

However, the adjustment of the navigation layout mode supported by the v2 version is mainly the upgrade of the business logic of the code. You can refer to the code of `src/layouts/BasicLayout.js` in the v2 code for adjustment.

For online theme switching, because less is compiled at build time, in order to achieve switching, you need to support less in online compilation and other issues. To solve this problem, we developed the `ant-design-theme` webpack plugin and the `merge-less` plugin to implement this feature. if you need it, you can add the related code by referring to `config/plugin.config.js` and `src/models/setting.sj` in the v2 code.

### More

See Ant Design Pro 2.0 [release log](https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95) for more details.
