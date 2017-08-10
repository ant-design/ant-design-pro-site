import React, { PureComponent } from 'react';
import moment from 'moment';
import { Popover, Icon, Tabs, Badge, Tag } from 'antd';
import classNames from 'classnames';
import List from './NotificationList';
import styles from './index.less';

const { TabPane } = Tabs;

const data1 = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '你收到了 14 份新周报',
  datetime: moment('2017-08-09').fromNow(),
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '你推荐的 曲妮妮 已通过第三轮面试',
  datetime: moment('2017-08-08').fromNow(),
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  datetime: moment('2017-08-07').fromNow(),
  read: true,
}, {
  key: '4',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  datetime: moment('2017-08-07').fromNow(),
}, {
  key: '5',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题标题',
  datetime: moment('2017-08-07').fromNow(),
}, {
  key: '6',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题标题',
  datetime: moment('2017-08-07').fromNow(),
}];

const data2 = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '曲丽丽评论了你',
  description: '描述信息描述信息描述信息',
  datetime: moment('2017-08-07').fromNow(),
  extra: '2017-07-12',
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '消息内容不要超过两行文字，超出时，自动省略超出部分，用…替代',
  datetime: moment('2017-08-07').fromNow(),
  extra: '2017-07-12',
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息描述信息描述信息',
  datetime: moment('2017-08-07').fromNow(),
  extra: '2017-07-12',
  read: true,
}];

const data3 = [{
  key: '1',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
  extra: <Tag color="red">马上到期</Tag>,
}, {
  key: '2',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '消息内容不要超过两行文字，超出时，自动省略超出部分，用…替代',
  extra: <Tag color="red">马上到期</Tag>,
}, {
  key: '3',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息描述信息描述信息',
  extra: <Tag color="yellow">已耗时 8 天</Tag>,
}, {
  key: '4',
  avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
  title: '标题',
  description: '描述信息',
  extra: <Tag color="blue">进行中</Tag>,
}];

export default class NotificationIcon extends PureComponent {
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
      <span className={noticeButtonClass}>
        <Popover
          placement="bottomRight"
          content={this.getNotificationBox()}
          popupClassName={styles.popover}
          trigger="click"
          arrowPointAtCenter
        >
          <Badge count={count} className={styles.badge}>
            <Icon type="bell" className={styles.icon} />
          </Badge>
        </Popover>
      </span>
    );
  }
}
