import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return (last || !route.component)
    ? <span>{route.breadcrumbName}</span>
    : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
}

export default class PageHeader extends Component {
  static contextTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
  }
  getBreadcrumbProps() {
    return {
      routes: this.props.routes || this.context.routes,
      params: this.props.params || this.context.params,
    };
  }
  render() {
    const { routes, params } = this.getBreadcrumbProps();
    const { title, children } = this.props;
    const defaultTitle = routes[routes.length - 1].breadcrumbName;
    return (
      <div>
        <div className={styles.pageHeader}>
          <Breadcrumb routes={routes} params={params} itemRender={itemRender} />
          <h1>{title || defaultTitle}</h1>
        </div>
        {children ? <div className={styles.content}>{children}</div> : null}
      </div>
    );
  }
}
