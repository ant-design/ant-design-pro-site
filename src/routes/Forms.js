import React from 'react';
import { connect } from 'dva';
import { Breadcrumb } from 'antd';

function Forms(props) {
  const { routes, params } = props;
  return (
    <div>
      <h1>基础表单</h1>
      <Breadcrumb routes={routes} params={params} />
    </div>
  );
}

export default connect()(Forms);
