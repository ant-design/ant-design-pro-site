import React from 'react';
import { Layout, Menu, Icon, Tooltip, Avatar } from 'antd';
import DocumentTitle from 'react-document-title';
import { Link } from 'dva/router';
import styles from './BasicLayout.less';
import PageHeader from '../components/PageHeader/PageHeader';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';
import NotificationIcon from '../components/NotificationIcon/NotificationIcon';
import { menus } from '../common/nav';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  getDefaultCollapsedSubMenus() {
    const currentMenuSelectedKeys = [...this.getCurrentMenuSelectedKeys()];
    currentMenuSelectedKeys.splice(-1, 1);
    return currentMenuSelectedKeys;
  }
  getCurrentMenuSelectedKeys() {
    const { location: { pathname } } = this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return [menus[0].key];
    }
    return keys;
  }
  getNavMenuItems(menusData, parentPath = '') {
    return menusData.map((item) => {
      const itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </span>
            }
            key={item.key || item.path}
          >
            {this.getNavMenuItems(item.children, itemPath)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key || item.path}>
          <Link to={itemPath}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { routes, params, children, header, main } = this.props;
    const { collapsed } = this.state;
    const pageTitle = routes[routes.length - 1].breadcrumbName;

    return (
      <DocumentTitle title={`${pageTitle} - Ant Design Admin`}>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            breakpoint="md"
            onCollapse={this.onCollapse}
            style={{ minHeight: '100vh' }}
            width={272}
          >
            <div className={styles.logo}>
              <Link to="/">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/ElBVfakcgrgjarOUnuvx.svg" alt="logo" />
              </Link>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultOpenKeys={this.getDefaultCollapsedSubMenus()}
              defaultSelectedKeys={this.getCurrentMenuSelectedKeys()}
            >
              {this.getNavMenuItems(menus)}
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <Tooltip
                placement="bottom"
                title={collapsed ? '展开菜单' : '收起菜单'}
                mouseLeaveDelay={0}
                transitionName=""
              >
                <Icon
                  className={styles.trigger}
                  type={collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Tooltip>
              <div className={styles.right}>
                <HeaderSearch className={styles.action} placeholder="站内搜索" />
                <NotificationIcon className={styles.action} count={5} />
                <Avatar size="small" className={styles.avatar}>毛</Avatar>
                momo.zxy
              </div>
            </Header>
            <PageHeader title={pageTitle} routes={routes} params={params}>
              {header}
            </PageHeader>
            <Content style={{ margin: 24, minHeight: 280, overflow: 'visible' }}>
              {main || children}
            </Content>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}
