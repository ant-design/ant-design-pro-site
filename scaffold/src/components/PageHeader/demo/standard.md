---
order: 1
title: Standard
---

标准页头。

````jsx
import { PageHeader } from 'ant-design-pro';
import { Breadcrumb, Button, Menu, Dropdown, Icon, Row, Col } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">选项一</Menu.Item>
    <Menu.Item key="2">选项二</Menu.Item>
    <Menu.Item key="3">选项三</Menu.Item>
  </Menu>
);

const action = (
	<div>
    <Button size="large" type="primary">主操作</Button>
    <Button size="large">次操作</Button>
    <Dropdown overlay={menu}>
      <Button size="large">
        更多 <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
);

const extra = (
	<Row>
		<Col span={12}>
			<div className="label">状态</div>
			<div className="detail">待审批</div>
		</Col>
		<Col span={12}>
			<div className="label">订单金额</div>
			<div className="detail">¥ 568.08</div>
		</Col>
	</Row>
);

const tabList = [{
	key: 'detail', tab: '详情'
}, {
	key: 'rule', tab: '规则'
}];

function onChange(key) {
  console.log(key)
}

ReactDOM.render(
  <div>
    <PageHeader
    	title="单号：234231029431"
    	logo={<img src="https://gw.alipayobjects.com/zos/rmsportal/JcBAEvlHGhVvBekIJCWT.svg" />}
    	action={action}
    	content="DescriptionList 占位"
    	extraContent={extra}
    >
		  <PageHeader.Breadcrumb>
		    <Breadcrumb.Item><a href="">一级菜单</a></Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">二级菜单</a></Breadcrumb.Item>
		    <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
		  </PageHeader.Breadcrumb>
    	<PageHeader.Tabs onChange={onChange} tabList={tabList} />
    </PageHeader>
  </div>
, mountNode);
````

<style>
#scaffold-src-components-PageHeader-demo-standard .label {
	color: rgba(0, 0, 0, 0.43);
}
#scaffold-src-components-PageHeader-demo-standard .detail {
	color: rgba(0, 0, 0, 0.85);
	font-size: 20px;
}
</style>

