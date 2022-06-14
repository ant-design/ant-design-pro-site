---
order: 15
title: 图表
group:
  title: 页面开发
nav:
  title: 文档
  path: /docs
  order: 1
---

很多时候我们都需要一个美观大方的图表页来充当首页，在快速展示大盘信息的同时还能吸引眼球，提升系统的质感。所以我们也做了一个图表库 Ant Design Charts。

[Ant Design Charts](https://charts.ant.design/zh-CN/guide) 是 [G2Plot](https://antv-g2plot.gitee.io/zh/examples/gallery) 的 React 版本，基于 React、TypeScript 封装了所有的 G2Plot 图表，继承了 G2Plot 的所有配置，对 React 技术栈的同学更加友好，<b>统一团队开发</b>。

- 开箱即用：默认呈现高质量图表，将对开发体验及用户体验的研究沉淀入图表的默认配置项

- 易于配置：用户能够根据具体业务需要较为轻松的调整图表细节

- 体验良好：视觉和交互体验聚焦于如何能够"**展示和发现信息**"这一图表本源的职能上

像使用组件一样生成图表，开箱即用，你甚至不需要修改任何配置项就可以满足需求，真正的默认好用，有没有心动想试试的感觉？

![image.png](https://gw.alipayobjects.com/zos/antfincdn/0TC3%26Qgh5c/1586836312040-340d7971-1ac7-4ee6-af81-e2cae2b05963.png)

> 图表的选型上我们做过很多挣扎，许多技术栈有些混乱。如果你想要了解，可以看看这个[文档](https://www.yuque.com/antv/g2plot/iqimgm)。

## 快速上手

如果使用 yarn 或者 npm 可以直接安装：

```shell
 npm install @ant-design/charts --save
 // yarn
 yarn add @ant-design/charts
```

有些时候图表体积比较大就需要通过 CDN 的方式来加快加载。 CDN 模式下由于底层依赖不一样，为了降低包体积，从 1.0.5 版本开始，组织架构图、流程图、资金流向图、缩进树图被打包到 charts_g6.min.js 里，其它图表打包到 charts.min.js 里，使用时按需引入即可。

我们首先需要在 `config/config.ts` 中的 `scripts` 中配置:

```tsx | pure
scripts: [
  'https://unpkg.com/react@17/umd/react.production.min.js',
  'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js',
  //使用 组织架构图、流程图、资金流向图、缩进树图 才需要使用
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts_g6.min.js',
];
```

同时在 `config/config.ts` 中的 `externals` 中配置:

```tsx | pure
externals: {
 react: 'React',
 'react-dom': 'ReactDOM',
 "@ant-design/charts": "charts"
};
```

## 简单使用

接下来我们就可以在代码中使用了。

```tsx | pure
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Page;
```

效果如下：

![charts](https://gw.alipayobjects.com/zos/antfincdn/ToVbo0z4oy/86A7A0C5-52B8-4892-8A58-9195DD9E9872.png)

### 图表类型

ant design chart 有 27 种图表类型，上百种图表基本可以满足所有开发的需求。你可以在 [官网](https://charts.ant.design/zh-CN/demos/global) 看到所有的图表，并且查询它们的 API。
