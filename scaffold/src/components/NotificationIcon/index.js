import React, { PureComponent } from 'react';
import moment from 'moment';
import { Popover, Icon, Tabs, Badge, Tag } from 'antd';
import classNames from 'classnames';
import List from './NotificationList';
import styles from './index.less';

const { TabPane } = Tabs;

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
