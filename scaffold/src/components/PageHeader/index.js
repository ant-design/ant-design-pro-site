import React from 'react';
import { Breadcrumb, Tabs } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return (last || !route.component)
    ? <span>{route.breadcrumbName}</span>
    : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

export default ({ routes, params, title, children }) => {
  if (children === null) {
    return children;
  }
  return (
    <div className={styles.pageHeader}>
      <Tabs>
        <Tabs.TabPane tab="test">1</Tabs.TabPane>
      </Tabs>
      <Breadcrumb routes={routes} params={params} itemRender={itemRender} />
      <h1>{title}</h1>
    </div>
  );
};
