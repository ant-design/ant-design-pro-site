import React from 'react';
import { Icon } from 'antd';

import styles from './index.less';

export default ({ title, total, subTotal, status }) => (
  <div className={styles.numberInfo}>
    <h6>{title}</h6>
    <div>
      <span>{total}</span>
      <span>
        {
          status && <Icon type={`caret-${status}`} />
        }
        {subTotal}
      </span>
    </div>
  </div>
);
