import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Spin } from 'antd';

import Block from '../../components/Block';
import ProjectItem from '../../components/ProjectItem';
import TrendItem from '../../components/TrendItem';
import EditableLinkGroup from '../../components/EditableLinkGroup';

import styles from './Workplace.less';

class Workplace extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchProgressList',
    });
    dispatch({
      type: 'trend/fetchList',
    });
  }

  render() {
    const {
      project: { loading: projectLoading, progressList },
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
        title: '凤蝶精英小分队',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/CRxBvUggxBYzWBTGmkxF.png',
        link: 'http://github.com',
      },
      {
        title: 'Ant Design',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/RBytOnluTcyeyDazAbvs.png',
        link: 'http://github.com',
      },
      {
        title: 'DesignLab',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/HQVJYAXtWHEJvLxQjmPa.png',
        link: 'http://github.com',
      },
      {
        title: 'Basement',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/HQVJYAXtWHEJvLxQjmPa.png',
        link: 'http://github.com',
      },
      {
        title: 'Github',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/RBytOnluTcyeyDazAbvs.png',
        link: 'http://github.com',
      },
    ];

    return (
      <div>
        <Row gutter={24}>
          <Col span={16}>
            <Block
              title="进行中的项目"
              extraContent={<Link to="/">全部项目</Link>}
            >
              <div className={styles.projectList}>
                {
                  projectLoading && <div style={{ padding: 24 }}>
                    <Spin />
                  </div>
                }
                {
                  !projectLoading && progressList.length > 0 && progressList.map(item => (
                    <div className={styles.projectItem} key={item.id}>
                      <ProjectItem data={{ ...item, link: `/${item.id}` }} />
                    </div>
                  ))
                }
              </div>
            </Block>
            <Block
              style={{ marginTop: 24 }}
              title="动态"
            >
              <div className={styles.TrendList}>
                {
                  trendLoading && <div style={{ padding: 24 }}>
                    <Spin />
                  </div>
                }
                {
                  !trendLoading && trendList.length > 0 && trendList.map(item => (
                    <div className={styles.trendItem} key={item.id}>
                      <TrendItem data={item} />
                    </div>
                  ))
                }
              </div>
            </Block>
          </Col>
          <Col span={8}>
            <Block
              title="快速开始 / 便捷导航"
            >
              <div className={styles.quickMenu}>
                <EditableLinkGroup
                  onAdd={() => {}}
                  links={links}
                />
              </div>
            </Block>
            <Block
              style={{ marginTop: 24 }}
              title="xx 指数"
            >
              <div className={styles.chart}>
                <img
                  title="我是假的"
                  alt="我是假的"
                  src="https://gw.alipayobjects.com/zos/rmsportal/IonyWHLYaRVZqUbiZHFR.png"
                  style={{
                    width: 360,
                    padding: '24px 40px',
                  }}
                />
              </div>
            </Block>
            <Block
              style={{ marginTop: 24 }}
              title="团队"
            >
              <div className={styles.members}>
                <Row gutter={48}>
                  {
                    members.map(item => (
                      <Col span={12}><Link to={item.link} key={`members-item-${Math.random()}`}>
                        <img src={item.logo} alt={item.title} />
                        <span>{item.title}</span>
                      </Link></Col>
                    ))
                  }
                </Row>
              </div>
            </Block>
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
