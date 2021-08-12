import React, { useState } from 'react';
import { Input, Divider, Row, Col, Card, Space } from 'antd';
import { LinkOutlined, SearchOutlined } from '@ant-design/icons';
import './dashboard.less';

export interface IMenuItem {
  path?: string;
  title: string;
  subtitle?: string;
  meta?: Record<string, any>;
  children?: IMenuItem[];
}

const Dashboard: React.FC<{ menuData: IMenuItem[] }> = ({ menuData }) => {
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
        placeholder="请输入"
        className="components-overview-search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        autoFocus
        suffix={<SearchOutlined />}
      />
      <Divider />
      <Row gutter={[24, 24]}>
        {menuData.map((group) => {
          const components =
            group?.children?.filter(
              (component) =>
                !search.trim() ||
                component.title.toLowerCase().includes(search.trim().toLowerCase()),
            ) || [];
          return components.length ? (
            <Col xs={24} sm={12} lg={8} xl={6} key={group.path}>
              <Card
                bodyStyle={{
                  height: 134,
                }}
                size="small"
                className="components-overview-card"
                title={group.title}
              >
                {components.map((component) => {
                  const url = `${component.path
                    .replace(/(\/index)?((\.zh-CN)|(\.en-us))?\.md$/i, '')
                    .toLowerCase()}/`;
                  return (
                    <a href={url}>
                      <Space
                        style={{
                          display: 'flex',
                        }}
                      >
                        <LinkOutlined />
                        <div
                          className="components-overview-title"
                          key={component.title}
                          style={{
                            height: 22,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                            flex: 1,
                          }}
                        >
                          {component.title}
                        </div>
                      </Space>
                    </a>
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
