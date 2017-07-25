import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card } from 'antd';

import ProjectItem from '../../components/ProjectItem';
import TrendItem from '../../components/TrendItem';
import EditableLinkGroup from '../../components/EditableLinkGroup';

import styles from './Workplace.less';

class Workplace extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'trend/fetchList',
    });
  }

  render() {
    const {
      project: { loading: projectLoading, notice },
      trend: { loading: trendLoading, list: trendList },
      } = this.props;

    const links = [
      {
        title: '操作一',
        href: '/#operator1',
      },
      {
        title: '操作二',
        href: '/#operator1',
      },
      {
        title: '操作三',
        href: '/#operator1',
      },
      {
        title: '操作四',
        href: '/#operator1',
      },
      {
        title: '操作五',
        href: '/#operator1',
      },
      {
        title: '操作六',
        href: '/#operator1',
      },
    ];

    const members = [
      {
        id: 'members-1',
        title: '凤蝶精英小分队',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/CRxBvUggxBYzWBTGmkxF.png',
        link: 'http://github.com',
      },
      {
        id: 'members-2',
        title: 'Ant Design',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/RBytOnluTcyeyDazAbvs.png',
        link: 'http://github.com',
      },
      {
        id: 'members-3',
        title: 'DesignLab',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/HQVJYAXtWHEJvLxQjmPa.png',
        link: 'http://github.com',
      },
      {
        id: 'members-4',
        title: 'Basement',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/HQVJYAXtWHEJvLxQjmPa.png',
        link: 'http://github.com',
      },
      {
        id: 'members-5',
        title: 'Github',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/RBytOnluTcyeyDazAbvs.png',
        link: 'http://github.com',
      },
    ];

    return (
      <div>
        <Row gutter={24}>
          <Col span={16}>
            <Card
              title="进行中的项目"
              bodyStyle={{ padding: 0 }}
              extra={<Link to="/">全部项目</Link>}
              loading={projectLoading}
            >
              {
                !projectLoading && notice.length > 0 && notice.map(item => (
                  <Card.Grid style={{ width: '33.33%', padding: 0 }} key={item.id}>
                    <ProjectItem data={{ ...item, link: `/${item.id}` }} />
                  </Card.Grid>
                ))
              }
            </Card>
            <Card
              style={{ marginTop: 24 }}
              bodyStyle={{ padding: 0 }}
              title="动态"
              loading={trendLoading}
            >
              <div className={styles.TrendList}>
                {
                  !trendLoading && trendList.length > 0 && trendList.map(item => (
                    <div className={styles.trendItem} key={item.id}>
                      <TrendItem data={item} />
                    </div>
                  ))
                }
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="快速开始 / 便捷导航"
              bodyStyle={{ padding: 0 }}
            >
              <div className={styles.quickMenu}>
                <EditableLinkGroup
                  onAdd={() => {}}
                  links={links}
                />
              </div>
            </Card>
            <Card
              style={{ marginTop: 24 }}
              title="xx 指数"
            >
              <div className={styles.chart}>
                <img
                  title="我是假的"
                  alt="我是假的"
                  src="https://gw.alipayobjects.com/zos/rmsportal/IonyWHLYaRVZqUbiZHFR.png"
                  style={{
                    width: 300,
                  }}
                />
              </div>
            </Card>
            <Card
              style={{ marginTop: 24 }}
              bodyStyle={{ paddingBottom: 0 }}
              title="团队"
            >
              <div className={styles.members}>
                <Row gutter={48}>
                  {
                    members.map(item => (
                      <Col span={12} key={`members-item-${item.id}`}><Link to={item.link}>
                        <img src={item.logo} alt={item.title} />
                        <span>{item.title}</span>
                      </Link></Col>
                    ))
                  }
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => ({
  project: state.project,
  trend: state.trend,
}))(Workplace);
