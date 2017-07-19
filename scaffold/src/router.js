import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import navData from './common/nav';

function getRoutes(data, level = 0) {
  return data.map((item, i) => {
    let children;
    if (item.children) {
      children = getRoutes(item.children, level + 1);
    }
    const componentProps = {};
    if ('pageHeader' in item) {
      componentProps.components = {
        header: item.pageHeader,
        main: item.component,
      };
    } else {
      componentProps.component = item.component;
    }
    let homePageRedirect;
    if (level === 1 && i === 0) {
      let indexPath;
      // First children router
      if (item.children && item.children[0]) {
        indexPath = `/${item.path}/${item.children[0].path}`;
      } else {
        indexPath = item.path;
      }
      homePageRedirect = <Redirect from="/" to={indexPath} />;
    }
    return (
      <Route
        key={item.key || item.path || ''}
        path={item.path}
        breadcrumbName={item.name}
        {...componentProps}
      >
        {homePageRedirect}
        {children}
      </Route>
    );
  });
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {getRoutes(navData)}
    </Router>
  );
}

export default RouterConfig;
