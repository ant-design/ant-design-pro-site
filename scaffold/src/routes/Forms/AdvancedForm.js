import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import HorizontalForm from './HorizontalForm';
import MultipleColForm from './MultipleColForm';
import StandardForm from './StandardForm';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './style.less';

function AdvancedForm() {
  return (
    <PageHeaderLayout>
      <Card title="横向表单" className={styles.card} bordered={false}>
        <HorizontalForm />
      </Card>
      <Card title="分组表单" className={styles.card} bordered={false}>
        <MultipleColForm />
      </Card>
      <Card title="标准表单" className={styles.card} bordered={false}>
        <StandardForm />
      </Card>
    </PageHeaderLayout>
  );
}

export default connect()(AdvancedForm);
