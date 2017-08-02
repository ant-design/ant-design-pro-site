import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Steps } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
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
  go = (current) => {
    this.setState({ current });
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
              <Step1 formItemLayout={formItemLayout} onNext={this.next} />
            ) : null}
            {this.state.current === 1 ? (
              <Step2 formItemLayout={formItemLayout} onPrev={this.prev} onNext={this.next} />
            ) : null}
            {this.state.current === 2 ? (
              <Step3 onNext={() => this.go(0)} />
            ) : null}
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect()(StepForm);
