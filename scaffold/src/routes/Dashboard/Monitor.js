import React, { Component } from 'react';
import { Row, Col, Icon, Card, Tabs, Table, Radio } from 'antd';
import moment from 'moment';

import { ChartCard, Trend, numeral, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, NumberInfo, IconUp, IconDown } from '../../components/Charts';

import styles from './Monitor.less';

const TabPane = Tabs.TabPane;

// mock data
const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}
const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

class Monitor extends Component {
  state = {
    salesType: 'all',
  }

  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    });
  }

  render() {
    const { salesType } = this.state;

    const iconGroup = (
      <span className={styles.iconGroup}>
        <Icon type="camera-o" /><Icon type="export" /><Icon type="ellipsis" />
      </span>
    );

    const columns = [
      {
        title: '排名',
        dataIndex: 'index',
        key: 'index',
      },
      {
        title: '搜索关键词',
        dataIndex: 'keyword',
        key: 'keyword',
        render: text => <a href="/">{text}</a>,
      },
      {
        title: '用户数',
        dataIndex: 'count',
        key: 'count',
        sorter: (a, b) => a.count - b.count,
      },
      {
        title: '周涨幅',
        dataIndex: 'range',
        key: 'range',
        sorter: (a, b) => a.range - b.range,
        render: (text, record) => (
          <span style={{ textAlign: 'right' }}>{text}% {record.status === 1 ? <IconDown /> : <IconUp />}</span>
        ),
      },
    ];

    return (
      <div>
        <Row gutter={24}>
          <Col span={6}>
            <ChartCard
              title="销售额"
              action={<Icon type="exclamation-circle-o" />}
              total={numeral.yuan(126560)}
              footer={<Field label="日均销售额" value={numeral(12423).format('0,0')} />}
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
              total={numeral(8846).format('0,0')}
              footer={<Field label="日访问量" value={numeral(1234).format('0,0')} />}
              contentHeight={46}
            >
              <MiniArea
                line
                color="#AF7CE9"
                height={46}
                data={visitData}
              />
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard
              title="支付笔数"
              action={<Icon type="exclamation-circle-o" />}
              total={numeral(6560).format('0,0')}
              footer={<Field label="转化率" value="60%" />}
              contentHeight={46}
            >
              <MiniBar
                height={46}
                data={visitData}
              />
            </ChartCard>
          </Col>
          <Col span={6}>
            <ChartCard
              title="线上购物转化率"
              action={<Icon type="exclamation-circle-o" />}
              total="78%"
              footer={<Trend>
                <Trend.Item title="周同比" flag="up">12.3%</Trend.Item>
                <Trend.Item title="日环比" flag="down">11%</Trend.Item>
              </Trend>}
              contentHeight={46}
            >
              <MiniProgress percent={78} strokeWidth={8} target={80} color="#5DD1DD" />
            </ChartCard>
          </Col>
        </Row>

        <Card style={{ marginTop: 24 }}>
          <Tabs tabBarExtraContent={<span>123</span>}>
            <TabPane tab="销售额" key="sales">
              <Row gutter={72}>
                <Col span={16}>
                  <Bar
                    height={292}
                    title="销售额趋势"
                    data={salesData}
                  />
                </Col>
                <Col span={8}>
                  <h4>门店销售额排名</h4>
                  <p>列表组件占位</p>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="访问量" key="visits">
              访问量没有, 因为偷懒了
            </TabPane>
          </Tabs>
        </Card>

        <Row gutter={24}>
          <Col span={12}>
            <Card title="线上热门搜索" extra={iconGroup} style={{ marginTop: 24 }}>
              <Row gutter={68}>
                <Col span={12}>
                  <NumberInfo
                    title={<span>搜索用户数量 <Icon style={{ marginLeft: 8 }} type="info-circle-o" /></span>}
                    total={numeral(12321).format('0,0')}
                    status="up"
                    subTotal={17.1}
                  />
                  <MiniArea
                    line
                    color="#cceafe"
                    height={45}
                    data={visitData}
                  />
                </Col>
                <Col span={12}>
                  <NumberInfo
                    title="人均搜索次数"
                    total={2.7}
                    status="down"
                    subTotal={26.2}
                  />
                  <MiniArea
                    line
                    color="#5dd1dd"
                    height={45}
                    data={visitData}
                  />
                </Col>
              </Row>
              <Table
                style={{ marginTop: 24 }}
                Bordered={false}
                rowKey={record => record.index}
                size="middle"
                columns={columns}
                dataSource={searchData}
                pagination={{
                  style: { marginBottom: 0 },
                  showSizeChanger: true,
                  showQuickJumper: true,
                  pageSize: 5,
                }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="销售额类别占比" extra={iconGroup} style={{ marginTop: 24 }}>
              <Radio.Group value={salesType} onChange={this.handleChangeSalesType}>
                <Radio.Button value="all">全部渠道</Radio.Button>
                <Radio.Button value="online">线上</Radio.Button>
                <Radio.Button value="offline">门店</Radio.Button>
              </Radio.Group>
              <div style={{ marginTop: 32, marginBottom: 67 }}>
                <Pie
                  hasLegend
                  title="销售额"
                  subTitle="销售额"
                  total={numeral.yuan(123224)}
                  data={salesTypeData}
                  valueFormat={val => numeral.yuan(val)}
                  height={294}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export
default
Monitor;
