import React, { PureComponent } from 'react';
import { Popover, Icon, Tabs, Badge } from 'antd';
import classNames from 'classnames';
import List from './NoticeList';
import styles from './index.less';

const { TabPane } = Tabs;

export default class NoticeIcon extends PureComponent {
  static defaultProps = {
    onItemClick: () => {},
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
  onTabChange = (key) => {
    this.setState({
      tabType: key,
    });
  }
  getNotificationBox() {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    const panes = children.map((child) => {
      const title = `${child.props.title} (${child.props.list.length})`;
      return (
        <TabPane tab={title} key={child.props.title}>
          <List data={child.props.list} onClick={item => this.onItemClick(item, child.props)} />
        </TabPane>
      );
    });
    return (
      <div>
        <Tabs className={styles.tabs} onChange={this.onTabChange}>
          {panes}
        </Tabs>
        <div className={styles.clear} onClick={() => this.props.onClear(this.state.tabType)}>
          清空{this.state.tabType}
        </div>
      </div>
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
      >
        {trigger}
      </Popover>
    );
  }
}
