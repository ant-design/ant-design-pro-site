import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Steps, Form, Input, Button, Alert } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';

const Step = Steps.Step;

class StepForm extends Component {
  state = {
    current: 0,
  }
  prev = () => {
    this.setState({
      current: this.state.current - 1,
    });
  }
  next = () => {
    this.setState({
      current: this.state.current + 1,
    });
  }
  submit = () => {
    this.next();
  }
  render() {
    const formItemLayout = {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
    };
    return (
      <PageHeaderLayout title="分步表单">
        <Card bordered={false}>
          <div>
            <Steps current={this.state.current} className={styles.steps}>
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
                    wrapperCol={{ offset: 5 }}
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
                  <Button type="primary" onClick={this.submit}>
                    提交
                  </Button>
                  <Button onClick={this.prev} style={{ marginLeft: 8 }}>
                    上一步
                  </Button>
                </Form.Item>
              </Form>
            ) : null}
            {this.state.current === 2 ? (
              <div>结果</div>
            ) : null}
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect()(StepForm);
