/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Badge, Row, Col, Menu, Icon } from 'antd';
import classNames from 'classnames';
import MobileMenu from 'rc-drawer-menu';
import Article from './Article';
import ComponentDoc from './ComponentDoc';
import { isZhCN, getMenuItems } from '../utils';

const { SubMenu } = Menu;

function getActiveMenuItem(props) {
  const { pathname } = props.location;
  return pathname;
}

function getModuleDataWithProps(props) {
  const moduleData = props.menuList;
  const excludedSuffix = isZhCN(props.location.pathname) ? 'zh-CN' : 'en-US';
  return moduleData.filter(({ filename }) => {
    if (!filename) {
      return false;
    }
    if (!filename.includes('zh-CN') && !filename.includes('en-US')) {
      return true;
    }
    return filename.includes(excludedSuffix);
  });
}

function isNotTopLevel(level) {
  return level !== 'topLevel';
}

export default class MainContent extends React.PureComponent {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      openKeys: this.getSideBarOpenKeys(props) || [],
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentWillReceiveProps(nextProps) {
    const openKeys = this.getSideBarOpenKeys(nextProps);
    if (openKeys) {
      this.setState({
        openKeys,
      });
    }
  }

  componentDidUpdate() {
    if (!window.location.hash) {
      return;
    }
    const element = document.getElementById(
      decodeURIComponent(window.location.hash.replace('#', ''))
    );
    setTimeout(() => {
      if (element) {
        element.scrollIntoView(true);
      }
    }, 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleMenuOpenChange = openKeys => {
    this.setState({
      openKeys,
    });
  };

  getSideBarOpenKeys(nextProps) {
    const pathname = nextProps.location.pathname;
    const prevModule = this.currentModule;
    this.currentModule = pathname.replace(/^\//).split('/')[1] || 'components';
    if (this.currentModule === 'react') {
      this.currentModule = 'components';
    }
    const locale = isZhCN(pathname) ? 'zh-CN' : 'en-US';
    if (prevModule !== this.currentModule) {
      const moduleData = getModuleDataWithProps(nextProps);
      const shouldOpenKeys = Object.keys(getMenuItems(moduleData, locale));
      return shouldOpenKeys;
    }
  }

  convertFilename = filename => {
    const {
      location: { pathname },
    } = this.props;
    if (isZhCN(pathname) && !filename.includes('-cn')) {
      return `${filename}-cn`;
    }
    return filename;
  };

  generateMenuItem = ({ before = null, after = null }, item) => {
    if (!item.title) {
      return;
    }
    const {
      intl: { locale },
    } = this.context;
    const text = [
      <span key="english">{item.title[locale] || item.title}</span>,
      <span className="chinese" key="chinese">
        {locale === 'zh-CN' && item.subtitle}
      </span>,
    ];

    const disabled = item.disabled;

    const child = !item.link ? (
      <Link to={this.convertFilename(item.filename)} disabled={disabled}>
        {before}
        {text}
        {after}
      </Link>
    ) : (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        disabled={disabled}
        className="menu-item-link-outside"
      >
        {before}
        {text} <Icon type="export" />
        {after}
      </a>
    );
    return (
      <Menu.Item key={this.convertFilename(item.filename)} disabled={disabled}>
        {item.important ? <Badge dot={item.important}>{child}</Badge> : child}
      </Menu.Item>
    );
  };

  generateSubMenuItems = (obj, footerNavIcons = {}) => {
    if (!obj) return [];
    const topLevel = (obj.topLevel || []).map(this.generateMenuItem.bind(this, footerNavIcons));
    const itemGroups = Object.keys(obj)
      .filter(isNotTopLevel)
      .map(type => {
        const groupItems = obj[type]
          .sort((a, b) => {
            if ('order' in a && 'order' in b) {
              return a.order - b.order;
            }
            return a.title.charCodeAt(0) - b.title.charCodeAt(0);
          })
          .map(this.generateMenuItem.bind(this, footerNavIcons));
        return (
          <Menu.ItemGroup title={type} key={type}>
            {groupItems}
          </Menu.ItemGroup>
        );
      });
    return [...topLevel, ...itemGroups];
  };

  getMenuItems = (footerNavIcons = {}) => {
    const moduleData = getModuleDataWithProps(this.props);
    const {
      intl: { locale },
    } = this.context;
    const menuItems = getMenuItems(moduleData, locale) || {};
    let topLevel = {};
    if (menuItems.topLevel) {
      topLevel = this.generateSubMenuItems(menuItems.topLevel, footerNavIcons);
    }

    const subMenu = Object.keys(menuItems)
      .filter(isNotTopLevel)
      .map(category => {
        const subMenuItems = this.generateSubMenuItems(menuItems[category], footerNavIcons);
        return (
          <SubMenu title={<h4>{category}</h4>} key={category}>
            {subMenuItems}
          </SubMenu>
        );
      });
    const result = [...topLevel, ...subMenu].filter(({ key }) => key);
    return result;
  };

  getPreAndNext = menuItems => {
    const {
      localizedPageData: {
        meta: { filename },
      },
    } = this.props;

    const list =
      menuItems.length && !menuItems[0].props.children.length
        ? menuItems
        : Object.keys(menuItems).reduce((pre, key) => {
            return pre.concat(menuItems[key].props.children);
          }, []);
    const index = list.findIndex(item => {
      return item.key === filename || item.key === `${filename}-cn`;
    });

    if (index === -1) {
      return {};
    }
    return {
      prev: list[index - 1],
      next: list[index + 1],
    };
  };

  render() {
    const { localizedPageData, demos, isMobile } = this.props;

    const activeMenuItem = getActiveMenuItem(this.props);
    const menuItems = this.getMenuItems();
    const { prev, next } = this.getPreAndNext(menuItems);
    const mainContainerClass = classNames('main-container', {
      'main-container-component': !!demos,
    });
    const { openKeys } = this.state;
    const menuChild = (
      <Menu
        inlineIndent="54"
        className="aside-container"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={[activeMenuItem]}
        onOpenChange={this.handleMenuOpenChange}
      >
        {menuItems}
      </Menu>
    );
    return (
      <div className="main-wrapper">
        <Row>
          {isMobile ? (
            <MobileMenu
              iconChild={[<Icon type="menu-unfold" />, <Icon type="menu-fold" />]}
              key="mobile-menu"
              wrapperClassName="drawer-wrapper"
            >
              {menuChild}
            </MobileMenu>
          ) : (
            <Col xxl={4} xl={5} lg={6} md={24} sm={24} xs={24} className="main-menu">
              {menuChild}
            </Col>
          )}
          <Col xxl={20} xl={19} lg={18} md={24} sm={24} xs={24}>
            <div className={mainContainerClass}>
              {demos ? (
                <ComponentDoc {...this.props} doc={localizedPageData} demos={demos} />
              ) : (
                <Article {...this.props} content={localizedPageData} />
              )}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 20, offset: 4 }} md={24} sm={24} xs={24}>
            <section className="prev-next-nav">
              {prev ? (
                <a className="prev-page">
                  <Icon className="footer-nav-icon-before" type="left" />
                  {prev.props.children}
                </a>
              ) : null}
              {next ? (
                <a className="next-page">
                  {next.props.children}
                  <Icon className="footer-nav-icon-after" type="right" />
                </a>
              ) : null}
            </section>
          </Col>
        </Row>
      </div>
    );
  }
}
