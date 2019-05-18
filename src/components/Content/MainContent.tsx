/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Badge, Row, Col, Menu, Icon } from 'antd';
import classNames from 'classnames';
import MobileMenu from 'rc-drawer-menu';
import Article from './Article';
import { isZhCN, getMenuItems, MenuDataItem, IMenuData } from '../utils';
import { IFrontmatterData } from '../../templates/docs';

const { SubMenu } = Menu;

export interface MainContentProps {
  isMobile: boolean;
  location: {
    pathname: string;
  };
  menuList: MenuDataItem[];
  localizedPageData: {
    meta: IFrontmatterData;
    toc: string | false;
    content: string;
  };
}

interface MainContentState {
  openKeys: string[];
}

function getActiveMenuItem(props: MainContentProps) {
  const { pathname } = props.location;
  if (pathname.endsWith('/')) {
    return pathname.substring(0, pathname.length - 1);
  }
  return pathname;
}

function getModuleDataWithProps(props: MainContentProps) {
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

function isNotTopLevel(level: string) {
  return level !== 'topLevel';
}

export default class MainContent extends React.PureComponent<MainContentProps, MainContentState> {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  };

  constructor(props: MainContentProps) {
    super(props);
    this.state = {
      openKeys: this.getSideBarOpenKeys(props) || [],
    };
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentWillReceiveProps(nextProps: MainContentProps) {
    const openKeys = this.getSideBarOpenKeys(nextProps);
    if (openKeys) {
      this.setState({
        openKeys,
      });
    }
  }
  timer: number;
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

  handleMenuOpenChange = (openKeys: string[]) => {
    this.setState({
      openKeys,
    });
  };
  currentModule: string;
  getSideBarOpenKeys(nextProps: MainContentProps) {
    const { pathname } = nextProps.location;
    const moduleData = getModuleDataWithProps(nextProps);
    const item = moduleData.find(({ slug }) => pathname.includes(slug));
    if (item) {
      return [item.type];
    }
    return [];
  }

  convertFilename = (filename: string) => {
    const {
      location: { pathname },
    } = this.props;
    if (isZhCN(pathname) && !filename.includes('-cn')) {
      return `${filename}-cn`;
    }
    return filename;
  };

  generateMenuItem = ({ before = null, after = null }, item: MenuDataItem) => {
    if (!item.title) {
      return;
    }
    const {
      intl: { locale },
    } = this.context as {
      intl: {
        locale: 'zh-CN' | 'en-US';
      };
    };
    const text = [
      <span key="english">{item.title[locale] || item.title}</span>,
      <span className="chinese" key="chinese">
        {locale === 'zh-CN' && item.subtitle}
      </span>,
    ];

    const disabled = item.disabled;

    const child = !item.link ? (
      <Link to={this.convertFilename(item.filename)}>
        {before}
        {text}
        {after}
      </Link>
    ) : (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
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

  generateSubMenuItems = (obj?: IMenuData, footerNavIcons = {}) => {
    const {
      intl: { locale },
    } = this.context as {
      intl: {
        locale: 'zh-CN' | 'en-US';
      };
    };
    if (!obj) return [];
    const topLevel = ((obj.topLevel as MenuDataItem[]) || []).map(
      this.generateMenuItem.bind(this, footerNavIcons)
    );
    const itemGroups = Object.keys(obj)
      .filter(isNotTopLevel)
      .map(type => {
        const groupItems = (obj[type] as MenuDataItem[])
          .sort((a, b) => {
            if ('order' in a && 'order' in b) {
              return a.order - b.order;
            }
            return a.title[locale].charCodeAt(0) - b.title[locale].charCodeAt(0);
          })
          .map(this.generateMenuItem.bind(this, footerNavIcons));
        return (
          <SubMenu title={type} key={type}>
            {groupItems}
          </SubMenu>
        );
      });
    return [...topLevel, ...itemGroups];
  };

  getMenuItems = (footerNavIcons = {}) => {
    const moduleData = getModuleDataWithProps(this.props);
    const {
      intl: { locale },
    } = this.context;
    const menuItems: IMenuData = getMenuItems(moduleData, locale) || {};
    let topLevel =
      this.generateSubMenuItems(menuItems['topLevel'] as IMenuData, footerNavIcons) || [];

    const result = [...topLevel].filter(({ key }) => key);
    return result;
  };

  getPreAndNext = (menuItems: any) => {
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
    const index = list.findIndex((item: { key: string }) => {
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
    const { localizedPageData, isMobile } = this.props;

    const activeMenuItem = getActiveMenuItem(this.props);
    const menuItems = this.getMenuItems();
    const { prev, next } = this.getPreAndNext(menuItems);
    const mainContainerClass = classNames('main-container', {});
    const { openKeys } = this.state;
    const menuChild = (
      <Menu
        inlineIndent={16}
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
              <Article {...this.props} content={localizedPageData} />
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
