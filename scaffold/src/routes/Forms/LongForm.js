import React from 'react';
import { Card, Button } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FooterToolbar from '../../components/FooterToolbar';
import MultipleColForm from './MultipleColForm';
import styles from './style.less';

function LongForm() {
  return (
    <PageHeaderLayout
      title="长表单"
      content="在后台页面中，大批量的数据修改和提交是很常见的情况。"
    >
      <Card title="分组表单" className={styles.card} bordered={false}>
        <MultipleColForm />
      </Card>
      <Card title="成员管理" className={styles.card} bordered={false}>
        ...
      </Card>
      <Card title="审批员管理" className={styles.card} bordered={false} style={{ marginBottom: 84 }}>
        ...
      </Card>
      <FooterToolbar>
        <Button>取消</Button>
        <Button type="primary">提交</Button>
      </FooterToolbar>
    </PageHeaderLayout>
  );
}

export default LongForm;
