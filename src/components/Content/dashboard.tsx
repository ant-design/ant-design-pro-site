import React, { useState } from 'react';
import { Input, Divider, Row, Col, Card, Typography, Tag, Space } from 'antd';
import { Link } from 'gatsby';
import { SearchOutlined } from '@ant-design/icons';
import './dashboard.less';

const { Title } = Typography;

const Dashboard: React.FC<{ intl: any; menuData: Record<string, any[]> }> = ({
  menuData,
  intl,
}) => {
  const [search, setSearch] = useState<string>('');
  const sectionRef = React.createRef<HTMLDivElement>();
  return (
    <div ref={sectionRef}>
      <Divider />
      <Input
        value={search}
        placeholder={intl.formatMessage({ id: 'app.header.search' })}
        className="components-overview-search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        autoFocus
        suffix={<SearchOutlined />}
      />
      <Divider />
      {Object.keys(menuData).map((key) => {
        const group = menuData[key];
        const components = group.filter(
          (component) =>
            !search.trim() ||
            component.title.toLowerCase().includes(search.trim().toLowerCase()) ||
            (component.subtitle || '').toLowerCase().includes(search.trim().toLowerCase()),
        );
        return components.length ? (
          <div key={key} className="components-overview">
            <Title level={2} className="components-overview-group-title">
              <Space align="center">
                {key}
                <Tag style={{ display: 'block' }}>{components.length}</Tag>
              </Space>
            </Title>
            <Row gutter={[24, 24]}>
              {components
                .sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
                .map((component) => {
                  const url = `${component.slug
                    .replace(/(\/index)?((\.zh-cn)|(\.en-us))?\.md$/i, '')
                    .toLowerCase()}/`;
                  return (
                    <Col xs={24} sm={12} lg={8} xl={6} key={component.title}>
                      <Link to={url}>
                        <Card
                          size="small"
                          className="components-overview-card"
                          title={
                            <div className="components-overview-title">
                              {component.title} {component.subtitle}
                            </div>
                          }
                        >
                          <div className="components-overview-img">
                            <img
                              src={
                                component.cover ||
                                'https://gw.alipayobjects.com/zos/alicdn/5swjECahe/Divider.svg'
                              }
                              alt={component.title}
                            />
                          </div>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
            </Row>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Dashboard;
