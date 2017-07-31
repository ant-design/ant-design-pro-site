import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import StandardForm from './StandardForm';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

function BasicForms() {
  return (
    <PageHeaderLayout>
      <Card bordered={false} noHovering>
        <StandardForm />
      </Card>
    </PageHeaderLayout>
  );
}

export default connect()(BasicForms);
