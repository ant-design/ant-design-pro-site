import React from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import styles from './index.less';

export default ({ className, type, title, description, extra, actions, ...restProps }) => {
  let icon;
  switch (type) {
    case 'error': icon = <Icon className={styles.error} type="close-circle" />;
      break;
    case 'success': icon = <Icon className={styles.success} type="check-circle" />;
      break;
    default: icon = null;
  }
  const clsString = classNames(styles.result, className);
  return (
    <div className={clsString} {...restProps}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
      {extra && <div className={styles.extra}>{extra}</div>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
};
