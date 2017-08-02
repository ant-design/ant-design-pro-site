import React from 'react';
import { Form, Input, Button } from 'antd';
import styles from './style.less';

export default ({ formItemLayout, onNext }) => {
  return (
    <div>
      <Form mode="horizontal" className={styles.stepForm}>
        <Form.Item
          {...formItemLayout}
          label="付款账户"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="收款账户"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="收款人姓名"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="转账金额"
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 5 }}
          label=""
        >
          <Button type="primary" onClick={onNext}>
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
