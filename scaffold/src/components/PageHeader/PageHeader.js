import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'dva/router';
import styles from './PageHeader.less';

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
      <Breadcrumb routes={routes} params={params} itemRender={itemRender} />
      <h1>{title}</h1>
    </div>
  );
};
