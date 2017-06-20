import React from 'react';
import { Router, Route } from 'dva/router';
import navData from './common/nav';

function getRoutes(data) {
  return data.map((item) => {
    let children;
    if (item.children) {
      children = getRoutes(item.children);
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
    return (
      <Route
        key={item.path || ''}
        path={item.path}
        breadcrumbName={item.name}
        {...componentProps}
      >
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
