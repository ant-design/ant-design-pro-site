import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

function getChild(children, type) {
  if (Array.isArray(children)) {
    return children.find(child => child.type && child.type[type]) || null;
  } else if (typeof children === 'object') {
    return children.type && children.type[type] ? children : null;
  }
  return null;
}

export default ({ title, logo, action, content, extraContent, children, className }) => {
  const breadcrumb = getChild(children, '__ANT_PRO_PAGEHEADER_BREADCRUMB');
  const tabs = getChild(children, '__ANT_PRO_PAGEHEADER_TABS');
  const clsString = classNames(styles.pageHeader, className);
  return (
    <div className={clsString}>
      { breadcrumb }
      <div className={styles.detail}>
        {logo && <div className={styles.logo}>{logo}</div>}
        <div className={styles.main}>
          <div className={styles.row}>
            {title && <div className={styles.title}>{title}</div>}
            {action && <div className={styles.action}>{action}</div>}
          </div>
          <div className={styles.row}>
            {content && <div className={styles.content}>{content}</div>}
            {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
          </div>
        </div>
      </div>
      { tabs }
    </div>
  );
};
