import React, { Component } from 'react';
import { Popover, Icon, Tabs, Badge } from 'antd';
import classNames from 'classnames';
import List from './NotificationList';
import styles from './NotificationIcon.less';

const { TabPane } = Tabs;

const data = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息',
  extra: '2017-07-12',
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '消息内容不要超过两行文字，超出时，自动省略超出部分，用…替代',
  extra: '2017-07-12',
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息描述信息描述信息',
  extra: '2017-07-12',
  read: true,
}, {
  key: '4',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息',
  extra: '2017-07-12',
}, {
  key: '5',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题标题',
  description: '描述信息',
  extra: '2017-07-12',
}];

export default class NotificationIcon extends Component {
  static defaultProps = {
    onItemClick: () => {},
  };
  state = {
    tabType: 'notice',
  };
  onItemClick = (item, type) => {
    const { onItemClick } = this.props;
    onItemClick(item, type);
  }
  getNotificationBox() {
    return (
      <div>
        <Tabs defaultActiveKey={this.state.tabType} className={styles.tabs}>
          <TabPane tab="通知 (3)" key="notice">
            <List data={data} onClick={item => this.onItemClick(item, 'notice')} />
          </TabPane>
          <TabPane tab="消息 (4)" key="message" onClick={this.onItemClick}>
            <List data={data} onClick={item => this.onItemClick(item, 'notice')} />
          </TabPane>
          <TabPane tab="代办 (2)" key="todo" onClick={this.onItemClick}>
            <List data={data} onClick={item => this.onItemClick(item, 'notice')} />
          </TabPane>
        </Tabs>
        <div className={styles.clear} onClick={this.props.onClearUnread}>
          清空通知
        </div>
      </div>
    );
  }
  render() {
    const { className, count } = this.props;
    const iconClass = classNames(className, styles.icon);
    return (
      <Popover
        placement="bottomRight"
        content={this.getNotificationBox()}
        popupClassName={styles.popover}
        trigger="click"
      >
        <Badge count={count} className={styles.badge}>
          <Icon className={iconClass} type="bell" />
        </Badge>
      </Popover>
    );
  }
}
