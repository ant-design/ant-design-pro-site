import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './style.less';

const Option = Select.Option;

export default ({ formItemLayout, form, dispatch }) => {
  const { getFieldDecorator, validateFields } = form;
  const onValidateForm = () => {
    validateFields((err) => {
      if (!err) {
        dispatch(routerRedux.push('/form/step-form/confirm'));
      }
    });
  };
  return (
    <div>
      <Form layout="horizontal" className={styles.stepForm} hideRequiredMark>
        <Form.Item
          {...formItemLayout}
          label="付款账户"
        >
          {getFieldDecorator('payAccount', {
            rules: [{ required: true, message: '请选择付款账户' }],
          })(
            <Select placeholder="test@example.com">
              <Option value="ant-design@alipay.com">ant-design@alipay.com</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="收款账户"
        >
          {getFieldDecorator('receiverAccount', {
            rules: [
              { required: true, message: '请输入收款人账户' },
              { type: 'email', message: '账户名应为邮箱格式' },
            ],
          })(
            <Input placeholder="test@example.com" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="收款人姓名"
        >
          {getFieldDecorator('receiverName', {
            rules: [{ required: true, message: '请输入收款人姓名' }],
          })(
            <Input placeholder="请输入收款人姓名" />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="转账金额"
        >
          {getFieldDecorator('amount', {
            rules: [
              { required: true, message: '请输入转账金额' },
              { pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法金额数字' },
            ],
          })(
            <Input prefix="￥" />
          )}
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: formItemLayout.labelCol.span }}
          label=""
        >
          <Button type="primary" onClick={onValidateForm}>
            下一步
          </Button>
        </Form.Item>
      </Form>
      <hr className={styles.divider} />
      <div className={styles.desc}>
        <h3>说明</h3>
        <h4>转账到支付宝账户</h4>
        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
        <h4>转账到银行卡</h4>
        <p>如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。</p>
      </div>
    </div>
  );
};
