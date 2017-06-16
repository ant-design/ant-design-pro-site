import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

function Profile(props) {
  const { routes, params } = props;
  return (
    <div>
      <h1>详情页</h1>
      <Breadcrumb routes={routes} params={params} />
    </div>
  );
}

export default connect()(Profile);
