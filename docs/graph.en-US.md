---
order: 11
title: Charts
type: Advanced
---

Ant Design Pro provides the well-designed abstract chart components based on the [BizCharts](https://github.com/alibaba/BizCharts). These components provide the ability to use with complex mixed view or just use along for common business usage.

Currently chart components have 10 type of charts and 2 type of chart suites:

- Pie
- Bar
- Gauge
- Radar
- TagCloud
- WaterWave
- MiniBar
- MiniArea
- MiniProgress
- TimelineChart
- ChartCard
- Field

[View chart components doc](https://v2-pro.ant.design/components/charts/)

## Use Chart Components

The component library has been deleted in v4. If you want to use it, you can see [Chart Component](https://v2-pro.ant.design/components/charts/)

## Use BizCharts

If exists chart components is not what you want, you can just use [BizCharts](https://github.com/alibaba/BizCharts) to customize your own chart components.

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
