/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'gatsby';
import {
  ExportOutlined,
  LeftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Badge, Row, Col, Menu } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MobileMenu from 'rc-drawer-menu';
import Article from './Article';
import type { MenuDataItem, IMenuData } from '../utils';
import { isZhCN, getMenuItems } from '../utils';
import type { IFrontmatterData } from '../../templates/docs';
import Footer from '../layout/Footer';

export interface MainContentProps {
  isMobile: boolean;
  location: {
    pathname: string;
  };
  layout?: any;
  menuList?: MenuDataItem[];
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
  return (
    moduleData?.filter(({ filename }) => {
      if (!filename) {
        return false;
      }
      return filename.includes(excludedSuffix);
    }) || []
  );
}

function isNotTopLevel(level: string) {
  return level !== 'topLevel';
}

export default class MainContent extends React.PureComponent<MainContentProps, MainContentState> {
  timer: number;

  currentModule: string;

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

  UNSAVE_componentWillReceiveProps(nextProps: MainContentProps) {
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
      decodeURIComponent(window.location.hash.replace('#', '')),
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

  getSideBarOpenKeys = (nextProps: MainContentProps) => {
    const { pathname } = nextProps.location;
    const moduleData = getModuleDataWithProps(nextProps);
    const item = moduleData.find(({ slug }) => pathname.includes(slug));
    if (item) {
      return [item.type];
    }
    return [];
  };

  handleMenuOpenChange = (openKeys: string[]) => {
    this.setState({
      openKeys,
    });
  };

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
      return null;
    }
    const {
      intl: { locale },
    } = this.context as {
      intl: {
        locale: 'zh-CN' | 'en-US';
      };
    };
    const text = [
      <span key="english">{item.title}</span>,
      <span className="chinese" key="chinese">
        {locale === 'zh-CN' && item.subtitle}
      </span>,
    ];

    const { disabled } = item;

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
        {text} <ExportOutlined />
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
    if (!obj) {
      return [];
    }
    const topLevel = ((obj.topLevel as MenuDataItem[]) || []).map(
      this.generateMenuItem.bind(this, footerNavIcons),
    );

    const itemGroups = Object.keys(obj)
      .filter(isNotTopLevel)
      .map((type) => {
        const groupItems = (obj[type] as MenuDataItem[]).map(
          this.generateMenuItem.bind(this, footerNavIcons),
        );
        return (
          <Menu.ItemGroup title={type} key={type}>
            {groupItems}
          </Menu.ItemGroup>
        );
      });
    return [...topLevel, ...itemGroups];
  };

  getMenuItems = (footerNavIcons = {}) => {
    const {
      intl: { locale },
    } = this.context;
    const moduleData = getModuleDataWithProps(this.props);
    const menuItems: IMenuData = getMenuItems(moduleData, locale) || {};
    const topLevel =
      this.generateSubMenuItems((menuItems.topLevel as unknown) as IMenuData, footerNavIcons) || [];
    const result = [...topLevel].filter(({ key }) => key);
    return { dom: result, menuData: menuItems };
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
        : Object.keys(menuItems).reduce(
            (pre, key) => pre.concat(menuItems[key].props.children),
            [],
          );
    const index = list.findIndex(
      (item: { key: string }) => item.key === filename || item.key === `${filename}-cn`,
    );

    if (index === -1) {
      return {};
    }
    return {
      previous: list[index - 1],
      next: list[index + 1],
    };
  };

  render() {
    const { localizedPageData, isMobile } = this.props;

    const activeMenuItem = getActiveMenuItem(this.props);

    const { dom, menuData } = this.getMenuItems();
    const currentItem = this.getPreAndNext(dom);
    const { next, previous } = currentItem;
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
        {dom}
      </Menu>
    );

    const overviewData = {
      模板组件: [
        {
          title: 'ProLayout - 高级布局',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/hzEndUVEx/Layout.svg',
          slug: 'https://procomponents.ant.design/components/layout',
        },
        {
          title: 'ProForm - 高级表单',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/ORmcdeaoO/Form.svg',
          slug: 'https://procomponents.ant.design/components/form',
        },
        {
          title: 'ProTable - 高级表格',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/f-SbcX2Lx/Table.svg',
          slug: 'https://procomponents.ant.design/components/table',
        },
        {
          title: 'ProList - 高级列表',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/5FrZKStG_/List.svg',
          slug: 'https://procomponents.ant.design/components/list',
        },
        {
          title: 'ProDescriptions - 高级定义列表',
          cover: 'https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg',
          slug: 'https://procomponents.ant.design/components/descriptions',
        },
      ],
      ...menuData.topLevel,
    };

    return (
      <div className="main-wrapper">
        <Row>
          {isMobile ? (
            <MobileMenu
              iconChild={[<MenuUnfoldOutlined />, <MenuFoldOutlined />]}
              key="mobile-menu"
              wrapperClassName="drawer-wrapper"
            >
              {menuChild}
            </MobileMenu>
          ) : (
            <Col
              style={{
                position: 'fixed',
                top: '64px',
                left: 0,
                zIndex: 9,
                height: 'calc(100vh - 64px)',
                width: 274,
              }}
            >
              <div className="main-menu">{menuChild}</div>
            </Col>
          )}
          <Col
            xxl={20}
            xl={19}
            lg={18}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginLeft: 274,
            }}
          >
            <div className={mainContainerClass}>
              <Article {...this.props} content={localizedPageData} menuData={overviewData} />
            </div>
            <Row>
              <Col lg={{ span: 24 }} md={24} sm={24} xs={24}>
                <section className="prev-next-nav">
                  {previous ? (
                    <div className="prev-page">
                      <LeftOutlined className="footer-nav-icon-before" />
                      {previous.props.children}
                    </div>
                  ) : null}
                  {next ? (
                    <div className="next-page">
                      {next.props.children}
                      <RightOutlined className="footer-nav-icon-after" />
                    </div>
                  ) : null}
                </section>
              </Col>
            </Row>
            <Footer {...this.props.layout} />
          </Col>
        </Row>
      </div>
    );
  }
}
