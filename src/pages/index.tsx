import React from 'react';
import Media from 'react-media';
// @ts-ignore
import Home from '../components/home';
import type { LayoutProps } from '../components/layout';
import WrapperLayout from '../components/layout';

const IndexPage: React.FC<LayoutProps> = (props) => {
  const isNode = typeof window === 'undefined';
  return (
    <WrapperLayout {...props}>
      <Media query="(max-width: 599px)">
        {(isMobile) => <Home {...props} isMobile={isMobile && !isNode} />}
      </Media>
    </WrapperLayout>
  );
};

export default IndexPage;
