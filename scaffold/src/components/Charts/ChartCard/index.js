import React, { Component } from 'react';
import { Card } from 'antd';

import styles from './index.less';

class ChartCard extends Component {
  render() {
    const { contentHeight, title, action, total, footer, children, ...rest } = this.props;

    return (
      <Card
        bodyStyle={{ padding: '20px 24px 8px 24px' }}
        {...rest}
      >
        <div className={styles.chartCard}>
          <div className={styles.meta}>
            <span className={styles.title}>{title}</span>
            <span className={styles.action}>{action}</span>
          </div>
          {
            total && <p className={styles.total} dangerouslySetInnerHTML={{ __html: total }} />
          }
          <div className={styles.content} style={{ height: contentHeight || 'auto' }}>
            <div className={contentHeight && styles.contentFixed}>
              {children}
            </div>
          </div>
          {
            footer && <div className={styles.footer}>
              {footer}
            </div>
          }
        </div>
      </Card>
    );
  }
}

export default ChartCard;
