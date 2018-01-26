import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'bisheng/router';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import * as utils from '../utils';

function Page2() {
  const isZhCN = utils.isZhCN(location.pathname);
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Let’s <span>Pro</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              <FormattedMessage id="app.home.letspro" />
            </p>
            <div key="code1" className="home-code">
              <div>$ <span>git clone</span> git@github.com:ant-design/ant-design-pro.git --depth=1</div>
              <div>$ cd ant-design-pro</div>
              <div>$ npm install</div>
              <div>
                $ npm start <span className="home-code-comment">{'#'} <FormattedMessage id="app.home.openbrowser" /> http://localhost:8000</span>
              </div>
            </div>
            <p key="p2" className="page-content">
              <FormattedMessage
                id="app.home.needhelp"
                values={{
                  docs: <Link to={utils.getLocalizedPathname('/docs/getting-started', isZhCN)}><FormattedMessage id="app.home.docs" /></Link>,
                  faq: <Link to={utils.getLocalizedPathname('/docs/faq', isZhCN)}><FormattedMessage id="app.home.faq" /></Link>,
                  ask: <a href="https://github.com/ant-design/ant-design-pro/issues"><FormattedMessage id="app.home.ask" /></a>,
                }}
              />
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <a href="http://github.com/ant-design/ant-design-pro" target="_blank" rel="noopener noreferrer">
                <Button type="primary"><FormattedMessage id="app.home.download" /> Pro</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
