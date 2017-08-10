import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import styles from './UserLayout.less';

class UserLayout extends React.PureComponent {
  static childContextTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
  }
  getChildContext() {
    const { routes, params } = this.props;
    return { routes, params };
  }
  getPageTitle() {
    const { routes } = this.props;
    for (let i = routes.length - 1; i >= 0; i -= 1) {
      if (routes[i].breadcrumbName) {
        return `${routes[i].breadcrumbName} - Ant Design Pro`;
      }
    }
    return 'Ant Design Pro';
  }
  render() {
    const { children } = this.props;

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.header}>
              <img alt="" className={styles.logo} src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
              <span className={styles.title}>Ant Design</span>
            </div>
            <p className={styles.desc}>Ant Design 是东半球最具影响力的 Web 设计规范</p>
          </div>
          {children}
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
