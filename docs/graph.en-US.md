---
order: 11
title: Charts
type: Advanced
---

Ant Design Pro provides the well-designed abstract chart components based on the [BizCharts](https://github.com/alibaba/BizCharts).
These components provide the ability to use with complex mixed view or just use along for common business usage.

Currently chart components have 10 type of charts and 2 type of chart suites:

* Pie
* Bar
* Gauge
* Radar
* TagCloud
* WaterWave
* MiniBar
* MiniArea
* MiniProgress
* TimelineChart
* ChartCard
* Field

[View chart components doc](https://pro.ant.design/components/Charts/)

## Use Chart Components

Chart components are included in `components/Charts`.
Just use then as other components:

> You can also import then as pro module: [Use components alone](https://pro.ant.design/docs/use-components-alone)

```jsx
import { ChartCard, MiniBar } from '@/components/Charts';
import { Tooltip, Icon } from 'antd';

const visitData = [
  {
    x: "2017-09-01",
    y: 100
  },
  {
    x: "2017-09-02",
    y: 120
  },
  {
    x: "2017-09-03",
    y: 88
  },
  {
    x: "2017-09-04",
    y: 65
  }
];

ReactDOM.render(
  <ChartCard
    title="Payments"
    action={
      <Tooltip title="Payments reflect the quality of transaction">
        <Icon type="exclamation-circle-o" />
      </Tooltip>
    }
    total="6,500"
    contentHeight={46}
  >
    <MiniBar height={46} data={visitData} />
  </ChartCard>,
  mountNode
);
```

And now you have the combined chart:

<img width="260" src="https://gw.alipayobjects.com/zos/rmsportal/yzmUFELvhCXXhsIRZOLT.png" />

## Use BizCharts

If exists chart components is not what you want,
you can just use [BizCharts](https://github.com/alibaba/BizCharts) to customize your own chart components.

### install BizCharts

Use npm in command line:

```
npm install bizcharts --save
```

And import into your project:

```jsx
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';

const data = [...];

<Chart height={400} data={data} forceFit>
  <Axis name="month" />
  <Axis name="temperature" label={{ formatter: val => `${val}°C` }} />
  <Tooltip crosshairs={{ type : "y" }} />
  <Geom type="line" position="month*temperature" size={2} color={'city'} />
  <Geom type='point' position="month*temperature" size={4} color={'city'} />
</Chart>
```

Reference [more demo](https://alibaba.github.io/BizCharts/demo.html)。
