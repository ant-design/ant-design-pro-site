import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Let’s <span>Pro</span></h2>
        <OverPack>
          <QueueAnim type="bottom" leaveReverse>
            <p key="p" className="page-content">
              推荐使用 npm 或 yarn 的方式进行开发不仅可在开发环境轻松调试，
              也可放心地在生产环境打包部署使用,享受整个生态圈和工具链带来的诸多好处
            </p>
            <div key="code1" className="home-code">
              $ <span>npm install</span> antd --save
            </div>
            <div key="code2" className="home-code">
              $ yarn add antd
            </div>
            <p key="p2" className="page-content cnpm-text">
              如果网络环境不佳，推荐使用 <span>cnpm</span>
            </p>
            <div key="button">
              <Button type="primary">Pro 下载</Button>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
