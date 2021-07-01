---
order: 92
title: 环境变量
group:
  title: 高级使用
nav:
  title: 文档
  path: /docs
  order: 1
---

## 环境变量

### 默认环境变量

Umi 中提供了大量的 [默认环境变量](https://umijs.org/zh/guide/env-variables.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE)，这些变量可以帮助我们管理一些脚手架功能。

### 设置环境变量

在`package.json`内修改启动命令，以添加对应环境变量。

示例代码如下：

```tsx | pure
{
/** 省略配置项 */
"scripts": {
  /** 省略配置项 */
  // 在start命令内添加UMI_ENV环境变量
  "start": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev",
  "start:dev": "cross-env REACT_APP_ENV=dev UMI_ENV=dev MOCK=none umi dev"
  /** 省略配置项 */
}
/** 省略配置项 */
}
```

## 多运行环境管理

在开发中经常会有一些需求，根据应用运行的不同环境进行不同的逻辑处理。

比如，`dev` 环境使用 `dev` 的对应的 Url，而线上则使用 `prod` 对应的 Url。 或者，在某些特定的环境需要打开只有在该环境下才会生效的功能。

### 获取当前运行环境名称

在 Pro 的脚手架中有这样的一个环境变量 `REACT_APP_ENV`，该变量代表当前应用所处环境的具体名称。如 dev、test、pre、prod 等。

如若需要在 `config` 外的非 node 环境文件中使用该环境变量，则需要在 `config` 导出默认 `defineConfig()` 时配置 `define{}`。

示例代码如下：

```tsx | pure
// config/config.ts
const { REACT_APP_ENV } = process.env;

export default defineConfig({
{/** 省略其他配置 */}
define: {
  REACT_APP_ENV: REACT_APP_ENV || false,
}
{/** 省略其他配置 */}
});
```

使用该变量[示例代码](https://github.com/ant-design/ant-design-pro/blob/b005f2a465/src/components/GlobalHeader/RightContent.tsx)如下：

```tsx | pure
// src/components/RightContent/index.tsx
/** 省略其他代码 */
const GlobalHeaderRight: React.FC<{}> = () => {
/** 省略其他代码 */
return (
  <Space className={className}>
    <!-- 省略其他代码 -->
    <!-- 在顶部右侧显示对应环境名称 -->
    {REACT_APP_ENV && (
      <span>
        <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
      </span>
    )}
  </Space>
);
};
```

### 多环境多份配置文件

Pro 脚手架默认使用 Umi 作为底层框架，在 Umi 内可通过指定 `UMI_ENV` 环境变量来[区分不同环境的配置文件](https://umijs.org/zh-CN/docs/config#多环境多份配置)，`UMI_ENV` 需要在 `package.json` 内配置。

示例配置如下：

```tsx | pure
{
{/** 省略... */}
"scripts": {
  "analyze": "cross-env ANALYZE=1 umi build",
  "build": "umi build",
  "build:dev": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi build",
  "build:test": "cross-env REACT_APP_ENV=test UMI_ENV=test umi build",
  "build:pre": "cross-env REACT_APP_ENV=pre UMI_ENV=pre umi build",
  "build:prod": "cross-env REACT_APP_ENV=prod UMI_ENV=prod umi build",
  "deploy": "npm run site && npm run gh-pages",
  "dev": "npm run start:dev",
  {/** 省略... */}
  "start": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev",
  "start:dev": "cross-env REACT_APP_ENV=dev UMI_ENV=dev MOCK=none umi dev",
  "start:no-mock": "cross-env REACT_APP_ENV=dev UMI_ENV=dev MOCK=none umi dev",
  "start:no-ui": "cross-env REACT_APP_ENV=dev UMI_ENV=dev UMI_UI=none umi dev",
  "start:pre": "cross-env REACT_APP_ENV=pre UMI_ENV=pre MOCK=none umi dev",
  "start:test": "cross-env REACT_APP_ENV=test UMI_ENV=test MOCK=none umi dev",
  {/** 省略... */}
},
	{/** 省略... */}
}
```

当 `UMI_ENV` 为 `test` 时，则必须在 config 目录下配置 `config.test.ts` 文件来管理 `test` 环境下的不同变量，Umi 框架会在 deep merge 后形成最终配置。

示例代码如下：

```tsx | pure
// config/config.test.ts test环境对应的配置文件
import { defineConfig } from 'umi';

/**
 * 导出的多环境变量命名约定：一律大写且采用下划线分割单词
 * 注意：在添加变量后，需要在src/typing.d.ts内添加该变量的声明，否则在使用变量时IDE会报错。
 */
export default defineConfig({
  define: {
    API_URL: 'https://api-test.xxx.com', // API地址
    API_SECRET_KEY: 'XXXXXXXXXXXXXXXX', // API调用密钥
  },
});
```

变量使用示例：

```tsx | pure
// src/services/user.ts
import { request } from 'umi';

export async function query() {
  // 使用API密钥调用用户接口
  return request<API.CurrentUser[]>('${API_URL}/api/users', {
    API_SECRET_KEY,
  });
}
```

配置文件夹 config 下的结构：

```bash
ant-design-pro
├── config
│   ├── config.dev.ts
│   ├── config.test.ts
│   ├── config.pre.ts
│   ├── config.prod.ts
│   ├── config.ts
│   ├── proxy.ts
│   ├── routes.ts
│   ├── defaultSettings.ts
...
```

## 报错的处理方式

由于环境变量是直接使用，不会通过 window 对象的方式来使用，在 eslint 和 TypeScript 中都会报错。

eslint 中可以通过增加 [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals) 的配置来处理报错。代码看起来是这样的

```tsx | pure
{
"globals": {
  "page": true
}
}
```

在 TypeScript 可以在 [`typings.d.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/typings.d.ts#L18) 中进行定义：

示例代码如下：

```tsx | pure
// src/typings.d.ts
// ... 代码省略
declare const REACT_APP_ENV: 'test' | 'dev' | 'uat' | 'prod' | undefined;
// 以下变量声明对应config.[env].ts文件内define的变量
declare const API_URL: string;
declare const API_SECRET_KEY: string;
```

## 变量使用的原理

[config](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 是 node 环境，所以可以直接用 `process.env` 来直接拿到环境变量，但是非 node 环境的代码中，使用 `process.env` 可能只会获得 `NODE_ENV` 这个约定俗成的变量，别的变量 webpack 并不会自动注入。

> 关于 `process.env` 和 `NODE_ENV` 请看[这里](https://webpack.docschina.org/guides/production/#%E6%8C%87%E5%AE%9A-mode)。

这时候我们就需要使用 [`define`](https://umijs.org/zh/config/#define)，他是通过 [`define-plugin`](https://webpack.docschina.org/plugins/define-plugin/) 来实现的这个特性，在 [`config`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts#L65) 中将 node 的环境变量注入 define 配置中。

使用时需要注意的是我们不需要通过 `window['key']` 的方式来使用它，而是直接使用。更具体的原理可以看一下[`define-plugin`](https://webpack.docschina.org/plugins/define-plugin/)插件的实现。
