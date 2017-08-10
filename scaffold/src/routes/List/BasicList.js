import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { List, Card, Row, Col, Radio, Input, Progress } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './BasicList.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const Search = Input.Search;

class BasicList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 5,
      },
    });
  }

  render() {
    const { list: { list, loading } } = this.props;

    const Info = ({ title, value, bordered }) => (
      <div className={styles.headerInfo}>
        <span>{title}</span>
        <p>{value}</p>
        {bordered && <em />}
      </div>
    );

    const extraContent = (
      <div className={styles.extraContent}>
        <RadioGroup defaultValue="all">
          <RadioButton value="all">全部</RadioButton>
          <RadioButton value="progress">进行中</RadioButton>
          <RadioButton value="waiting">等待中</RadioButton>
        </RadioGroup>
        <Search
          placeholder="请输入"
          style={{ width: 272, marginLeft: 16 }}
          onSearch={value => console.log(value)}
        />
      </div>
    );

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 5,
      total: 50,
      onChange: (page) => {
        console.log(page);
      },
    };

    const ListContent = ({ data: { owner, createdAt, percent } }) => (
      <div className={styles.listContent}>
        <div>
          <span>Owner</span>
          <p>{owner}</p>
        </div>
        <div>
          <span>开始时间</span>
          <p>{moment(createdAt).format('YYYY-MM-DD hh:mm')}</p>
        </div>
        <div>
          <Progress percent={percent} />
        </div>
      </div>
    );

    return (
      <PageHeaderLayout>
        <div className={styles.standardList}>
          <Card>
            <Row>
              <Col span={8}>
                <Info title="我的代办" value="8个任务" bordered />
              </Col>
              <Col span={8}>
                <Info title="本周任务平均处理时间" value="32分钟" bordered />
              </Col>
              <Col span={8}>
                <Info title="本周完成任务数" value="24个任务" />
              </Col>
            </Row>
          </Card>

          <Card
            title="基础列表"
            style={{ marginTop: 16 }}
            extra={extraContent}
          >
            <List
              loading={loading}
              pagination={paginationProps}
            >
              {
                list && list.map(item => (
                  <List.Item
                    key={item.id}
                    actions={[<a>编辑</a>, <a>更多</a>]}
                  >
                    <List.Item.Meta
                      avatar={<img src={item.logo} alt={item.title} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.subDescription}
                    />
                    <ListContent data={item} />
                  </List.Item>
                ))
              }
            </List>
          </Card>
        </div>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  list: state.list,
}))(BasicList);
