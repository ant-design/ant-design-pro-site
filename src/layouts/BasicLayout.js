import React from 'react';
import { Layout, Menu, Icon, Tooltip } from 'antd';
import { Link } from 'dva/router';
import styles from './BasicLayout.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
    openKeys: ['patterns'],
  };
  onOpenChange = (openKeys) => {
    this.setState({ openKeys });
  }
  getCurrentMenuSelectedKeys() {
    const { location: { pathname } } = this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return ['dashboard'];
    }
    return keys;
  }
  inlineOpenKeys = [];
  toggle = () => {
    const { collapsed } = this.state;
    const inlineOpenKeys = [...this.state.openKeys];
    this.setState({
      collapsed: !collapsed,
      mode: collapsed ? 'inline' : 'vertical',
      openKeys: collapsed ? this.inlineOpenKeys : [],
    });
    if (!collapsed) {
      this.inlineOpenKeys = inlineOpenKeys;
    }
  }
  render() {
    const { collapsed, openKeys } = this.state;
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ height: '100vh' }}
          width={272}
        >
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode={this.state.mode}
            openKeys={openKeys}
            onOpenChange={this.onOpenChange}
            defaultSelectedKeys={this.getCurrentMenuSelectedKeys()}
          >
            <Menu.Item key="dashboard">
              <Tooltip
                title={collapsed ? 'Dashboard' : ''}
                placement="right"
                overlayStyle={{ paddingLeft: 16 }}
              >
                <Link to="/">
                  <Icon type="setting" />
                  <span className={styles.navText}>
                    Dashboard
                  </span>
                </Link>
              </Tooltip>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="setting" />
                  <span className={styles.navText}>常用页面</span>
                </span>
              }
              key="patterns"
            >
              <Menu.Item key="forms">
                <Link to="/patterns/forms">
                  <Icon type="setting" />
                  <span>表单页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="list">
                <Link to="/patterns/list">
                  <Icon type="setting" />
                  <span>列表页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="profile" icon="upload">
                <Link to="/patterns/profile">
                  <Icon type="setting" />
                  <span>详情页</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', minHeight: 280, overflow: 'visible' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
