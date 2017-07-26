import React from 'react';
import styles from './index.less';


function getChild(children, type) {
  if (Array.isArray(children)) {
    return children.find(child => child.type && child.type[type]) || null;
  } else if (typeof children === 'object') {
    return children.type && children.type[type] ? children : null;
  }
  return null;
}

export default ({ title, logo, action, content, extraContent, children }) => {
  const breadcrumb = getChild(children, '__ANT_PRO_PAGEHEADER_BREADCRUMB');
  const tabs = getChild(children, '__ANT_PRO_PAGEHEADER_TABS');
  return (
    <div className={styles.pageHeader}>
      { breadcrumb }
      <div className={styles.row}>
        {logo && <div className={styles.logo}>logo</div>}
        <div className={styles.main}>
          <div className={styles.row}>
            {title && <div className={styles.title}>title</div>}
            {action && <div className={styles.action}>action</div>}
          </div>
          <div className={styles.row}>
            {content && <div className={styles.content}>content</div>}
            {extraContent && <div className={styles.extraContent}>extra</div>}
          </div>
        </div>
      </div>
      { tabs }
    </div>
  );
};
