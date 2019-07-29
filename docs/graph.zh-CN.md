---
order: 11
title: 图表
type: 进阶
---

Ant Design Pro 提供了由设计师精心设计抽象的图表类型，是在 [BizCharts](https://github.com/alibaba/BizCharts) 图表库基础上的二次封装，同时提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。

目前一共包涵 10 个图表类型，以及 2 个图表套件：

- 饼状图（Pie）
- 柱状图（Bar）
- 仪表盘（Gauge）
- 雷达图（Radar）
- 标签云（TagCloud）
- 水波图（WaterWave）
- 迷你柱状图（MiniBar）
- 迷你区域图（MiniArea）
- 迷你进度条（MiniProgress）
- 带有时间轴的折线图（TimelineChart）
- 图表卡片（ChartCard）
- 图表字段（Field）

[查看图表组件](https://v2-pro.ant.design/components/charts-cn/)

## 使用 Ant Design Pro 的图表

v4 中删除了组件库，如果你还要使用可以看 [图表组件](https://v2-pro.ant.design/components/charts-cn/)

## 使用 BizCharts 绘制图表

如果 Ant Design Pro 不能满足你的业务需求，可以直接使用 [BizCharts](https://github.com/alibaba/BizCharts) 封装自己的图表组件。

### 引入 BizCharts

通过 npm 安装

```
npm install bizcharts --save
```

在项目中使用

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

参看 [更多 Demo](https://alibaba.github.io/BizCharts/demo.html)。
