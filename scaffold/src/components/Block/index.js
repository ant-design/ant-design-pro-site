import React from 'react';
import styles from './index.less';

export default (props) => {
  const { extraContent, children, title, ...other } = props;

  return (
    <div
      className={styles.block}
      {...other}
    >
      <div className={styles.header}>
        <h3>{title}</h3>
        {
          extraContent && <div className={styles.extraContent}>
            { extraContent }
          </div>
        }
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};
