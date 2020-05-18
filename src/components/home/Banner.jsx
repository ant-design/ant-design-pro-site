import React from 'react';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import BannerSVGAnim from './BannerSVGAnim';
import { isZhCN, getLocalizedPathname } from '../utils';

function Banner(props) {
  const { isMobile, location } = props;
  return (
    <div className="banner-wrapper">
      <div className='banner-top-image'>
        {isMobile && (
          <TweenOne animation={{ opacity: 1, type: 'to' }} className="banner-image-wrapper banner-svg-img">
            <div className="home-banner-image" key="home-banner-image">
              <img
                alt="banner"
                src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
                width="100%"
                key="banner-svg-img"
              />
            </div>
          </TweenOne>
        )}
      </div>
      <div className='banner-text'>
        <QueueAnim className="banner-title-wrapper" type={isMobile ? 'bottom' : 'right'}>
          <div key="line" className="title-line-wrapper">
            <div className="title-line" style={{ transform: 'translateX(-64px)' }} />
          </div>
          <h1 key="h1">ANT DESIGN PRO</h1>
          <p key="content">
            <FormattedMessage id="app.home.slogan" />
          </p>
          <div key="button" className="button-wrapper">
            <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer">
              <Button type="primary">
                <FormattedMessage id="app.home.preview" />
              </Button>
            </a>
            <Link to={getLocalizedPathname('/docs/getting-started', isZhCN(location.pathname))}>
              <Button style={{ margin: '0 16px' }} type="primary" ghost>
                <FormattedMessage id="app.home.start" />
              </Button>
            </Link>
            <GitHubButton
              key="github-button"
              type="stargazers"
              namespace="ant-design"
              repo="ant-design-pro"
            />
          </div>
        </QueueAnim>
      </div>
      <div className='banner-bottom-img'>
        {!isMobile && (
          <TweenOne animation={{ opacity: 1, type: 'to' }} className="banner-image-wrapper banner-svg-anim" key='banner-bottom-img'>
            <BannerSVGAnim key="banner-svg" />
          </TweenOne>
        )}
      </div>
    </div>
  );
}

export default Banner;
