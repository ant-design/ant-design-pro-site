import React, { Component } from 'react';
import moment from 'moment';
import { Table, Alert } from 'antd';
import styles from './index.less';

class StandardTable extends Component {
  state = {
    currentPage: 1,
    selectedRowKeys: [],
    selectedRows: [],
    loading: false,
  };

  onRowSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRowKeys, selectedRows });
  }

  onPageChange = (currentPage) => {
    this.setState({
      currentPage,
    });
  }

  render() {
    const { selectedRowKeys, currentPage } = this.state;


    const status = ['关闭', '运行中'];

    const dataSource = [];
    for (let i = 0; i < 46; i += 1) {
      dataSource.push({
        key: i,
        no: `TradeCode ${i}`,
        description: '这是一段描述',
        callNo: Math.floor(Math.random() * 1000),
        status: Math.floor(Math.random() * 10) % 2,
        updatedAt: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      });
    }

    const columns = [
      {
        title: '规则编号',
        dataIndex: 'no',
      },
      {
        title: '描述',
        dataIndex: 'description',
      },
      {
        title: '服务调用次数',
        dataIndex: 'callNo',
      },
      {
        title: '状态',
        dataIndex: 'status',
        filters: [
          {
            text: status[0],
            value: 0,
          },
          {
            text: status[1],
            value: 0,
          },
        ],
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
      },
      {
        title: '操作',
        render: () => (
          <p>
            <a href="">配置</a>
            <span className={styles.splitLine} />
            <a href="">订阅警报</a>
          </p>
        ),
      },
    ];

    const pagination = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 10,
      total: 111,
      current: currentPage,
      onChange: this.onPageChange,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onRowSelectChange,
    };

    return (
      <div className={styles.StandardTable}>
        <div className={styles.tableAlert}>
          <Alert message="Informational Notes" type="info" showIcon />
        </div>

        <Table
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
        />
      </div>
    );
  }
}

export default StandardTable;
