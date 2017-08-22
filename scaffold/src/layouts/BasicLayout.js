import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Avatar, Dropdown, Tag } from 'antd';
import DocumentTitle from 'react-document-title';
import { connect } from 'dva';
import { Link, routerRedux } from 'dva/router';
import moment from 'moment';
import styles from './BasicLayout.less';
import HeaderSearch from '../components/HeaderSearch';
import NoticeIcon from '../components/NoticeIcon';
import GlobalFooter from '../components/GlobalFooter';
import { menus } from '../common/nav';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const data1 = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  title: '你收到了 14 份新周报',
  datetime: moment('2017-08-09').fromNow(),
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
  title: '你推荐的 曲妮妮 已通过第三轮面试',
  datetime: moment('2017-08-08').fromNow(),
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
  title: '这种模板可以区分多种通知类型',
  datetime: moment('2017-08-07').fromNow(),
  read: true,
}, {
  key: '4',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
  title: '左侧图标用于区分不同的类型',
  datetime: moment('2017-08-07').fromNow(),
}, {
  key: '5',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
  title: '内容不要超过两行字，超出时自动截断',
  datetime: moment('2017-08-07').fromNow(),
}];

const data2 = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '曲丽丽 评论了你',
  description: '描述信息描述信息描述信息',
  datetime: moment('2017-08-07').fromNow(),
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '朱偏右 回复了你',
  description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
  datetime: moment('2017-08-07').fromNow(),
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
  datetime: moment('2017-08-07').fromNow(),
}];

const data3 = [{
  key: '1',
  title: '任务名称',
  description: '任务需要在 2017-01-12 20:00 前启动',
  extra: <Tag color="red">马上到期</Tag>,
}, {
  key: '2',
  title: '第三方紧急代码变更',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: <Tag color="red">马上到期</Tag>,
}, {
  key: '3',
  title: '信息安全考试',
  description: '指派竹尔于 2017-01-09 前完成更新并发布',
  extra: <Tag color="yellow">已耗时 8 天</Tag>,
}, {
  key: '4',
  title: 'ABCD 版本发布',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: <Tag color="blue">进行中</Tag>,
}];

class BasicLayout extends React.PureComponent {
  static childContextTypes = {
    routes: PropTypes.array,
    params: PropTypes.object,
  }
  state = {
    mode: 'inline',
  };
  getChildContext() {
    const { routes, params } = this.props;
    return { routes, params };
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'user/fetchCurrent',
    });
  }
  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: collapsed,
    });
  }
  onMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.props.dispatch(routerRedux.push('/user/login'));
    }
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
      if (!item.name) {
        return null;
      }
      const itemPath = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
      if (item.children && item.children.some(child => child.name)) {
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
  getPageTitle() {
    const { routes } = this.props;
    for (let i = routes.length - 1; i >= 0; i -= 1) {
      if (routes[i].breadcrumbName) {
        return `${routes[i].breadcrumbName} - Ant Design Pro`;
      }
    }
    return 'Ant Design Pro';
  }
  toggle = () => {
    const { collapsed } = this.props;
    this.props.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
  }
  render() {
    const { children, currentUser, collapsed } = this.props;

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item><Icon type="user" />个人中心</Menu.Item>
        <Menu.Item><Icon type="setting" />设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
      </Menu>
    );

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint="md"
            onCollapse={this.onCollapse}
            style={{ minHeight: '100vh' }}
            width={272}
          >
            <div className={styles.logo}>
              <Link to="/">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/osjtaBtmmQzWRvMbcKeb.svg" alt="logo" />
                <h1>Ant Design Pro</h1>
              </Link>
            </div>
            <Menu
              theme="dark"
              mode="inline"
              defaultOpenKeys={this.getDefaultCollapsedSubMenus()}
              selectedKeys={this.getCurrentMenuSelectedKeys()}
              style={{ margin: '24px 0' }}
            >
              {this.getNavMenuItems(menus)}
            </Menu>
          </Sider>
          <Layout>
            <Header className={styles.header}>
              <Icon
                className={styles.trigger}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <div className={styles.right}>
                <HeaderSearch className={`${styles.action} ${styles.search}`} placeholder="站内搜索" />
                <NoticeIcon
                  className={styles.action}
                  count={currentUser.notifyCount}
                  onItemClick={(item, tabProps) => console.log(item, tabProps)}
                  onClear={type => console.log(type)}
                >
                  <NoticeIcon.Tab list={data1} title="通知" />
                  <NoticeIcon.Tab list={data2} title="消息" />
                  <NoticeIcon.Tab list={data3} title="待办" />
                </NoticeIcon>
                <Dropdown overlay={menu}>
                  <span className={`${styles.action} ${styles.account}`}>
                    <Avatar size="small" className={styles.avatar} src={currentUser.avatar} />
                    {currentUser.name}
                  </span>
                </Dropdown>
              </div>
            </Header>
            <Content style={{ margin: 24, height: '100%' }}>
              {children}
              <GlobalFooter
                links={[{
                  title: '帮助',
                  href: '',
                }, {
                  title: '隐私',
                  href: '',
                }, {
                  title: '条款',
                  href: '',
                  blankTarget: true,
                }]}
                copyright={<div>Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品</div>}
              />
            </Content>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default connect(state => ({
  currentUser: state.user.currentUser,
  collapsed: state.global.collapsed,
}))(BasicLayout);
