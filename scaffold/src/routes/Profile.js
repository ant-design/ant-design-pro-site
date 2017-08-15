import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Menu, Dropdown, Icon, Row, Col, Steps, Card, Popover, Badge, Table, Tooltip } from 'antd';
import PageHeaderLayout from '../layouts/PageHeaderLayout';
import DescriptionList from '../components/DescriptionList';
import styles from './Profile.less';

const { Step } = Steps;
const { Term, Description } = DescriptionList;

const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
);

const action = (
  <div>
    <Button size="large" type="primary">主操作</Button>
    <Button size="large">次操作</Button>
    <Dropdown overlay={menu}>
      <Button size="large">
        更多 <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
);

const extra = (
  <Row>
    <Col span={12}>
      <div className={styles.textSecondary}>状态</div>
      <div className={styles.heading}>待审批</div>
    </Col>
    <Col span={12}>
      <div className={styles.textSecondary}>订单金额</div>
      <div className={styles.heading}>¥ 568.08</div>
    </Col>
  </Row>
);

const description = (
  <DescriptionList col="2">
    <Term>创建人</Term>
    <Description>曲丽丽</Description>
    <Term>关联单据</Term>
    <Description><a href="">12421</a></Description>
    <Term>创建时间</Term>
    <Description>2017-07-07</Description>
    <Term>生效日期</Term>
    <Description>2017-07-07 ~ 2017-08-08</Description>
    <Term>单据备注</Term>
    <Description>修改公司地址：浙江省杭州市西湖区工专路</Description>
  </DescriptionList>
);

const tabList = [{
  key: 'detail',
  tab: '详情',
}, {
  key: 'rule',
  tab: '规则',
}];

const desc1 = (
  <div style={{ fontSize: 14 }}>
    <div style={{ marginTop: 4, marginBottom: 8 }}>
      曲丽丽 <Icon type="dingding-o" />
    </div>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div style={{ fontSize: 14 }}>
    <div style={{ marginTop: 4, marginBottom: 8 }}>
      周毛毛 <Icon type="dingding-o" style={{ color: '#00A0E9' }} />
    </div>
    <div><a href="">催一下</a></div>
  </div>
);

const popoverContent = (
  <div>
    吴加号
    <span className={styles.textSecondary} style={{ float: 'right' }}>
      <Badge status="default" text="未响应" />
    </span>
    <p className={styles.textSecondary} style={{ marginTop: 8 }} >耗时：2小时25分钟</p>
  </div>
);

const customDot = (dot, { status }) => (status === 'process' ?
  <Popover content={popoverContent}>
    {dot}
  </Popover>
  : dot
);

const operationTabList = [{
  key: 'tab1',
  tab: '操作日志一',
}, {
  key: 'tab2',
  tab: '操作日志二',
}, {
  key: 'tab3',
  tab: '操作日志三',
}];

const columns = [{
  title: '操作类型',
  dataIndex: 'type',
  key: 'type',
}, {
  title: '操作人',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '执行结果',
  dataIndex: 'status',
  key: 'status',
  render: text => (
    text === 'agree' ? <Badge status="success" text="成功" /> : <Badge status="error" text="驳回" />
  ),
}, {
  title: '操作时间',
  dataIndex: 'updatedAt',
  key: 'updatedAt',
}, {
  title: '备注',
  dataIndex: 'memo',
  key: 'memo',
}];

class Profile extends Component {
  state = {
    operationkey: 'tab1',
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetch',
    });
  }

  onOperationTabChange = (key) => {
    this.setState({ operationkey: key });
  }

  render() {
    const { profile } = this.props;
    const { loading, operation1, operation2, operation3 } = profile;
    const contentList = {
      tab1: <Table
        pagination={false}
        loading={loading}
        dataSource={operation1}
        columns={columns}
      />,
      tab2: <Table
        pagination={false}
        loading={loading}
        dataSource={operation2}
        columns={columns}
      />,
      tab3: <Table
        pagination={false}
        loading={loading}
        dataSource={operation3}
        columns={columns}
      />,
    };

    return (
      <PageHeaderLayout
        title="单号：234231029431"
        logo={<img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/JcBAEvlHGhVvBekIJCWT.svg" />}
        action={action}
        content={description}
        extraContent={extra}
        tabList={tabList}
      >
        <Card noHovering title="流程进度" className={styles.card} bordered={false}>
          <Steps progressDot={customDot} current={1}>
            <Step title="创建项目" description={desc1} />
            <Step title="部门初审" description={desc2} />
            <Step title="财务复核" />
            <Step title="完成" />
          </Steps>
        </Card>
        <Card noHovering title="用户信息" className={styles.card} bordered={false}>
          <DescriptionList>
            <Term>用户姓名</Term>
            <Description>付小小</Description>
            <Term>会员卡号</Term>
            <Description>32943898021309809423</Description>
            <Term>身份证</Term>
            <Description>3321944288191034921</Description>
            <Term>联系方式</Term>
            <Description>18322193472</Description>
            <Term>联系地址</Term>
            <Description>曲丽丽  18100000000  浙江省杭州市西湖区黄姑山路工专路交叉路口</Description>
          </DescriptionList>
          <DescriptionList style={{ marginBottom: 8 }} title="信息组" col="2">
            <Term>某某数据</Term>
            <Description>725</Description>
            <Term>该数据更新时间</Term>
            <Description>2017-08-08</Description>
            <Term>某某数据 <Tooltip title="数据说明"><Icon type="info-circle-o" /></Tooltip></Term>
            <Description>725</Description>
            <Term>该数据更新时间</Term>
            <Description>2017-08-08</Description>
          </DescriptionList>
          <Card noHovering type="inner" title="多层级信息组">
            <DescriptionList title="组名称">
              <Term>负责人</Term>
              <Description>林东东</Description>
              <Term>角色码</Term>
              <Description>1234567</Description>
              <Term>所属部门</Term>
              <Description>XX公司 - YY部</Description>
              <Term>过期时间</Term>
              <Description>2017-08-08</Description>
              <Term>描述</Term>
              <Description>这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</Description>
            </DescriptionList>
            <div className={styles.divider} />
            <DescriptionList title="组名称" col="1">
              <Term>学名</Term>
              <Description>
                Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
              </Description>
            </DescriptionList>
            <div className={styles.divider} />
            <DescriptionList title="组名称">
              <Term>负责人</Term>
              <Description>付小小</Description>
              <Term>角色码</Term>
              <Description>1234568</Description>
            </DescriptionList>
          </Card>
        </Card>
        <Card noHovering title="用户近半年来电记录" className={styles.card} bordered={false}>
          <div className={styles.noData}>
            <Icon type="frown-o" /> 暂无数据
          </div>
        </Card>
        <Card
          noHovering
          className={styles.tabsCard}
          bordered={false}
          tabList={operationTabList}
          onTabChange={this.onOperationTabChange}
        >
          {contentList[this.state.operationkey]}
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  profile: state.profile,
}))(Profile);

