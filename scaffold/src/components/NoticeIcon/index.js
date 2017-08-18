import React, { PureComponent } from 'react';
import moment from 'moment';
import { Popover, Icon, Tabs, Badge, Tag } from 'antd';
import classNames from 'classnames';
import List from './NoticeList';
import Tab from './NoticeTab';
import styles from './index.less';

const { TabPane } = Tabs;

export default class NoticeIcon extends PureComponent {
  static defaultProps = {
    onItemClick: () => {},
  };
  static Tab = Tab;
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
            <List data={data1} onClick={item => this.onItemClick(item, 'notice')} />
          </TabPane>
          <TabPane tab="消息 (4)" key="message" onClick={this.onItemClick}>
            <List data={data2} onClick={item => this.onItemClick(item, 'notice')} />
          </TabPane>
          <TabPane tab="代办 (2)" key="todo" onClick={this.onItemClick}>
            <List data={data3} onClick={item => this.onItemClick(item, 'notice')} />
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
    const noticeButtonClass = classNames(className, styles.noticeButton);
    return (
      <Popover
        placement="bottomRight"
        content={this.getNotificationBox()}
        popupClassName={styles.popover}
        trigger="click"
        arrowPointAtCenter
        popupAlign={{ offset: [20, -16] }}
      >
        <span className={noticeButtonClass}>
          <Badge count={count} className={styles.badge}>
            <Icon type="bell" className={styles.icon} />
          </Badge>
        </span>
      </Popover>
    );
  }
}
