import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import styles from './BasicLayout.less';

const { Header, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ height: '100vh' }}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="setting" />
              <span className={styles.navText}>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className={styles.navText}>列表页</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className={styles.navText}>详情页</span>
            </Menu.Item>
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
