import React from 'react';
import { Router, Route } from 'dva/router';
import BasicLayout from './layouts/BasicLayout';
import Dashboard from './routes/Dashboard';
import ListPage from './routes/ListPage';
import Profile from './routes/Profile';
import Forms from './routes/Forms';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route component={BasicLayout} breadcrumbName="首页">
        <Route path="/" component={Dashboard} />
        <Route path="/patterns/forms" component={Forms} breadcrumbName="表单页" />
        <Route path="/patterns/list" component={ListPage} breadcrumbName="列表页" />
        <Route path="/patterns/profile" component={Profile} breadcrumbName="详情页" />
      </Route>
    </Router>
  );
}

export default RouterConfig;
