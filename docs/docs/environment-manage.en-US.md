---
order: 11
title: environment variable
group:
  title: Advanced Usage
nav:
  title: Documents
  path: /docs
  order: 1
---

## Environment variables

### Default environment variables

Umi provides a large number of [default environment variables](https://umijs.org/zh/guide/env-variables.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE), these variables can help us manage some scaffolding functions.

### Set environment variables

Modify the startup command in `package.json` to add corresponding environment variables.

The sample code is as follows:

```tsx | pure
{
/** Omit configuration items */
"scripts": {
  /** Omit configuration items */
  // Add the UMI_ENV environment variable in the start command
  "start": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev",
  "start:dev": "cross-env REACT_APP_ENV=dev UMI_ENV=dev MOCK=none umi dev"
  /** Omit configuration items */
}
/** Omit configuration items */
}
```

## Multi-operation environment management

There are often some requirements during development, and different logic processing is performed according to the different environments in which the application runs.

For example, the `dev` environment uses the corresponding Url of `dev`, while the online uses the corresponding Url of `prod`. Or, in some specific environments, you need to turn on functions that only take effect in that environment.

### Get the name of the current running environment

There is such an environment variable `REACT_APP_ENV` in the scaffolding of Pro, which represents the specific name of the environment where the current application is located. Such as dev, test, pre, prod, etc.

If you need to use this environment variable in a non-node environment file other than `config`, you need to configure `define{}` when `config` exports the default `defineConfig()`.

The sample code is as follows:

```tsx | pure
// config/config.ts
const {REACT_APP_ENV} = process.env;

export default defineConfig({
{/** Omit other configuration */}
define: {
  REACT_APP_ENV: REACT_APP_ENV || false,
}
{/** Omit other configuration */}
});
```

Use this variable [Sample Code](https://github.com/ant-design/ant-design-pro/blob/b005f2a465/src/components/GlobalHeader/RightContent.tsx) as follows:

```tsx | pure
// src/components/RightContent/index.tsx
/** Omit other codes */
const GlobalHeaderRight: React.FC<{}> = () => {
/** Omit other codes */
return (
  <Space className={className}>
    <!-- Omit other codes -->
    <!-- Display the corresponding environment name on the top right side -->
    {REACT_APP_ENV && (
      <span>
        <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
      </span>
    )}
  </Space>
);
};
```

### Multiple environments and multiple configuration files

Pro scaffolding uses Umi as the underlying framework by default. In Umi, you can specify the `UMI_ENV` environment variable to [different configuration files for different environments](https://umijs.org/zh-CN/docs/config#Multiple environments and multiple copies Configuration), `UMI_ENV` needs to be configured in `package.json`.

The sample configuration is as follows:

```tsx | pure
{
{/** omitted... */}
"scripts": {
  "analyze": "cross-env ANALYZE=1 umi build",
  "build": "umi build",
  "build:dev": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi build",
  "build:test": "cross-env REACT_APP_ENV=test UMI_ENV=test umi build",
  "build:pre": "cross-env REACT_APP_ENV=pre UMI_ENV=pre umi build",
  "build:prod": "cross-env REACT_APP_ENV=prod UMI_ENV=prod umi build",
  "deploy": "npm run site && npm run gh-pages",
  "dev": "npm run start:dev",
  {/** omitted... */}
  "start": "cross-env REACT_APP_ENV=dev UMI_ENV=dev umi dev",
  "start:dev": "cross-env REACT_APP_ENV=dev UMI_ENV=dev MOCK=none umi dev",
  "start:no-mock": "cross-env REACT_APP_ENV=dev UMI_ENV=dev MOCK=none umi dev",
  "start:no-ui": "cross-env REACT_APP_ENV=dev UMI_ENV=dev UMI_UI=none umi dev",
  "start:pre": "cross-env REACT_APP_ENV=pre UMI_ENV=pre MOCK=none umi dev",
  "start:test": "cross-env REACT_APP_ENV=test UMI_ENV=test MOCK=none umi dev",
  {/** omitted... */}
},
{/** omitted... */}
}
```

When `UMI_ENV` is `test`, you must configure the `config.test.ts` file in the config directory to manage different variables in the `test` environment. The Umi framework will form the final configuration after deep merge.

The sample code is as follows:

```tsx | pure
// config/config.test.ts the configuration file corresponding to the test environment
import { defineConfig } from 'umi';

/**
 * Exported multi-environment variable naming convention: always capitalize and use underscore to separate words
 * Note: After adding the variable, you need to add the declaration of the variable in src/typing.d.ts, otherwise the IDE will report an error when using the variable.
 */
export default defineConfig({
  define: {
    API_URL: 'https://api-test.xxx.com', // API address
    API_SECRET_KEY: 'XXXXXXXXXXXXXXXX', // API call key
  },
});
```

Examples of variable usage:

```tsx | pure
// src/services/user.ts
import { request } from 'umi';

export async function query() {
  // Use the API key to call the user interface
  return request<API.CurrentUser[]>('${API_URL}/api/users', {
    API_SECRET_KEY,
  });
}
```

The structure under the configuration folder config:

```bash
ant-design-pro
├── config
│ ├── config.dev.ts
│ ├── config.test.ts
│ ├── config.pre.ts
│ ├── config.prod.ts
│ ├── config.ts
│ ├── proxy.ts
│ ├── routes.ts
│ ├── defaultSettings.ts
...
```

## How to deal with errors

Since environment variables are used directly, they will not be used by the window object, and errors will be reported in eslint and TypeScript.

In eslint, you can handle errors by adding the configuration of [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals). The code looks like this

```tsx | pure
{
"globals": {
  "page": true
}
}
```

TypeScript can be defined in [`typings.d.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/typings.d.ts#L18):

The sample code is as follows:

```tsx | pure
// src/typings.d.ts
// ... code omitted
declare const REACT_APP_ENV: 'test' | 'dev' | 'uat' | 'prod' | undefined;
// The following variable declaration corresponds to the variable defined in the config.[env].ts file
declare const API_URL: string;
declare const API_SECRET_KEY: string;
```

## The principle of variable use

[config](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) is the node environment, so you can directly use `process.env` to get the environment directly Variables, but in the code of a non-node environment, using `process.env` may only get the custom variable `NODE_ENV`, and other variables will not be injected automatically by webpack.

> About `process.env` and `NODE_ENV` please see [here](https://webpack.docschina.org/guides/production/#%E6%8C%87%E5%AE%9A-mode).

At this time, we need to use [`define`](https://umijs.org/zh/config/#define), which is through [`define-plugin`](https://webpack.docschina.org/plugins /define-plugin/) to achieve this feature, in [`config`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts#L65) Inject the environment variables of node into the define configuration.

It should be noted that we don't need to use it through `window['key']`, but use it directly. More specific principles can be seen [`
