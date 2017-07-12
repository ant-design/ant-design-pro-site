import React, { Component } from 'react';
import { Popover, Icon, Tabs, Badge } from 'antd';
import classNames from 'classnames';
import styles from './NotificationIcon.less';

const { TabPane } = Tabs;

export default class NotificationIcon extends Component {
  state = {
    tabType: 'notice',
  };
  getNotificationBox() {
    return (
      <Tabs defaultActiveKey={this.state.notice} classNames={styles.tabs}>
        <TabPane tab="通知" key="notice">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="消息" key="message">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="代办" key="todo">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
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
