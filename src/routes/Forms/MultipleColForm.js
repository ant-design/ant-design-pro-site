import React, { Component } from 'react';
import { Form, Tooltip, Icon, Input, Select, Row, Col } from 'antd';
import styles from './style.less';

const { Option } = Select;

class MultipleColForm extends Component {
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
      <div>
        <h3 className={styles.heading}>复杂表单</h3>
        <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
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
                {getFieldDecorator('complex-input', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('complex-select', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Select placeholder="请选择" style={{ width: '80%' }}>
                    <Option value="1">选项一</Option>
                    <Option value="2">选项二</Option>
                    <Option value="3">选项三</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('complex-input2', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
          </Row>
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
                {getFieldDecorator('complex-input3', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('complex-select2', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Select placeholder="请选择" style={{ width: '80%' }}>
                    <Option value="1">选项一</Option>
                    <Option value="2">选项二</Option>
                    <Option value="3">选项三</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('complex-input4', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <hr className={styles.divider} />
        <h3 className={styles.heading}>结构表单</h3>
        <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
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
                {getFieldDecorator('other-input', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('other-select', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Select placeholder="请选择" style={{ width: '80%' }}>
                    <Option value="1">选项一</Option>
                    <Option value="2">选项二</Option>
                    <Option value="3">选项三</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('other-input2', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
          </Row>
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
                {getFieldDecorator('other-input3', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('other-select2', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Select placeholder="请选择" style={{ width: '80%' }}>
                    <Option value="1">选项一</Option>
                    <Option value="2">选项二</Option>
                    <Option value="3">选项三</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('other-input4', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" style={{ width: '80%' }} />,
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(MultipleColForm);
