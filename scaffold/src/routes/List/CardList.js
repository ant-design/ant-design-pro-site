import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Avatar, Spin, Button, Icon } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './CardList.less';

class CardList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });
  }

  render() {
    const { list: { list, loading } } = this.props;

    const content = (
      <div>
        <p>段落示意：蚂蚁金服务设计平台-design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。</p>
        <div className={styles.contentLink}>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/wUTAfuNZjhmCIxEPxQVY.svg" /> 快速开始
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/qsmGbwvxTAjXfkkrZYov.svg" /> 产品简介
          </a>
          <a>
            <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/UGEHGuwlGDalIJlbsNxL.svg" /> 产品文档
          </a>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img alt="这是一个标题" src="https://gw.alipayobjects.com/zos/rmsportal/tTIFdlIcZFvvmCROhyBg.png" />
      </div>
    );

    return (
      <PageHeaderLayout
        title="这是一个标题"
        content={content}
        extraContent={extraContent}
      >
        <div className={styles.cardList}>
          {
            loading ?
              <Spin />
              :
              <Row gutter={16}>
                <Col span={8} style={{ marginBottom: 16 }}>
                  <Button type="dashed" className={styles.newButton}>
                    <Icon type="plus" /> 新增产品
                  </Button>
                </Col>
                {
                  list && list.map(item => (
                    <Col span={8} key={item.id} style={{ marginBottom: 16 }}>
                      <Card
                        actions={[<a>操作一</a>, <a>操作二</a>]}
                      >
                        <Card.Meta
                          avatar={<Avatar size="large" src={item.avatar} />}
                          title={item.title}
                          description={(
                            <p className={styles.cardDescription}>
                              <span>{item.description}</span>
                            </p>
                          )}
                        />
                      </Card>
                    </Col>
                  ))
                }
              </Row>
          }
        </div>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  list: state.list,
}))(CardList);
