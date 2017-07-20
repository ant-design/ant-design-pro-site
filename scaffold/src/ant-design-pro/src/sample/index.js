import React from 'react';
import './index.less';

const Sample = ({ children }) => (
  <div className="plus-sample">
    {children || '示例业务组件'}
  </div>
);

Sample.propTypes = {
};

export default Sample;
