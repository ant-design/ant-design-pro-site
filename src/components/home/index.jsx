import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';

import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';

function Home(props) {
  const { intl } = props;
  return (
    <DocumentTitle
      title={`Ant Design Pro - ${intl.formatMessage({
        id: 'app.home.slogan',
      })}`}
    >
      <div className="home-wrapper">
        <Banner {...props} />
        <Page1 {...props} />
        <Page2 {...props} />
      </div>
    </DocumentTitle>
  );
}

export default injectIntl(Home);
