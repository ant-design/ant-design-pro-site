import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Row, Col, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker } from 'antd';
import StandardTable from '../../components/StandardTable';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './TableList.less';

const FormItem = Form.Item;
const Option = Select.Option;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

class TableList extends Component {

  state = {
    expandForm: false,
    selectedRows: [],
    formValues: {},
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'rule/fetch',
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'rule/fetch',
      payload: params,
    });
  }

  handleFormReset = () => {
    this.props.form.resetFields();
  }

  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm,
    });
  }

  handleMenuClick = (e) => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;

    if (!selectedRows) return;

    switch (e.key) {
      case 'remove':
        dispatch({
          type: 'rule/remove',
          payload: {
            no: selectedRows.map(row => row.no).join(','),
          },
          callback: () => {
            this.setState({
              selectedRows: [],
            });
          },
        });
        break;
      default:
        break;
    }
  }

  handleSelectRow = (rows) => {
    this.setState({
      selectedRows: rows,
    });
  }

  handleSearch = (e) => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'rule/fetch',
        payload: values,
      });
    });
  }

  render() {
    const { rule: { loading: ruleLoading, data }, form: { getFieldDecorator } } = this.props;
    const { selectedRows } = this.state;

    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="remove">删除</Menu.Item>
      </Menu>
    );

    return (
      <PageHeaderLayout title="标准表格">
        <Card noHovering>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <Form onSubmit={this.handleSearch}>
                <Row>
                  <Col span={8}>
                    <FormItem {...formItemLayout} label="规则编号">
                      {getFieldDecorator('no')(
                        <Input placeholder="请输入" />
                      )}
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem {...formItemLayout} label="状态">
                      {getFieldDecorator('status')(
                        <Select placeholder="请选择" style={{ width: '100%' }}>
                          <Option value="0">关闭</Option>
                          <Option value="1">运行中</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <div className={styles.formButton}>
                      <Button type="primary" htmlType="submit">查询</Button>
                      <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                      <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggleForm}>
                        {this.state.expandForm ? '收起' : '展开'} <Icon type={this.state.expandForm ? 'up' : 'down'} />
                      </a>
                    </div>
                  </Col>
                </Row>
                {
                  this.state.expandForm && <Row>
                    <Col span={8}>
                      <FormItem {...formItemLayout} label="更新时间">
                        {getFieldDecorator('updatedAt')(
                          <DatePicker style={{ width: '100%' }} />
                        )}
                      </FormItem>
                    </Col>
                    <Col span={8}>
                      <FormItem {...formItemLayout} label="调用次数">
                        {getFieldDecorator('callNo')(
                          <InputNumber
                            prefix={<Icon type="right" />}
                            placeholder="请输入"
                          />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                }
              </Form>
            </div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary">新建</Button>
              <Button>批量操作</Button>
              <Dropdown overlay={menu}>
                <Button>
                  更多操作 <Icon type="down" />
                </Button>
              </Dropdown>
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={ruleLoading}
              data={data}
              onSelectRow={this.handleSelectRow}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  rule: state.rule,
}))(Form.create()(TableList));
