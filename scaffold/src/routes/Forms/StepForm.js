import React, { cloneElement, PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Steps, Form } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import Step1 from './Steps/Step1';
import styles from './style.less';

const Step = Steps.Step;

@Form.create({
  onValuesChange(props, values) {
    props.dispatch({
      type: 'form/saveStepFormData',
      payload: values,
    });
  },
})
class StepForm extends PureComponent {
  getCurrentStep() {
    const { routes } = this.props;
    switch (routes[routes.length - 1].path) {
      case 'step-form': return 0;
      case 'confirm': return 1;
      case 'result': return 2;
      default: return 0;
    }
  }
  render() {
    const { form, stepFormData, dispatch, children } = this.props;
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
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="填写转账信息" />
              <Step title="确认转账信息" />
              <Step title="完成" />
            </Steps>
            {children ? cloneElement(children, {
              form,
              formItemLayout,
              data: stepFormData,
              dispatch,
            }) : (
              <Step1
                formItemLayout={formItemLayout}
                form={form}
                dispatch={dispatch}
              />
            )}
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  stepFormData: state.form.step,
}))(StepForm);
