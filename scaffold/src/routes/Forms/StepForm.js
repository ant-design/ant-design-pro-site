import React from 'react';
import { connect } from 'dva';
import { Card, Steps, Form, Input, Button } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';

const Step = Steps.Step;

function StepForm() {
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  return (
    <PageHeaderLayout title="分步表单">
      <Card bordered={false}>
        <div className={styles.stepContainer}>
          <Steps current={0}>
            <Step title="填写转账信息" />
            <Step title="确认转账信息" />
            <Step title="完成" />
          </Steps>
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
              wrapperCol={{ offset: 6 }}
              label=""
            >
              <Button type="primary">下一步</Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </PageHeaderLayout>
  );
}

export default connect()(StepForm);
