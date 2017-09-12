---
order: 9
title: 图表
---

---

## 使用 ant design pro 的图表

ant design pro 在 [G2](https://antv.alipay.com/g2/doc/index.html) 图表库基础上的二次封装，提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。[查看更多](https://github.com/ant-design/test2/tree/master/src/components/Charts)

使用 ant design pro 图表，非常简单：

```jsx
import { ChartCard, MiniBar, Field } from 'ant-design-pro';
import { Tooltip } from 'antd';

const visitData = [
  {
    x: '2017-09-01',
    y: 100,
  },
  {
    x: '2017-09-02',
    y: 120,
  },
  {
    x: '2017-09-03',
    y: 88,
  },
  {
    x: '2017-09-04',
    y: 65,
  },
];

ReactDOM.render(<ChartCard
  bordered={false}
  title="支付笔数"
  action={<Tooltip title="支付笔数反应交易质量"><Icon type="exclamation-circle-o" /></Tooltip>}
  total={numeral(6560).format('0,0')}
  footer={<Field label="转化率" value="60%" />}
  contentHeight={46}
>
  <MiniBar
    height={46}
    data={visitData}
  />
</ChartCard>
, mountNode);
```

## 使用 G2 绘制图表 

如果 ant design pro 不能满足你的业务需求，可以直接试用 [G2](https://antv.alipay.com/g2/doc/index.html) 封装自己的图表组件。

#### 引入 G2

通过 npm 安装 g2 包
```
npm install g2 --save
```

引入 g2 到自己的项目
```
import G2 from 'g2';

const chart = new G2.Chart({
  id: 'c1',
  width: 600,
  height: 300
});
```

#### 结合 G2 到 React 代码中

G2 本身是渲染在一个页面的 dom 中，所以在 React 中，我们常常通过 [refs](https://facebook.github.io/react/docs/refs-and-the-dom.html) 获取 G2 需要渲染的容器。

```jsx
import G2 from 'g2';

const MyCharts extends Component {
  componentDidMount() {
    G2.Chart({
      container: this.node, 
    });
  }
  render() {
    return <div ref={n => this.node = n} />
  }
}
```

并且由于 G2 依赖于 dom 结构，所以我们第一次渲染需要在 `componentDidMount` 中新建 G2 对象。

#### 图表渲染更新

当数据发生变化，图表展示的更新变化，需要我们自己在图表组件中处理。

```jsx
import G2 from 'g2';

const MyCharts extends Component {
  componentDidMount() {
    this.renderChart(); 
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.data !== nextProps.data) {
      this.renderChart(nextProps); 
    } 
  }
  renderChart(props) {
    const { data } = (props || this.props);
    if (!this.chart) {
      this.chart = G2.Chart({
        container: this.node, 
      });
      this.chart.source(data);
      this.chart.render();
    } else {
      this.chart.changeData(data);
      this.chart.repaint();
    }
    // 或者为了处理复杂的 props 变化，可以直接
    if (this.chart) {
      this.chart.destroy(); 
    }
    // 每次重新渲染即可 
    this.chart = G2.Chart({
      container: this.node, 
    });
    this.chart.source(data);
    this.chart.render();
  }
  render() {
    return <div ref={n => this.node = n} />
  }
}
```

其中需要注意的是，再次渲染图表的时候需要清理之前的内容。

#### 图表重绘时机

G2 每一个属性变化，都需要重新绘制图表，但是如果数据或者配置没有发生变化，那么减少图表不必要的渲染能够提升网页的性能。

在 `componentWillReceiveProps` 中直接对比 `this.props` 和 `nextProps` 是不严禁的，我们建议使用对象的对比函数：

```js
function equal(old, target) {
  let r = true;
  for (const prop in old) {
    if (typeof old[prop] === 'function' && typeof target[prop] === 'function') {
      if (old[prop].toString() != target[prop].toString()) {
        r = false;
      }
    } else if (old[prop] != target[prop]) {
      r = false;
    }
  }
  return r;
}

export default equal;
```

避免 `function` 参数的干扰，浅对比其他配置的异同，减少不必要的重绘，以提高性能。

```jsx
componentWillReceiveProps(nextProps) {
  if (!equal(this.props, nextProps)) {
    this.renderChart(nextProps);
  }
}
```
