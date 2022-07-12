---
order: 31
title: Build
group:
  title: Build & Deployment
nav:
  title: Documents
  path: /docs
  order: 1
---

## Build

When you finish the development, you can run the following command to build your application:

```bash
$ npm run build
```

[![asciicast](https://asciinema.org/a/198144.png)](https://asciinema.org/a/198144)

Since Ant Design Pro use [Umi](https://umijs.org/) as development tool, complex processes have been encapsulated and for most scenarios only one command `umi build` is required to build the package, after build successfully, it will generate the `dist` folder in the root directory, which contains packaged files, usually static files like `*.js`, `*.css`, `index.html`.

But if you want to custom the build result, like specify the result directory, you can configure it in `config/config.ts`, refer to [Umi configuration for v3](https://v3.umijs.org/config) or [Umi configuration for v4](https://umijs.org/docs/api/config) for more details.

### Analyze build result

If your build file is large, you can optimize your code with the `analyze` command to build and analyze the volume distribution of dependent modules.

```bash
npm run analyze
```

The command will open analyze result in your default browser automatically.

### Server-side rendering (SSR)

Server-Side Rendering refers to the process of page processing technology where the HTML structure of the page is spliced on the server side, sent to the browser, and then bound to the state and events to become a fully interactive page.

If you need to open it, you can configure the following code in `config/config.tsx` to open:

```tsx | pure
export default {
  ssr: {},
};
```

[ssr](https://umijs.org/docs/ssr#%E5%BC%80%E5%8F%91) is a very advanced usage and requires a deep understanding of the front-end technology stack, please use it with caution.
