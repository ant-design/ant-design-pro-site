import React from 'react';
import './404.css';

export default () => (
  <div className="exception">
    <div className="imgBlock">
      <div
        className="imgEle"
        style={{
          backgroundImage:
            "url('https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg')",
        }}
      />
    </div>
    <div className="content">
      <h1>404</h1>
      <div className="desc">Sorry, the page you visited does not exist</div>
      <div className="actions">
        <a href="/">
          <span>Back to home</span>
        </a>
      </div>
    </div>
  </div>
);
