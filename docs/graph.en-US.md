---
order: 11
title: Charts
type: 进阶
---

Ant Design Pro provides abstract chart types which designed by the designer and based on data visualization library [BizCharts](https://github.com/alibaba/BizCharts), We provides common business chart suites, which can be used alone or combined to achieve a complex layout.

10 chart types and 2 chart suites now offered:

* Pie Chart (Pie)
* Bar Chart (Bar)
* Gauge Chart (Gauge)
* Radar Chart (Radar)
* Tag Cloud (TagCloud)
* WaterWave Graph (WaterWave)
* Mini Bar Chart (MiniBar)
* Mini Area Chart (MiniArea)
* Mini Progress (MiniProgress)
* Line Chart With Timeline (TimelineChart)
* Chart Card (ChartCard)
* Chart Field (Field)

[View Chart Components](http://pro.ant.design/components/Charts)

## Using Ant Design Pro Charts

Charts is located on `ant-design-pro/lib/Charts` package, require it into your project just like other components:

```jsx
import { ChartCard, MiniBar } from 'ant-design-pro/lib/Charts';
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
      <Tooltip title="Number of payments indicates the quality of transaction">
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

So you can achieve a simple combination of charts:

<img width="260" src="https://gw.alipayobjects.com/zos/rmsportal/yzmUFELvhCXXhsIRZOLT.png" />

## Customize your charts with BizCharts

If Ant Design Pro does not meet your demand, you can repackage your own chart component with [BizCharts](https://github.com/alibaba/BizCharts).

### require BizCharts

install by npm

```
npm install bizcharts --save
```

usage

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

Refer to [More Demo](https://alibaba.github.io/BizCharts/demo.html)。
