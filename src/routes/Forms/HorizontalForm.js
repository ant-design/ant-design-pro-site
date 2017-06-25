import React, { Component } from 'react';
import { Form, Tooltip, Icon, Input, Button, Select, Row, Col } from 'antd';

const { Option } = Select;

class HorizontalForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // eslint-disable-next-line
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit} hideRequiredMark>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={
                <span>
                  输入框&nbsp;
                  <Tooltip title="帮助信息">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('input', {
                rules: [{ required: true, message: '请输入' }],
              })(
                <Input placeholder="请输入" style={{ width: 180 }} />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="单项选择器">
              {getFieldDecorator('select', {
                rules: [{ required: true, message: '请选择' }],
              })(
                <Select placeholder="请选择" style={{ width: 180 }}>
                  <Option value="1">选项一</Option>
                  <Option value="2">选项二</Option>
                  <Option value="3">选项三</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button style={{ marginLeft: 8 }}>取消</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(HorizontalForm);
