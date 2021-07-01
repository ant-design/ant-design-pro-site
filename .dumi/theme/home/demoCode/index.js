import React from 'react';
import { Link } from 'dumi';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import * as utils from '../../utils';
import './index.less';
function Page2({ location }) {
  const isZhCN = utils.isZhCN(location?.pathname);
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <h2>
          Let’s <span> Pro </span>
        </h2>
        <p key="p" className="page-content">
          <FormattedMessage id="app.home.letspro" />
        </p>
        <div key="code1" className="home-code">
          <div>$ yarn create umi my-app</div>

          {/* Select Pro */}
          <br />
          <div>
            {' '}
            Select the boilerplate type:{' '}
            <span className="home-code-comment">
              <FormattedMessage id="app.home.selectpro" />
            </span>
          </div>
          <div>
            <span className="home-code-selection">❯</span> ant-design-pro{' '}
          </div>

          {/* Select TypeScript */}
          <br />
          <div>
            {' '}
            Which language do you want to use?{' '}
            <span className="home-code-comment">
              <FormattedMessage id="app.home.selectlanguage" />
            </span>
          </div>
          <div>
            <span className="home-code-selection">❯</span> TypeScript
          </div>
          <div>
            <span className="home-code-selection" /> JavaScript
          </div>

          {/* Start */}
          <br />
          <div>$ cd my-app</div>
          <div>$ yarn</div>
          <div>
            $ yarn start{' '}
            <span className="home-code-comment">
              # <FormattedMessage id="app.home.openbrowser" /> http://localhost:8000
            </span>
          </div>
        </div>
        <p key="p2" className="page-content">
          <FormattedMessage
            id="app.home.needhelp"
            values={{
              docs: (
                <Link to={utils.getLocalizedPathname('/docs/getting-started', isZhCN)}>
                  <FormattedMessage id="app.home.docs" />
                </Link>
              ),
              faq: (
                <Link to={utils.getLocalizedPathname('/docs/faq', isZhCN)}>
                  <FormattedMessage id="app.home.faq" />
                </Link>
              ),
              ask: (
                <a href="https://github.com/ant-design/ant-design-pro/issues">
                  <FormattedMessage id="app.home.ask" />
                </a>
              ),
            }}
          />
        </p>
        <div key="button" style={{ marginTop: 88 }}>
          <a
            href="http://github.com/ant-design/ant-design-pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary">
              <FormattedMessage id="app.home.download" />
              <span
                style={{
                  marginLeft: 8,
                }}
              >
                Pro
              </span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page2;
