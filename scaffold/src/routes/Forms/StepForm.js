import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Steps, Form, Input, Button } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';

const Step = Steps.Step;

class StepForm extends Component {
  state = {
    current: 0,
  }
  next = () => {
    this.setState({
      current: this.state.current + 1,
    });
  }
  render() {
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
            <Steps current={this.state.current}>
              <Step title="填写转账信息" />
              <Step title="确认转账信息" />
              <Step title="完成" />
            </Steps>
            {this.state.current === 0 ? (
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
                    wrapperCol={{ offset: 6 }}
                    label=""
                  >
                    <Button type="primary" onClick={this.next}>
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
            ) : null}
            {this.state.current === 1 ? (
              <div>111</div>
            ) : null}
            {this.state.current === 2 ? (
              <div>222</div>
            ) : null}
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect()(StepForm);
