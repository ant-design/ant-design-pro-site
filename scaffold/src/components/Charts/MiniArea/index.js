import React, { Component } from 'react';
import G2 from 'g2';
import styles from '../index.less';

class MiniArea extends Component {
  componentDidMount() {
    this.renderChart(this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.renderChart(nextProps.data);
    }
  }

  handleRef = (n) => {
    this.node = n;
  }

  renderChart(data) {
    const { height = 0, fit = true, color = '#33ABFB' } = this.props;

    if (!data || (data && data.length < 1)) {
      return;
    }

    // clean
    this.node.innerHTML = '';

    const Frame = G2.Frame;
    const frame = new Frame(data);

    const chart = new G2.Chart({
      container: this.node,
      forceFit: fit,
      height: height + 54,
      plotCfg: {
        margin: [36, 0, 30, 0],
      },
      legend: null,
    });

    chart.axis(false);

    chart.source(frame, {
      x: {
        type: 'cat',
        range: [0, 1],
      },
      y: {
        min: 0,
      },
    });

    chart.tooltip({
      title: null,
      crosshairs: false,
      map: {
        name: 'x',
      },
    });
    chart.area().position('x*y').color(color).shape('smooth');
    chart.render();
  }

  render() {
    const { height } = this.props;

    return (
      <div className={styles.chart} style={{ height }}>
        <div>
          <div ref={this.handleRef} />
        </div>
      </div>
    );
  }
}

export default MiniArea;
