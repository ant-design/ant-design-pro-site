import React from 'react';
import { Avatar } from 'antd';
import classNames from 'classnames';
import styles from './NotificationList.less';

export default ({ data = [], onClick }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => {
        const itemCls = classNames(styles.item, {
          [styles.read]: item.read,
        });
        return (
          <li className={itemCls} key={item.key} onClick={() => onClick(item)}>
            <Avatar className={styles.avatar} src={item.avatar} />
            <div className={styles.content}>
              <h4 className={styles.title}>{item.title}</h4>
              <div className={styles.description}>{item.description}</div>
              <div className={styles.extra}>{item.extra}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
