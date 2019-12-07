import React from 'react';
import { injectIntl } from 'react-intl';
import { Helmet } from 'react-helmet';

import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';

function Home(props) {
  const { intl } = props;
  return (
    <>
      <Helmet>
        <title>{`Ant Design Pro - ${intl.formatMessage({
          id: 'app.home.slogan',
        })}`}</title>
        <meta
          name="description"
          content={`Ant Design Pro - ${intl.formatMessage({
            id: 'app.home.slogan',
          })}`}
        />
      </Helmet>
      <div className="home-wrapper">
        <Banner {...props} />
        <Page1 {...props} />
        <Page2 {...props} />
      </div>
    </>
  );
}

export default injectIntl(Home);
