import React from 'react';
import { Button, Input } from 'antd';

import styles from './index.less';

export default ({ onSearch = () => ({}), text = '搜索', ...reset }) => (
  <div className={styles.search}>
    <Input
      style={{ width: 522 }}
      placeholder="请输入"
      size="large"
      {...reset}
      addonAfter={<Button onClick={onSearch} style={{ width: 86 }} type="primary">{text}</Button>}
    />
  </div>
);
