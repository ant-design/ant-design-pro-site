import React, { PureComponent } from 'react';
import { Popover, Icon, Tabs, Badge, Spin } from 'antd';
import classNames from 'classnames';
import List from './NoticeList';
import styles from './index.less';

const { TabPane } = Tabs;

export default class NoticeIcon extends PureComponent {
  static defaultProps = {
    onItemClick: () => {},
    onVisibleChange: () => {},
    onTabChange: () => {},
    onClear: () => {},
  };
  static Tab = TabPane;
  constructor(props) {
    super(props);
    this.state = {};
    if (props.children && props.children[0]) {
      this.state.tabType = props.children[0].props.title;
    }
  }
  onItemClick = (item, tabProps) => {
    const { onItemClick } = this.props;
    onItemClick(item, tabProps);
  }
  onTabChange = (tabType) => {
    this.setState({ tabType });
    this.props.onTabChange(tabType);
  }
  getNotificationBox() {
    const { children, loading } = this.props;
    if (!children) {
      return null;
    }
    const panes = children.map((child) => {
      const title = child.props.list && child.props.list.length > 0
        ? `${child.props.title} (${child.props.list.length})` : child.props.title;
      return (
        <TabPane tab={title} key={child.props.title}>
          <List
            data={child.props.list}
            onClick={item => this.onItemClick(item, child.props)}
            onClear={() => this.props.onClear(child.props.title)}
            title={child.props.title}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={loading} delay={0}>
        <Tabs className={styles.tabs} onChange={this.onTabChange}>
          {panes}
        </Tabs>
      </Spin>
    );
  }
  render() {
    const { className, count } = this.props;
    const noticeButtonClass = classNames(className, styles.noticeButton);
    const notificationBox = this.getNotificationBox();
    const trigger = (
      <span className={noticeButtonClass}>
        <Badge count={count} className={styles.badge}>
          <Icon type="bell" className={styles.icon} />
        </Badge>
      </span>
    );
    if (!notificationBox) {
      return trigger;
    }
    return (
      <Popover
        placement="bottomRight"
        content={notificationBox}
        popupClassName={styles.popover}
        trigger="click"
        arrowPointAtCenter
        popupAlign={{ offset: [20, -16] }}
        onVisibleChange={this.props.onVisibleChange}
      >
        {trigger}
      </Popover>
    );
  }
}
