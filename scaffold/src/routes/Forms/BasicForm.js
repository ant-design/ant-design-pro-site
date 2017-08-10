import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import StandardForm from './StandardForm';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

function BasicForms() {
  return (
    <PageHeaderLayout title="基础表单" content="表单页是向后台提交数据的标准场景。">
      <Card bordered={false} noHovering>
        <StandardForm />
      </Card>
    </PageHeaderLayout>
  );
}

export default connect()(BasicForms);
