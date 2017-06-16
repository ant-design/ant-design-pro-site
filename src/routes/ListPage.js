import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

function ListPage(props) {
  const { routes, params } = props;
  return (
    <div>
      <h1>列表页</h1>
      <Breadcrumb routes={routes} params={params} />
    </div>
  );
}

export default connect()(ListPage);
