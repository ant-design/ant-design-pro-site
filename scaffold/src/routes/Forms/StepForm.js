import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

function StepForm() {
  return (
    <PageHeaderLayout>
      <Card bordered={false}>
        ...
      </Card>
    </PageHeaderLayout>
  );
}

export default connect()(StepForm);
