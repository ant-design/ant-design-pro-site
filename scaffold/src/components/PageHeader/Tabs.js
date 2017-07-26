import React from 'react';
import { Tabs } from 'antd';
import styles from './index.less';

const TabPane = Tabs.TabPane;

export default class PageHedaerTabs extends React.Component {
  static __ANT_PRO_PAGEHEADER_TABS = true;

  render() {
    const { tabList, onChange } = this.props;
    if (!tabList || !tabList.length) {
      return null;
    }
    return (
      <div className={styles.tabs}>
        <Tabs onChange={onChange}>
          {
            tabList.map(item => <TabPane tab={item.tab} key={item.key} />)
          }
        </Tabs>
      </div>
    );
  }
}

