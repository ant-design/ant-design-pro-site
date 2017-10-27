import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal, Row, Col } from 'antd';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.lessLoaded = false;
  }

  infoNewVersion() {
    const { messages } = this.props.intl;
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img src="https://os.alipayobjects.com/rmsportal/nyqBompsynAQCpJ.svg" alt="Ant Design" />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="/changelog">antd@2.0.0</a>
            {messages['app.publish.intro']}
            {messages['app.publish.old-version-guide']}
            <a target="_blank" rel="noopener noreferrer" href="http://1x.ant.design">1x.ant.design</a>
            {messages['app.publish.old-version-tips']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('antd@2.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  render() {
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Ant Design</h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                    Ant Design Pro GitHub
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design">
                    Ant Design
                  </a>
                </div>
                <div>
                  <a href="http://mobile.ant.design">Ant Design Mobile</a>
                </div>
                <div>
                  <a href="http://ng.ant.design">NG-ZORRO</a>
                  <span> - </span>
                  Ant Design of Angular
                </div>
                <div>
                  <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                    <FormattedMessage id="app.footer.awesome" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.resources" /></h2>
                <div>
                  <a href="http://scaffold.ant.design">Scaffolds</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.scaffolds" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">Ant Motion</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.motion" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">AntD Library</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.antd-library" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">Ant UX</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.antux" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">dva</a> -
                  <FormattedMessage id="app.footer.dva" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-cli">dva-cli</a> -
                  <FormattedMessage id="app.footer.dev-tools" />
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.community" /></h2>
                <div>
                  <a href="/docs/history">
                    <FormattedMessage id="app.footer.change-log" />
                  </a>
                </div>
                <div>
                  <a href="/docs/faq">
                    <FormattedMessage id="app.footer.faq" />
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://gitter.im/ant-design/ant-design-pro">
                    <FormattedMessage id="app.footer.discuss-cn" />
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design-pro/issues">
                    <FormattedMessage id="app.footer.issues" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img
                    className="footer-flag"
                    alt="more"
                    src="https://gw.alipayobjects.com/zos/rmsportal/iqWcVtKrlvzylbcQGApv.svg"
                  />
                  <FormattedMessage id="app.footer.more-product" />
                </h2>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.eggjs" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">AntV</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.data-vis" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          <p>
            <span
              style={{ lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)' }}
            >
              隐私权政策
            </span>
            <span style={{ marginRight: 24 }}>权益保障承诺书</span>
            <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
            <span style={{ marginRight: 12 }}>Copyright © 蚂蚁金融服务集团</span>
            {/*
             <span><img className="footer-logo" src="https://gw.alipayobjects.com/zos/rmsportal/xAXLpIvVcjtarsXkXgUy.svg"
             alt="logo" /></span>
            */}
          </p>
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
