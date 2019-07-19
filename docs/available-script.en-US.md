---
order: 3
title: Available Scripts
type: Introduction
---

In the project, you can run these commands:

### `npm start`

Running this script will start the service and automatically open the default browser to display your page. When you re-edit the code, the page will automatically refresh.

### `npm run build`

Running this script will compile your project. You can find the compiled file for deployment in the `dist` directory of your project.

The compiled file is compressed. If you want to know more detailed information, please refer to [build](/docs/build).

If you need to deploy, check out [deploy](/docs/deploy).

![Image](https://user-images.githubusercontent.com/8186664/58555863-2a94d380-824d-11e9-8000-db085c7494f7.png)

### `npm run analyze`

The analysis script does the same thing as the build, but he opens a page to display your dependency information. If you need to optimize performance and package size, you need it.

### `npm run lint`

We have provided a series of lint scripts, including TypeScript, less, css, md files. You can use this script to see what's wrong with your code. In the submission we automatically run the relevant lint.

### `npm run lint:fix`

This script will automatically fix some lint errors. If you are ruined by lint, try it.

### `npm test`

This script will perform a series of tests, including e2e testing. For details, see [test](/doc/ui-test).

### `npm run fetch:blocks`

This script can download all the blocks to the current project. You will get the same interface as `https://preview.pro.ant.design/`.

### `npm run i18n-remove`

This script will try to delete all the i18n code in the project, which is not good for complex runtime code.
