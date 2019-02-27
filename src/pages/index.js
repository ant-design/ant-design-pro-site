import React from 'react';
import Media from 'react-media';

import Home from '../components/Home';
import WrapperLayout from '../components/layout';

const IndexPage = props => {
  const isNode = typeof window === `undefined`;
  return (
    <WrapperLayout {...props}>
      <Media query="(max-width: 599px)">
        {isMobile => <Home {...props} isMobile={isMobile && !isNode} />}
      </Media>
    </WrapperLayout>
  );
};

export default IndexPage;
