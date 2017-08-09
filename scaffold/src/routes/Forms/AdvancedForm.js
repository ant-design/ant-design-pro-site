import React from 'react';
import { Card, Button, Table, Form, Icon, Col, Row, DatePicker, Input, Select, Popover } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FooterToolbar from '../../components/FooterToolbar';
import styles from './style.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

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
  render: () => (
    <span>Action</span>
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

const fieldLabels = {
  name: '仓库管理',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '仓库管理',
  url2: '仓库域名',
  owner2: '仓库管理员',
  approver2: '审批人',
  dateRange2: '生效日期',
  type2: '仓库类型',
};

function AdvancedForm({ form }) {
  const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form;
  const validate = () => {
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        // submit the values
        // eslint-disable-next-line
        console.log(values);
      }
    });
  };
  const errors = getFieldsError();
  const getErrorInfo = () => {
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = (fieldKey) => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = Object.keys(errors).map((key) => {
      if (!errors[key]) {
        return null;
      }
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="cross-circle-o" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errors[key][0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <Popover
        title="表单校验信息"
        content={errorList}
        overlayClassName={styles.errorPopover}
        trigger="click"
        getPopupContainer={trigger => trigger.parentNode}
      >
        <span className={styles.errorIcon}>
          <Icon type="exclamation-circle" />
          {errorCount}
        </span>
      </Popover>
    );
  };
  return (
    <PageHeaderLayout
      title="高级表单"
      content="在后台页面中，大批量的数据修改和提交是很常见的情况。"
    >
      <Card title="仓库管理" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label={fieldLabels.name}>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入仓库名称' }],
                })(
                  <Input placeholder="请输入仓库名称" />
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label={fieldLabels.url}>
                {getFieldDecorator('url', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Input addonBefore="http://" addonAfter=".com" placeholder="请输入" />
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label={fieldLabels.owner}>
                {getFieldDecorator('owner', {
                  rules: [{ required: true, message: '请选择管理员' }],
                })(
                  <Select placeholder="请选择管理员">
                    <Option value="xiao">付晓晓</Option>
                    <Option value="mao">周毛毛</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label={fieldLabels.approver}>
                {getFieldDecorator('approver', {
                  rules: [{ required: true, message: '请选择审批员' }],
                })(
                  <Select placeholder="请选择审批员">
                    <Option value="xiao">付晓晓</Option>
                    <Option value="mao">周毛毛</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label={fieldLabels.dateRange}>
                {getFieldDecorator('dateRange', {
                  rules: [{ required: true, message: '请选择生效日期' }],
                })(
                  <RangePicker placeholder={['开始日期', '结束日期']} />
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label={fieldLabels.type}>
                {getFieldDecorator('type', {
                  rules: [{ required: true, message: '请选择仓库类型' }],
                })(
                  <Select placeholder="请选择仓库类型">
                    <Option value="private">私密</Option>
                    <Option value="public">公开</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card title="XX 管理" className={styles.card} bordered={false}>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label={fieldLabels.name2}>
                {getFieldDecorator('name2', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" />
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label={fieldLabels.url2}>
                {getFieldDecorator('url2', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Input placeholder="请输入" />
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label={fieldLabels.owner2}>
                {getFieldDecorator('owner2', {
                  rules: [{ required: true, message: '请选择管理员' }],
                })(
                  <Select placeholder="请选择管理员">
                    <Option value="xiao">付晓晓</Option>
                    <Option value="mao">周毛毛</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item label={fieldLabels.approver2}>
                {getFieldDecorator('approver2', {
                  rules: [{ required: true, message: '请选择审批员' }],
                })(
                  <Select placeholder="请选择审批员">
                    <Option value="xiao">付晓晓</Option>
                    <Option value="mao">周毛毛</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label={fieldLabels.dateRange2}>
                {getFieldDecorator('dateRange2', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <RangePicker placeholder={['开始日期', '结束日期']} />
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label={fieldLabels.type2}>
                {getFieldDecorator('type2', {
                  rules: [{ required: true, message: '请选择仓库类型' }],
                })(
                  <Select placeholder="请选择仓库类型">
                    <Option value="private">私密</Option>
                    <Option value="public">公开</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card title="成员管理" className={styles.card} bordered={false} style={{ marginBottom: 84 }}>
        <Table columns={columns} dataSource={data} />
      </Card>
      <FooterToolbar>
        {getErrorInfo()}
        <Button size="large">取消</Button>
        <Button type="primary" size="large" onClick={validate}>提交</Button>
      </FooterToolbar>
    </PageHeaderLayout>
  );
}

export default Form.create()(AdvancedForm);
