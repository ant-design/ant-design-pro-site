import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { NumberInfo, numeral, MiniArea, Pie, WaterWave, Gauge } from '../../components/Charts';
import MapChart from '../../components/MapChart';
import TagCloud from '../../components/TagCloud';

const activeData = [];
for (let i = 0; i < 24; i += 1) {
  activeData.push({
    x: `${i}:00`,
    y: (i * 50) + (Math.floor(Math.random() * 200)),
  });
}
const MapData = [];
for (let i = 0; i < 50; i += 1) {
  MapData.push({
    x: Math.floor(Math.random() * 600),
    y: Math.floor(Math.random() * 400),
    value: Math.floor(Math.random() * 1000) + 500,
  });
}

class Monitor extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const { monitor } = this.props;
    const { tags } = monitor;

    return (
      <PageHeaderLayout
        title="大盘监控"
      >
        <Row gutter={24}>
          <Col span={16}>
            <Card title="活动实时交易情况">
              <Row>
                <Col span={6}>
                  <NumberInfo
                    subTitle="今日交易总额"
                    total={numeral(124543233).format('0,0')}
                  />
                </Col>
                <Col span={6}>
                  <NumberInfo
                    subTitle="销售目标完成率"
                    total="92%"
                  />
                </Col>
                <Col span={6}>
                  <NumberInfo
                    subTitle="活动剩余时间"
                    total="01:10:12"
                  />
                </Col>
                <Col span={6}>
                  <NumberInfo
                    subTitle="每秒交易总额"
                    total={numeral(234).format('0,0')}
                  />
                </Col>
              </Row>
              <div style={{ height: 424, paddingTop: 32 }}>
                <MapChart
                  data={MapData}
                />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="活动情况预测">
              <NumberInfo
                subTitle="目标评估"
                total="有望达到预期"
              />
              <MiniArea
                line
                color="#5DD1DD"
                height={132}
                data={activeData}
              />
            </Card>
            <Card title="券核效率" style={{ marginTop: 24, textAlign: 'center' }}>
              <Gauge
                title="跳出率"
                height={164}
                percent={87}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col span={12}>
            <Card title="各品类占比">
              <Row style={{ padding: '18px 0 19px 0' }}>
                <Col span={8}>
                  <Pie
                    percent={28}
                    subTitle="中式快餐"
                    total="28%"
                    height={129}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    color="#5DD1DD"
                    percent={22}
                    subTitle="西餐"
                    total="22%"
                    height={129}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    color="#B5EDC9"
                    percent={32}
                    subTitle="火锅"
                    total="32%"
                    height={129}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="热门搜索">
              <TagCloud
                data={tags}
                height={161}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card title="资源剩余" style={{ textAlign: 'center' }}>
              <WaterWave
                height={161}
                title="补贴资金剩余"
                percent={34}
              />
            </Card>
          </Col>
        </Row>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  monitor: state.monitor,
}))(Monitor);

