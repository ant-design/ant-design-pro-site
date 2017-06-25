import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import HorizontalForm from './HorizontalForm';
import MultipleColForm from './MultipleColForm';
import StandardForm from './StandardForm';
import styles from './style.less';

function BasicForms() {
  return (
    <div>
      <Card title="横向表单" className={styles.card}>
        <HorizontalForm />
      </Card>
      <Card title="分组表单" className={styles.card}>
        <MultipleColForm />
      </Card>
      <Card title="标准表单" className={styles.card}>
        <StandardForm />
      </Card>
    </div>
  );
}

export default connect()(BasicForms);
