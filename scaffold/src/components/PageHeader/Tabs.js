import React from 'react';
import { Tabs } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const TabPane = Tabs.TabPane;

export default class PageHedaerTabs extends React.Component {
  static __ANT_PRO_PAGEHEADER_TABS = true;

  onChange = (key) => {
    if (this.props.onChange) {
      this.props.onChange(key);
    }
  }

  render() {
    const { tabList } = this.props;
    if (!tabList || !tabList.length) {
      return null;
    }
    const clsString = classNames(styles.tabs, this.props.className);
    return (
      <Tabs className={clsString} onChange={this.onChange}>
        {
          tabList.map(item => <TabPane tab={item.tab} key={item.key} />)
        }
      </Tabs>
    );
  }
}

