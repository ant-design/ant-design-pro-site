import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker } from 'antd';

import { ChartCard, Trend, numeral, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, NumberInfo, IconUp, IconDown } from '../../components/Charts';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import TimelineChart from '../../components/TimelineChart';
import RadioText from '../../components/RadioText';

import styles from './Analysis.less';

const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

class Analysis extends Component {
  state = {
    salesType: 'all',
    currentTabKey: '',
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'chart/fetch',
    });
  }

  handleChangeSalesType = (e) => {
    this.setState({
      salesType: e.target.value,
    });
  }

  handleTabChange = (key) => {
    this.setState({
      currentTabKey: key,
    });
  }

  render() {
    const { salesType, currentTabKey } = this.state;
    const { chart } = this.props;
    const {
      visitData, salesData, searchData, offlineData, offlineChartData, salesTypeData,
      } = chart;

    const iconGroup = (
      <span className={styles.iconGroup}>
        <Icon type="camera-o" /><Icon type="export" /><Icon type="ellipsis" />
      </span>
    );

    const salesExtra = (<div>
      <RadioGroup style={{ marginRight: 12 }} onChange={e => console.log(e.target.value)}>
        <RadioText value="day">今日</RadioText>
        <RadioText value="week">本周</RadioText>
        <RadioText value="month">本月</RadioText>
        <RadioText value="year">全年</RadioText>
      </RadioGroup>
      <RangePicker style={{ width: 256 }} />
    </div>);

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

    const CustomTab = ({ data, currentTabKey: currentKey }) => (
      <Row gutter={8} style={{ width: 138, margin: '8px 28px' }}>
        <Col span={12}>
          <NumberInfo
            title={data.name}
            subTitle="转化率"
            total={`${data.cvr * 100}%`}
            theme={(currentKey !== data.name) && 'light'}
          />
        </Col>
        <Col span={12} style={{ paddingTop: 36 }}>
          <Pie
            animate={(currentKey === data.name)}
            color={(currentKey !== data.name) && '#99d5fd'}
            inner={0.55}
            tooltip={false}
            margin={[0, 0, 0, 0]}
            percent={data.cvr * 100}
            height={64}
          />
        </Col>
      </Row>
    );

    return (
      <PageHeaderLayout
        title="业务分析"
      >
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

        <Card
          bodyStyle={{ padding: '16px 24px' }}
          style={{ marginTop: 24 }}
        >
          <Tabs tabBarExtraContent={salesExtra}>
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
                  <ul className={styles.rankingList}>
                    {
                      rankingListData.map((item, i) => (
                        <li key={item.title}>
                          <span className={(i < 3) && styles.active}>{i + 1}</span>
                          <span>{item.title}</span>
                          <span>{numeral(item.total).format('0,0')}</span>
                        </li>
                      ))
                    }
                  </ul>
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
                    subTitle={<span>搜索用户数量 <Icon style={{ marginLeft: 8 }} type="info-circle-o" /></span>}
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
                    subTitle="人均搜索次数"
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

        <Card style={{ marginTop: 24 }} bodyStyle={{ padding: '0 0 24px 0' }}>
          <Tabs
            activeKey={currentTabKey || (offlineData[0] && offlineData[0].name)}
            onChange={this.handleTabChange}
          >
            {
              offlineData.map(shop => (
                <TabPane
                  tab={<CustomTab data={shop} currentTabKey={currentTabKey} />}
                  key={shop.name}
                >
                  <div style={{ padding: '0 24px' }}>
                    <TimelineChart
                      data={offlineChartData}
                      titleMap={{ y1: '客流量', y2: '支付笔数' }}
                    />
                  </div>
                </TabPane>)
              )
            }
          </Tabs>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  chart: state.chart,
}))(Analysis);
