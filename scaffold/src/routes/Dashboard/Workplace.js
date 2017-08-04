import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card } from 'antd';

import ProjectItem from '../../components/ProjectItem';
import ActivitiesItem from '../../components/ActivitiesItem';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import { Radar } from '../../components/Charts';

import styles from './Workplace.less';

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

//
const radarData = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

class Workplace extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'activities/fetchList',
    });
  }

  render() {
    const {
      project: { loading: projectLoading, notice },
      activities: { loading: activitiesLoading, list: activitiesList },
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
              bordered={false}
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
              bordered={false}
              title="动态"
              loading={activitiesLoading}
            >
              <div className={styles.activitiesList}>
                {
                  !activitiesLoading && activitiesList.length > 0 && activitiesList.map(item => (
                    <ActivitiesItem key={item.id} data={item} />
                  ))
                }
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="快速开始 / 便捷导航"
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              <EditableLinkGroup
                onAdd={() => {}}
                links={links}
              />
            </Card>
            <Card
              style={{ marginTop: 24 }}
              bordered={false}
              title="xx 指数"
            >
              <div className={styles.chart}>
                <Radar
                  hasLegend
                  height={286}
                  data={radarData}
                />
              </div>
            </Card>
            <Card
              style={{ marginTop: 24 }}
              bodyStyle={{ paddingBottom: 0 }}
              bordered={false}
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
  activities: state.activities,
}))(Workplace);
