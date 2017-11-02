import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'dva/router';
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
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              命令行运行下列命令，快速启动开发服务：
            </p>
            <div key="code1" className="home-code">
              <div>$ <span>git clone</span> git@github.com:ant-design/ant-design-pro.git --depth=1</div>
              <div>$ cd ant-design-pro</div>
              <div>$ npm install</div>
              <div>
                $ npm start <span className="home-code-comment">{'//'} 打开浏览器访问 http://localhost:8000</span>
              </div>
            </div>
            <p key="p2" className="page-content">
              需要帮助？请先阅读 <Link to="/docs/getting-started">开发文档</Link> 和 <Link to="/docs/faq">常见问题</Link>，
              如果未能解决，可以到 GitHub 上 <a href="https://github.com/ant-design/ant-design-pro/issues">进行提问</a>。
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <a href="http://github.com/ant-design/ant-design-pro" target="_blank" rel="noopener noreferrer">
                <Button type="primary">下载 Pro</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
