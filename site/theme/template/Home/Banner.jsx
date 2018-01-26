import React from 'react';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import BannerSVGAnim from './component/BannerSVGAnim';
import * as utils from '../utils';

function Banner(props) {
  const isZhCN = utils.isZhCN(location.pathname);
  return (
    <div className="banner-wrapper">
      {props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <div className="home-banner-image">
            <img alt="banner"
              src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
              width="100%"
            />
          </div>
        </TweenOne>
      )}
      <QueueAnim className="banner-title-wrapper" type={props.isMobile ? 'bottom' : 'right'}>
        <div key="line" className="title-line-wrapper">
          <div className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
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
          <Link to={utils.getLocalizedPathname('/docs/getting-started', isZhCN)}>
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
      {!props.isMobile && (
        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
          <BannerSVGAnim />
        </TweenOne>
      )}
    </div>
  );
}

export default Banner;
