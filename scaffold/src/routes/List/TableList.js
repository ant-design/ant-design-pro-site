import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './TableList.less';
import StandardTable from '../../components/StandardTable';

class TableList extends Component {
  render() {
    return (
      <div>
        <Card noHovering>
          <div className={styles.tableList}>
            <StandardTable />
          </div>
        </Card>
      </div>
    );
  }
}

export default TableList;
