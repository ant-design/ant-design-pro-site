import React, { Component } from 'react';
import { Row, Col, Card, Progress } from 'antd';
import { NumberInfo, numeral, MiniArea, Pie } from '../../components/Charts';

const activeData = [];
for (let i = 0; i < 24; i += 1) {
  activeData.push({
    x: `${i}:00`,
    y: (i * 50) + (Math.floor(Math.random() * 200)),
  });
}

class Monitor extends Component {
  render() {
    return (
      <div>
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
              <div style={{ height: 424 }}>地图占位</div>
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
                color="#5dd1dd"
                height={132}
                data={activeData}
              />
            </Card>
            <Card title="券核效率" style={{ marginTop: 24, textAlign: 'center' }}>
              <h4 style={{ marginBottom: 16 }}>跳出率</h4>
              <Progress type="dashboard" percent={75} />
            </Card>
          </Col>
        </Row>
        <Row gutter={24} style={{ marginTop: 24 }}>
          <Col span={12}>
            <Card title="各品类占比">
              <Row>
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
              标签云占位
            </Card>
          </Col>
          <Col span={6}>
            <Card title="资源剩余">
              占位
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Monitor;
