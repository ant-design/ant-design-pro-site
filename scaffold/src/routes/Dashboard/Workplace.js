import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Card, List, Avatar, Alert, Icon } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import ProjectItem from '../../components/ProjectItem';
import EditableLinkGroup from '../../components/EditableLinkGroup';
import { Radar } from '../../components/Charts';

import styles from './Workplace.less';

class Workplace extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'project/fetchNotice',
    });
    dispatch({
      type: 'activities/fetchList',
    });
    dispatch({
      type: 'chart/fetch',
    });
  }

  render() {
    const {
      project: { loading: projectLoading, notice },
      activities: { loading: activitiesLoading, list: activitiesList },
      chart: { radarData },
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

    const pageHeaderContent = (
      <Alert
        message="平台迁移公告：平台将于本周六 03:00 ~ 04:00 进行迁移，请勿在此期间提交数据。"
        type="warning"
        showIcon
      />
    );

    const pageHeaderTitle = (
      <div className={styles.pageHeaderTitle}>
        <div className={styles.titleAvatar}>
          <Avatar size="large" src="https://gw.alipayobjects.com/zos/rmsportal/XertDCubOxUvZbCdgWTW.png" />
        </div>
        <div className={styles.titleContent}>
          <p>早安, 曲丽丽, 祝你开心每一天</p>
          <p>交互专家 | 蚂蚁金服－平台数据技术事业群－基础平台部－用户体验技术部－UED</p>
        </div>
      </div>
    );

    const pageHeaderAction = (
      <div className={styles.pageHeaderAction}>
        <div>
          <p><Icon type="appstore-o" /> 项目数</p>
          <p>56</p>
          <em />
        </div>
        <div>
          <p><Icon type="trophy" /> 团队内排名</p>
          <p>8<span> / 24</span></p>
          <em />
        </div>
        <div>
          <p><Icon type="eye-o" /> 项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout
        action={pageHeaderAction}
        title={pageHeaderTitle}
        content={pageHeaderContent}
      >
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
              <List loading={activitiesLoading}>
                <div className={styles.activitiesList}>
                  {
                    activitiesList.map(item => (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          avatar={<Avatar style={{ marginTop: -12 }} src={item.user.avatar} />}
                          title={<p>{item.user.name} 在 <a>xx</a> 新建了项目 <a>xxxx</a></p>}
                          description={moment(item.updatedAt).fromNow()}
                        />
                      </List.Item>
                    ))
                  }
                </div>
              </List>
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
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  project: state.project,
  activities: state.activities,
  chart: state.chart,
}))(Workplace);
