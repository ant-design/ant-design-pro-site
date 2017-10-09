import React from 'react';
import { Link } from 'bisheng/router';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

function Home(props) {
  return (
    <DocumentTitle title={`Ant Design - ${props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
      <div style={{ textAlign: 'center', padding: '16px' }}>
        hello antd pro
        <ul>
          <li>
            <Link to="">home</Link>
          </li>
          <li>
            <Link to="/components/PageHeader">components</Link>
          </li>
          <li>
            <Link to="/docs/getting-started">docs</Link>
          </li>
        </ul>
      </div>
    </DocumentTitle>
  );
}

export default injectIntl(Home);
