import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col, Badge } from 'antd';
import * as utils from '../utils';

class Footer extends React.Component {
  handleLangChange = () => {
    const { pathname } = this.props.location;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname))
      );
  };

  render() {
    const { pathname } = this.props.location;
    const isZhCN = utils.isZhCN(pathname);
    return (
      <footer id="footer">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.resources" />
                </h2>
                <div>
                  <a href="http://ant.design">Ant Design</a>
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
                  <a href="https://ng.mobile.ant.design/">NG-ZORRO-MOBILE</a>
                </div>
                <div>
                  <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                    <FormattedMessage id="app.footer.awesome" />
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://kitchen.alipay.com">
                    Kitchen
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.kitchen" />
                </div>
                <div>
                  <Badge dot offset={[3, 0]}>
                    <a target="_blank" rel="noopener noreferrer" href="http://landing.ant.design">
                      Ant Design Landing
                    </a>
                    <span> - </span>
                    <FormattedMessage id="app.footer.landing" />
                  </Badge>
                </div>
                <div>
                  <a href="http://scaffold.ant.design">Scaffolds</a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.scaffolds" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva">
                    dva
                  </a>{' '}
                  - <FormattedMessage id="app.footer.dva" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://motion.ant.design">
                    Ant Motion
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.motion" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://library.ant.design/">
                    Axure Library
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.antd-library" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://ux.ant.design">
                    Ant UX
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.antux" />
                </div>
                <div>
                  <a target="_blank " href="https://ant-design-pro.gitee.io/">
                    <FormattedMessage id="app.footer.chinamirror" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.community" />
                </h2>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://zhuanlan.zhihu.com/antdesign"
                  >
                    <FormattedMessage id="app.footer.zhihu" />
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://medium.com/ant-design/">
                    Medium
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://twitter.com/antdesignui"
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://zhuanlan.zhihu.com/xtech"
                  >
                    <FormattedMessage id="app.footer.zhihu.xtech" />
                  </a>
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://seeconf.alipay.com/">
                    SEE Conf
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.seeconf" />
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.help" />
                </h2>
                <div>
                  <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                    GitHub
                  </a>
                </div>
                <div>
                  <a href="/docs/changelog">
                    <FormattedMessage id="app.footer.change-log" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ant-design/ant-design/wiki/FAQ"
                  >
                    <FormattedMessage id="app.footer.faq" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://gitter.im/ant-design/ant-design-pro"
                  >
                    <FormattedMessage id="app.footer.discuss-cn" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/ant-design/ant-design/issues"
                  >
                    <FormattedMessage id="app.footer.issues" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://stackoverflow.com/questions/tagged/antd"
                  >
                    <FormattedMessage id="app.footer.stackoverflow" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://segmentfault.com/t/antd"
                  >
                    <FormattedMessage id="app.footer.segmentfault" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img
                    className="title-icon"
                    src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                    alt="AFX Cloud"
                  />
                  <FormattedMessage id="app.footer.more-product" />
                </h2>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://yuque.com/">
                    <FormattedMessage id="app.footer.yuque" />
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.yuque.slogan" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://yunfengdie.com/">
                    <FormattedMessage id="app.footer.fengdie" />
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.fengdie.slogan" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://antv.alipay.com/">
                    AntV
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.data-vis" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">
                    Egg
                  </a>
                  <span> - </span>
                  <FormattedMessage id="app.footer.eggjs" />
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://xcloud.alipay.com/">
                    <FormattedMessage id="app.footer.xcloud" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by
          <a target="_blank" rel="noopener noreferrer" href="https://yuque.com/afx/blog">
            <FormattedMessage id="app.footer.company" />
          </a>
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
