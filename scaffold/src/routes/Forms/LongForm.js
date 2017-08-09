import React from 'react';
import { Card, Button, Table, Icon, Form } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FooterToolbar from '../../components/FooterToolbar';
import MultipleColForm from './MultipleColForm';
import styles from './style.less';

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
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
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

function LongForm() {
  return (
    <PageHeaderLayout
      title="长表单"
      content="在后台页面中，大批量的数据修改和提交是很常见的情况。"
    >
      <Card title="分组表单" className={styles.card} bordered={false}>
        <MultipleColForm />
      </Card>
      <Card title="成员管理" className={styles.card} bordered={false}>
        <Table columns={columns} dataSource={data} />
      </Card>
      <Card title="审批员管理" className={styles.card} bordered={false} style={{ marginBottom: 84 }}>
        <Table columns={columns} dataSource={data} />
      </Card>
      <FooterToolbar>
        <Button>取消</Button>
        <Button type="primary">提交</Button>
      </FooterToolbar>
    </PageHeaderLayout>
  );
}

export default Form.create()(LongForm);
