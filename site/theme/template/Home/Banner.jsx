import React from 'react';
import GitHubButton from 'react-github-button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Button } from 'antd';

function Banner() {
  return (
    <div className="banner-wrapper">
      <QueueAnim className="banner-title-wrapper">
        <div key="line" className="title-line-wrapper">
          <div className="title-line"
            style={{ transform: 'translateX(-64px)' }}
          />
        </div>
        <h1 key="h1">ANT DESIGN PRO</h1>
        <p key="content">开箱即用的中台前端/设计解决方案</p>
        <div key="button" className="button-wrapper">
          <a href="http://pro.ant.design" target="_blank" rel="noopener noreferrer">
            <Button type="primary">预览</Button>
          </a>
          <a href="/docs/getting-started" target="_blank">
            <Button style={{ margin: '0 16px' }} type="primary" ghost>开始使用</Button>
          </a>
          <GitHubButton
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          />
        </div>
      </QueueAnim>
      <TweenOne
        className="banner-image-wrapper"
        animation={{ opacity: 0, x: 30, type: 'from', delay: 200, ease: 'easeOutQuad' }}
      >
        <img
          alt="banner"
          src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
          width="520"
        />
      </TweenOne>
    </div>
  );
}

export default Banner;
