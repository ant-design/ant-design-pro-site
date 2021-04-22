import React, { useState } from 'react';
import { Input, Divider, Row, Col, Card, Space } from 'antd';
import { LinkOutlined, SearchOutlined, SelectOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';
import './dashboard.less';

const Dashboard: React.FC<{ intl: any; menuData: Record<string, any[]> }> = ({
  menuData,
  intl,
}) => {
  const [search, setSearch] = useState<string>('');
  const sectionRef = React.createRef<HTMLDivElement>();
  return (
    <div
      ref={sectionRef}
      style={{
        marginBottom: 32,
      }}
    >
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
      <Row gutter={[24, 24]}>
        {Object.keys(menuData).map((key) => {
          const group = menuData[key];
          const components = group.filter(
            (component) =>
              !search.trim() ||
              component.title.toLowerCase().includes(search.trim().toLowerCase()) ||
              (component.subtitle || '').toLowerCase().includes(search.trim().toLowerCase()),
          );
          return components.length ? (
            <Col xs={24} sm={12} lg={8} xl={6} key={key}>
              <Card
                bodyStyle={{
                  height: 134,
                }}
                size="small"
                className="components-overview-card"
                title={key}
              >
                {components.map((component) => {
                  const url = `${component.slug
                    .replace(/(\/index)?((\.zh-cn)|(\.en-us))?\.md$/i, '')
                    .toLowerCase()}/`;
                  return (
                    <Link to={url}>
                      <Space
                        style={{
                          display: 'flex',
                        }}
                      >
                        <LinkOutlined />
                        <div className="components-overview-title" key={component.title}>
                          {component.title} {component.subtitle}
                        </div>
                      </Space>
                    </Link>
                  );
                })}
              </Card>
            </Col>
          ) : null;
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
