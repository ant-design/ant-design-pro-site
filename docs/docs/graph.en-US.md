---
order: 15
title: Chart
group:
  title: Page Development
nav:
  title: Documents
  path: /docs
  order: 1
---

In many cases, we need a beautiful and generous icon page to serve as the home page, which can quickly display market information while also attracting attention and enhancing the texture of the system. So we also made an icon library <b>Ant Design Charts</b>.

[Ant Design Charts](https://charts.ant.design/zh-CN/guide) is the React version of [G2Plot](https://antv-g2plot.gitee.io/zh/examples/gallery), based on React and TypeScript encapsulate all G2Plot charts, inherit all the configurations of G2Plot, and are more friendly to students of the React technology stack. <b>Developed by the same team</b>.

-Out of the box: High-quality charts are presented by default, and the research on development experience and user experience is deposited into the default configuration items of the chart

-Easy to configure: users can easily adjust the chart details according to specific business needs

-Good experience: the visual and interactive experience focuses on how to **display and discover information**" the original function of the chart

Generate charts like using components, out of the box, you don't even need to modify any configuration items to meet your needs, the real default is easy to use, feel like you want to try it.

![image.png](https://gw.alipayobjects.com/zos/antfincdn/0TC3%26Qgh5c/1586836312040-340d7971-1ac7-4ee6-af81-e2cae2b05963.png)

> We have struggled a lot in the selection of charts, and many technology stacks are a little confused. If you want to know, you can take a look at this [document](https://www.yuque.com/antv/g2plot/iqimgm).

## Get started quickly

If you use yarn or npm, you can install it directly:

```shell
 npm install @ant-design/charts --save
 // yarn
 yarn add @ant-design/charts
```

Sometimes the chart size is relatively large, and CDN is needed to speed up the loading. In the CDN mode, due to the different underlying dependencies, in order to reduce the package volume, starting from version 1.0.5, the organization chart, flowchart, capital flow chart, and indented tree chart are packaged into charts_g6.min.js, and other charts are packaged into In charts.min.js, you can import it on demand when you use it.

We first need to configure in the scripts in config/config.ts:

```tsx | pure
scripts: [
  'https://unpkg.com/react@17/umd/react.production.min.js',
  'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts.min.js',
  //Use organization chart, flowchart, capital flow chart, indentation tree chart to use
  'https://unpkg.com/@ant-design/charts@1.0.5/dist/charts_g6.min.js',
];
```

At the same time, configure in `externals` in `config/config.ts`:

```tsx | pure
externals: {
 react:'React',
 'react-dom':'ReactDOM',
 "@ant-design/charts": "charts"
};
```

## easy to use

Then we can use it in the code.

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
      shape: 'diamond | circule',
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: '',
          value: any,
        };
      },
      customContent: (name, data) =>
        `<div>${data?.map((item) => {
          return `<div class="tooltip-chart" >
              <span class="tooltip-item-name">${item?.name}</span>
              <span class="tooltip-item-value">${item?.value}</span>
            </div>`;
        })}</div>`,
      showMarkers: boolean,
      showContent: boolean,
      position: 'right | left',
      showCrosshairs: boolean,
    },
  };
  return <Line {...config} />;
};
export default Page;
```

The effect is as follows:

![charts](https://gw.alipayobjects.com/zos/antfincdn/ToVbo0z4oy/86A7A0C5-52B8-4892-8A58-9195DD9E9872.png)

### Chart type

The ant design chart has 27 chart types, and hundreds of charts can basically meet all development needs. You can see all the charts on [Official Website](https://charts.ant.design/zh-CN/demos/global) and query their API.
