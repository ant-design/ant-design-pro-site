import React from 'react';
import { Card, Button } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import FooterToolbar from '../../components/FooterToolbar';

function LongForm() {
  return (
    <PageHeaderLayout title="长表单" content="在后台页面中，大批量的数据修改和提交是很常见的情况。">
      <Card bordered={false}>
        111
      </Card>
      <FooterToolbar>
        <Button>取消</Button>
        <Button type="primary">提交</Button>
      </FooterToolbar>
    </PageHeaderLayout>
  );
}

export default LongForm;
