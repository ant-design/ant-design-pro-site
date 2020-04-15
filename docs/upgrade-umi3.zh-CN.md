---
order: 2
title: 快速升级到 umi@3
type: 入门
---

升级 umi@3 改动较小，主要是插件的配置，与 import 内容的变化。需要注意的是 umi@3 会自动导入以 `umi-plugin` 或`@umijs` 开头的插件。

## 配置

### tsconfig

tsconfig  中增加

```bash
"paths": {
  "@/*": ["./src/*"],
  "@@/*": ["./src/.umi/*"]
}
```

此举是为了支持 umi@3 的新别名 [@@](#)。

### config.ts

- lessLoaderOptions 修改为 lessLoader
- 移除 plugins 字段，umi 已经修改为自动扫描 package.json，无需
- cssLoaderOptions 修改为 cssLoader
- IConfig 修改为 defineConfig，从 umi 中直接引入
- umi-plugin-react 的 dynamicImport，配置提升到第一级。

### package.json

移除不需要的依赖

```json
{
  "umi-plugin-antd-icon-config": "^1.0.2",
  "umi-plugin-ga": "^1.1.3",
  "umi-plugin-pro": "^1.0.3",
  "umi-types": "^0.5.9",
  "redux": "^4.0.1",
  "umi-plugin-antd-icon-config": "^1.0.2",
  "umi-plugin-antd-theme": "1.2.0",
  "umi-plugin-pro-block": "^1.3.2",
  "umi-plugin-react": "^1.14.10",
  "dva": "^2.6.0-beta.16"
}
```

增加新的依赖

```json
{
  "@umijs/plugin-blocks": "^2.0.5",
  "@umijs/preset-ant-design-pro": "^1.0.1",
  "@umijs/preset-react": "^1.3.0",
  "@umijs/preset-ui": "^2.0.9"
}
```

更多配置层面的改动可以看[迁移到 umi@3](https://umijs.org/docs/upgrade-to-umi-3#%E9%85%8D%E7%BD%AE%E5%B1%82)。

@umijs/preset-ant-design-pro 里面包括了 `umi-plugin-antd-icon-config`，只需要安装 @umijs/preset-ant-design-pro 即可。

## 代码改动

`connect`，`ConnectProps`, `getLocale`, `setLocale`，`formatMessage`，`Dispatch`，`Link`，`FormattedMessage`，`Reducer`，`Effect`，`AnyAction` 全部修改为从 umi 中导入。统一了导入路径。

原有的 `umi-plugin-react/locale` 被废弃，所有从 `umi-plugin-react/locale`  中导出的皆可从 umi 中导入，原有的 router 修改为 history，api 不变。

### lint 和 typescript 类型问题

由于 umi@3 使用了运行时类型，所以在依赖安装完成之时 lint 与 typescript 可能报错，这是因为定义文件没有生成导致的，我们可以执行的 `npm run lint` 或 `yarn run umi g tmp`  来生成临时文件。如果觉得比较麻烦，可以在 package.json 的 scripts 中做如下配置。

```bash
"postinstall": "umi g tmp"
```

在 `umi dev` 与 `umi build` 执行时会自动生成，不会影响正常开发。

具体可以参见这个 [diff](https://github.com/ant-design/ant-design-pro/pull/6039/files)。
