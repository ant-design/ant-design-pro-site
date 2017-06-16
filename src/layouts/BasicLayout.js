import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './BasicLayout.less';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  getCurrentMenuSelectedKeys() {
    const { location: { pathname } } = this.props;
    const keys = pathname.split('/').slice(1);
    if (keys.length === 1 && keys[0] === '') {
      return ['dashboard'];
    }
    return keys;
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ height: '100vh' }}
        >
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode={this.state.mode}
            defaultOpenKeys={['patterns']}
            defaultSelectedKeys={this.getCurrentMenuSelectedKeys()}
          >
            <Menu.Item key="dashboard">
              <Link to="/">
                <Icon type="setting" />
                <span className={styles.navText}>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu title={<span><Icon type="video-camera" />常用页面</span>} key="patterns">
              <Menu.Item key="forms">
                <Link to="/patterns/forms">
                  <Icon type="video-camera" />
                  <span className={styles.navText}>表单页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="list">
                <Link to="/patterns/list">
                  <Icon type="video-camera" />
                  <span className={styles.navText}>列表页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="profile" icon="upload">
                <Link to="/patterns/profile">
                  <Icon type="video-camera" />
                  <span className={styles.navText}>详情页</span>
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
