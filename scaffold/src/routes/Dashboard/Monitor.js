import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import moment from 'moment';

import { ChartCard, Trend, numeral, MiniArea } from '../../components/Charts';

class Monitor extends Component {
  render() {
    // mock data
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 100,
      });
    }

    return (
      <div>
        <Row gutter={24}>
          <Col span={6}>
            <ChartCard
              title="销售额"
              action={<Icon type="exclamation-circle-o" />}
              total={`${numeral.yuan(126560)}`}
              footer={<span>日均销售额 {numeral(12423).format('0,0')}</span>}
              contentHeight={46}
            >
              <Trend colorType="gray">
                <Trend.Item title="周同比" flag="up">12.3%</Trend.Item>
                <Trend.Item title="日环比" flag="down">11%</Trend.Item>
              </Trend>
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard
              title="访问量"
              action={<Icon type="exclamation-circle-o" />}
              total="8,846"
              footer={<span>日访问量 1,234</span>}
              contentHeight={46}
            >
              <MiniArea
                fit
                height={46}
                data={visitData}
              />
            </ChartCard>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Monitor;
