import React from 'react';
import { Router, Route } from 'dva/router';
import Dashboard from './routes/Dashboard';
import BasicLayout from './layouts/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route component={BasicLayout}>
        <Route path="/" component={Dashboard} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
