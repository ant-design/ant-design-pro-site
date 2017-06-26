import React, { Component } from 'react';
import {
  Form, Tooltip, Icon, Input, Select, Row, Col, AutoComplete, Cascader,
  TreeSelect, DatePicker, InputNumber,
} from 'antd';
import styles from './style.less';

const { Option } = Select;
const { TreeNode } = TreeSelect;
const { RangePicker } = DatePicker;

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

    const options = [{
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
          value: 'xihu',
          label: 'West Lake',
        }],
      }],
    }, {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
          value: 'zhonghuamen',
          label: 'Zhong Hua Men',
        }],
      }],
    }];

    const selectBefore = (
      <Select defaultValue="Http://" style={{ width: 80 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
      </Select>
    );
    const selectAfter = (
      <Select defaultValue=".com" style={{ width: 70 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
      </Select>
    );

    return (
      <div>
        <h3 className={styles.heading}>复杂表单</h3>
        <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                label={
                  <span>
                    自动填充输入&nbsp;
                    <Tooltip title="帮助信息">
                      <Icon type="info-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator('complex-auto-complete', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <AutoComplete
                    dataSource={['提示一', '提示二', '提示三']}
                    placeholder="请输入"
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label="地区级联输入">
                {getFieldDecorator('complex-cascader', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Cascader
                    options={options}
                    placeholder="请输入"
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label="带搜索树选择">
                {getFieldDecorator('complex-tree-select', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <TreeSelect
                    showSearch
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                  >
                    <TreeNode value="parent 1" title="parent 1" key="0-1">
                      <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                        <TreeNode value="leaf1" title="my leaf" key="random" />
                        <TreeNode value="leaf2" title="your leaf" key="random1" />
                      </TreeNode>
                      <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
                      </TreeNode>
                    </TreeNode>
                  </TreeSelect>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
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
                {getFieldDecorator('complex-date-picker', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <DatePicker placeholder="请输入" style={{ width: '100%' }} />
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label="密码">
                {getFieldDecorator('complex-password', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input placeholder="请输入" type="password" />
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label="选择时间区间">
                {getFieldDecorator('complex-input4', {
                  rules: [{ required: true, message: '请选择日期' }],
                })(
                  <RangePicker showTime style={{ width: '100%' }} />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <hr className={styles.divider} />
        <h3 className={styles.heading}>结构表单</h3>
        <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
          <Row gutter={16}>
            <Col span={6}>
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
                {getFieldDecorator('other-input-number', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <InputNumber placeholder="请输入" style={{ width: 120 }} />
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label="卡号">
                {getFieldDecorator('other-input-group', {
                  rules: [{ required: true, message: '请选择' }],
                })(
                  <Input.Group>
                    <Col span={6}>
                      <Input defaultValue="12345" />
                    </Col>
                    <Col span={6}>
                      <Input defaultValue="12345" />
                    </Col>
                    <Col span={6}>
                      <Input />
                    </Col>
                    <Col span={6}>
                      <Input />
                    </Col>
                  </Input.Group>
                )}
              </Form.Item>
            </Col>
            <Col span={8} offset={2}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('other-input2', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input.Group>
                    <Col span={5}>
                      <Input defaultValue="086" />
                    </Col>
                    <Col span={1}>
                      -
                    </Col>
                    <Col span={18}>
                      <Input defaultValue="12345" />
                    </Col>
                  </Input.Group>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
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
                  <Input.Group compact>
                    <Select placeholder="公司" size="large" style={{ width: '30%' }}>
                      <Option value="Zhejiang">Zhejiang</Option>
                      <Option value="Jiangsu">Jiangsu</Option>
                    </Select>
                    <Input style={{ width: '70%' }} defaultValue="Xihu District, Hangzhou" />
                  </Input.Group>
                )}
              </Form.Item>
            </Col>
            <Col span={6} offset={2}>
              <Form.Item label="单项选择器">
                {getFieldDecorator('other-input4', {
                  rules: [{ required: true, message: '请输入' }],
                })(
                  <Input addonBefore={selectBefore} addonAfter={selectAfter} style={{ width: '100%' }} />
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
