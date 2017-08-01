import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

function LongForm() {
  return (
    <PageHeaderLayout title="长表单">
      <Card bordered={false}>
        ...
      </Card>
    </PageHeaderLayout>
  );
}

export default connect()(LongForm);
