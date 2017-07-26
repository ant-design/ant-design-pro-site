import React from 'react';
import { Breadcrumb } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export default class PageHedaerBreadcrumb extends React.Component {
  static __ANT_PRO_PAGEHEADER_BREADCRUMB = true;

  render() {
    const clsString = classNames(styles.breadcrumb, this.props.className);
    return (
      <Breadcrumb {...this.props} className={clsString} />
    );
  }
}

