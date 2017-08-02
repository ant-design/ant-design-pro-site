import React from 'react';
import { Form, Input, Button, Alert } from 'antd';
import styles from './style.less';

export default ({ formItemLayout, onPrev, onNext }) => {
  return (
    <Form mode="horizontal" className={styles.stepForm}>
      <Alert
        showIcon
        message="确认转账后，资金将直接打入对方账户，无法退回。"
        style={{ marginBottom: 24 }}
      />
      <Form.Item
        {...formItemLayout}
        label="付款账户"
      >
        AntDesign@example.com
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label="收款账户"
      >
        XXXX XXXX XXXX XXXX 某银行储蓄卡
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label="收款人姓名"
      >
        张三
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        label="转账金额"
      >
        50,000.00
      </Form.Item>
      <hr className={styles.divider} />
      <Form.Item
        {...formItemLayout}
        label="支付密码"
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        wrapperCol={{ offset: 5 }}
        label=""
      >
        <Button type="primary" onClick={onNext}>
          提交
        </Button>
        <Button onClick={onPrev} style={{ marginLeft: 8 }}>
          上一步
        </Button>
      </Form.Item>
    </Form>
  );
};
