import React from 'react';
import { Breadcrumb } from 'antd';

export default class PageHedaerBreadcrumb extends React.Component {
  static __ANT_PRO_PAGEHEADER_BREADCRUMB = true;

  render() {
    return (
      <Breadcrumb {...this.props} />
    );
  }
}

