---
order: 1
title: Build
type: Build & Deployment
---

## Build

When you finish the development, you can run the following command to build your application:

```bash
$ npm run build
```

[![asciicast](https://asciinema.org/a/198144.png)](https://asciinema.org/a/198144)

Since Ant Design Pro use [Umi](https://umijs.org/) as development tool, complex processes have been encapsulated and for most scenarios only one command `umi build` is required to build the package, after build successfully, it will generate the `dist` folder in the root directory, which contains packaged files, usually static files like `*.js`, `*.css`, `index.html`.

But if you want to custom the build result, like specify the result directory, you can configure it in `config/config.js`, refer to [Umi configuration](https://umijs.org/guide/config.html) for more details.

### Analyze build result

If your build file is large, you can optimize your code with the `analyze` command to build and analyze the volume distribution of dependent modules.

```bash
$ npm run analyze
```

The command will open analyze result in your default browser automatically.
