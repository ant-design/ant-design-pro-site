import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Table, Icon } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="">Delete</a>
      <span className="ant-divider" />
      <a href="" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

function Dashboard() {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Card bordered={false}>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false}>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card bordered={false}>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={24}>
          <Card
            title="业务表格"
            bordered={false}
            extra={<Icon type="setting" />}
          >
            <Table dataSource={data} columns={columns} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default connect()(Dashboard);
