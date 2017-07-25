import React, { Component } from 'react';
import moment from 'moment';
import { Table, Alert, Badge } from 'antd';
import styles from './index.less';

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

class StandardTable extends Component {
  state = {
    currentPage: 1,
    selectedRowKeys: [],
    selectedRows: [],
    loading: false,
  };

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRowKeys, selectedRows });
  }

  handlePageChange = (currentPage) => {
    this.setState({
      currentPage,
    });
  }

  handleTableChange = (pagination, filters, sorter) => {
    console.log(pagination, filters, sorter);
  }

  render() {
    const { selectedRowKeys, currentPage } = this.state;

    const status = ['关闭', '运行中'];

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
        sorter: true,
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
            value: 1,
          },
        ],
        render(val) {
          if (val === 0) {
            return <Badge status="default" text={status[val]} />;
          } else {
            return <Badge status="processing" text={status[val]} />;
          }
        },
      },
      {
        title: '更新时间',
        dataIndex: 'updatedAt',
        sorter: true,
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
      onChange: this.handlePageChange,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
    };

    return (
      <div className={styles.StandardTable}>
        <div className={styles.tableAlert}>
          <Alert message="Informational Notes" type="info" showIcon />
        </div>

        <Table
          rowKey={record => record.key}
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default StandardTable;
