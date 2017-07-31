import React from 'react';

import styles from './index.less';

export default ({ title, children, last, ...rest }) => (
  <div className={last ? styles.standardFormRowLast : styles.standardFormRow} {...rest}>
    {
      title && <div className={styles.label}>
        <span>{title}</span>
      </div>
    }
    <div className={styles.content}>
      {children}
    </div>
  </div>
);
