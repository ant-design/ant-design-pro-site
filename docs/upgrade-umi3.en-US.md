---
order: 2
title: Upgrade to umi@3
type: Introduction
---

Upgrading umi@3 has minor changes, mainly due to the configuration of the plugin and changes in the import content. It should be noted that umi@3 will automatically import the plug-ins starting with `umi-plugin` or `@umijs`.

## Configuration

### tsconfig

Added in `tsconfig.json`

```json
"paths": {
  "@/*": ["./src/*"],
  "@@/*": ["./src/.umi/*"]
}
```

This is to support the new alias [@@](#) of umi@3.

### config.ts

- lessLoaderOptions changed to lessLoader
- Removed plugins field, umi has been modified to automatically scan package.json, no need
- cssLoaderOptions changed to cssLoader
- `IConfig` is changed to defineConfig, directly imported from umi
- The dynamicImport of `umi-plugin-react` has been upgraded to the first level.

### package.json

Remove unwanted dependencies:

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

Add new dependencies:

```json
{
  "@umijs/plugin-blocks": "^2.0.5",
  "@umijs/preset-ant-design-pro": "^1.0.1",
  "@umijs/preset-react": "^1.3.0",
  "@umijs/preset-ui": "^2.0.9"
}
```

For more configuration level changes, you can see [Move to umi@3](https://umijs.org/docs/upgrade-to-umi-3#%E9%85%8D%E7%BD%AE%E5%B1%82).

@ umijs/preset-ant-design-pro includes `umi-plugin-antd-icon-config`, just install @ umijs/preset-ant-design-pro.

## Code changes

`connect`,`ConnectProps`, `getLocale`,`setLocale`, `formatMessage`,`Dispatch`, `Link`,`FormattedMessage`, `Reducer`,`Effect`, `AnyAction` all modified to import from umi.

The original `umi-plugin-react/locale` is deprecated. All exported from `umi-plugin-react/locale` can be imported from umi. The original router is modified to history, and the api remains unchanged.

### lint and typescript type issues

Because umi @ 3 uses the runtime type, lint and typescript may report errors when the dependency installation is completed. This is because the definition file is not generated. We can execute `npm run lint` or `yarn run umi g tmp` to generate temporary files. If you find it more troublesome, you can do the following configuration in the scripts of package.json.

```bash
"postinstall": "umi g tmp"
```

It will be automatically generated when `umi dev` and `umi build` are executed, and will not affect normal development.

For details, please see this [diff](https://github.com/ant-design/ant-design-pro/pull/6039/files).
