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
            <div className={styles.wrapper}>
              {item.avatar ? <Avatar className={styles.avatar} src={item.avatar} /> : null}
              <div className={styles.content}>
                <h4 className={styles.title} title={item.title}>{item.title}</h4>
                <div className={styles.description} title={item.description}>
                  {item.description}
                </div>
                <div className={styles.datetime}>{item.datetime}</div>
                <div className={styles.extra}>{item.extra}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
