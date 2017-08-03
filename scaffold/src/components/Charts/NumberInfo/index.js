import React from 'react';
import { Icon } from 'antd';

import styles from './index.less';

export default ({ title, subTitle, total, subTotal, status, ...rest }) => (
  <div className={styles.numberInfo} {...rest}>
    {
      title && <h4>{title}</h4>
    }
    <h6>{subTitle}</h6>
    <div>
      <span>{total}</span>
      {
        (status || subTotal) && <span className={styles.subTotal}>
          {
            status && <Icon type={`caret-${status}`} />
          }
          {subTotal}
        </span>
      }
    </div>
  </div>
);
