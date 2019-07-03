import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'gatsby';
import { Row, Col, Icon, Select, Input, Menu, Button, Modal, Popover } from 'antd';
import * as utils from '../utils';

const { Option } = Select;

const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const key = 'antd-pro@2.0.0-notification-sent';

let docSearch: (config: any) => void;
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  docSearch = require('docsearch.js');
}

function initDocSearch(locale: 'zh-CN' | 'en-US') {
  if (!docSearch) {
    return;
  }
  const lang = locale === 'zh-CN' ? 'cn' : 'en';
  docSearch({
    apiKey: 'dfba5eddecb719460b9fd232af57748d',
    indexName: 'pro_ant_design',
    inputSelector: '#search-box input',
    algoliaOptions: { facetFilters: [`tags:${lang}`] },
    transformData(
      hits: {
        url: string;
      }[],
    ) {
      hits.forEach(hit => {
        // eslint-disable-next-line  no-param-reassign
        hit.url = hit.url.replace('ant.design.pro', window.location.host);
        // eslint-disable-next-line  no-param-reassign
        hit.url = hit.url.replace('https:', window.location.protocol);
      });
      return hits;
    },
    debug: false, // Set debug to true if you want to inspect the dropdown
  });
}

interface HeaderProps {
  isMobile: boolean;
  intl: any;
  location: {
    pathname: string;
  };
}
interface HeaderState {
  inputValue?: string;
  menuVisible: boolean;
  menuMode?: 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
  searchOption?: any[];
  searching?: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  state: HeaderState = {
    menuVisible: false,
    menuMode: 'horizontal',
  };

  searchInput: Input | null | undefined;

  timer: number;

  componentDidMount() {
    const { searchInput } = this;
    const { intl } = this.props;
    document.addEventListener('keyup', event => {
      if (event.keyCode === 83 && event.target === document.body) {
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
    initDocSearch(intl.locale);

    if (localStorage.getItem(key) !== 'true' && Date.now() < new Date('2018/9/5').getTime()) {
      this.infoNewVersion();
    }

    const {
      intl: { locale },
    } = this.props;
    initDocSearch(locale);
  }

  componentDidUpdate(preProps: HeaderProps) {
    const { isMobile } = this.props;
    if (isMobile !== preProps.isMobile) {
      this.setMenuMode(isMobile);
    }
  }

  setMenuMode = (isMobile: boolean) => {
    this.setState({ menuMode: isMobile ? 'inline' : 'horizontal' });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  onMenuVisibleChange = (visible: boolean) => {
    this.setState({
      menuVisible: visible,
    });
  };

  handleSelect = (value: string) => {
    window.location.href = value;
  };

  infoNewVersion = () => {
    const {
      intl: { formatMessage },
    } = this.props;
    Modal.info({
      title: formatMessage({ id: 'app.publish.title' }),
      content: (
        <div>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="Ant Design"
          />
          <p>
            {formatMessage({ id: 'app.publish.greeting' })}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={formatMessage({ id: 'app.publish.url' })}
            >
              Ant Desgin Pro {formatMessage({ id: 'app.publish.intro' })}
            </a>
            {formatMessage({ id: 'app.publish.tips' })}
            {formatMessage({ id: 'app.publish.old-version-guide' })}
            <a target="_blank" rel="noopener noreferrer" href="https://v1.pro.ant.design">
              v1.pro.ant.design
            </a>
            {formatMessage({ id: 'app.publish.old-version-tips' })}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem(key, 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  };

  handleLangChange = () => {
    const {
      location: { pathname },
    } = this.props;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
      );
  };

  onVersionChange = (value: string) => {
    if (value === 'v1') {
      window.open('https://v1.pro.ant.design/');
    }
    if (value === 'v2') {
      window.open('https://v2-pro.ant.design/');
    }
  };

  render() {
    const { menuMode, menuVisible } = this.state;
    const { location, intl } = this.props;
    const path = location.pathname;

    const module = location.pathname
      .replace(/(^\/|\/$)/g, '')
      .split('/')
      .slice(0, -1)
      .join('/');
    let activeMenuItem = module || 'home';
    if (/^blog/.test(path)) {
      activeMenuItem = 'blog';
    } else if (/docs/.test(path)) {
      activeMenuItem = 'docs';
    } else if (path === '/') {
      activeMenuItem = 'home';
    }

    const isZhCN = intl.locale === 'zh-CN';

    const menu = [
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={utils.getLocalizedPathname('/', isZhCN)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to={utils.getLocalizedPathname('/docs/getting-started', isZhCN)}>
            <FormattedMessage id="app.header.menu.docs" />
          </Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link to={utils.getLocalizedPathname('/blog/change-theme', isZhCN)}>Blog</Link>
        </Menu.Item>
        {menuMode === 'inline' && (
          <Menu.Item key="preview">
            <a target="_blank" href="http://preview.pro.ant.design/" rel="noopener noreferrer">
              <FormattedMessage id="app.home.preview" />
            </a>
          </Menu.Item>
        )}
      </Menu>,
    ];

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon className="nav-phone-icon" type="menu" onClick={this.handleShowMenu} />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <Link id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/tNoOLUAkyuGLXoZvaibF.svg"
                alt="Ant Design Pro"
              />
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Input
                ref={ref => {
                  this.searchInput = ref;
                }}
                placeholder={intl.formatMessage({ id: 'app.header.search' })}
              />
            </div>
            <div className="header-meta">
              <div className="right-header">
                <div id="lang">
                  <Button onClick={this.handleLangChange} size="small">
                    <FormattedMessage id="app.header.lang" />
                  </Button>
                </div>
                <div id="preview">
                  <a
                    id="preview-button"
                    target="_blank"
                    href="http://preview.pro.ant.design"
                    rel="noopener noreferrer"
                  >
                    <Button icon="eye-o" size="small">
                      <FormattedMessage id="app.home.preview" />
                    </Button>
                  </a>
                </div>
                <Select size="small" onChange={this.onVersionChange} value="stable">
                  <Option value="v1">v1</Option>
                  <Option value="v2">v2</Option>
                  <Option value="stable">v4</Option>
                </Select>
              </div>
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(Header);
