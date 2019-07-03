import React from 'react';
import Media from 'react-media';

import Home from '../components/home';
import WrapperLayout, { LayoutProps } from '../components/layout';

const IndexPage: React.FC<LayoutProps> = props => {
  const isNode = typeof window === 'undefined';
  return (
    <WrapperLayout {...props}>
      <Media query="(max-width: 599px)">
        {isMobile => <Home {...props} isMobile={isMobile && !isNode} />}
      </Media>
    </WrapperLayout>
  );
};

export default IndexPage;
