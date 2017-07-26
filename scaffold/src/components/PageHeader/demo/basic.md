---
order: 0
title: Sample
---

可以写 markdown, markdown 的代码部分会直接展示 demo。

````jsx
import { PageHeader } from 'antd-pro';
import { Icon, Breadcrumb } from 'antd';

const tabList = [{
	key: 1, tab: 'tab1'
}, {
	key: 2, tab: 'tab2'
}, {
	key: 3, tab: 'tab3'
}];

ReactDOM.render(
  <div>
    <PageHeader title="test" logo="logo" action="action" content="content" extraContent="extra">
		  <PageHeader.Breadcrumb>
		    <Breadcrumb.Item>Home</Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
		    <Breadcrumb.Item>An Application</Breadcrumb.Item>
		  </PageHeader.Breadcrumb>
    	<PageHeader.Tabs tabList={tabList} />
    </PageHeader>
  </div>
, mountNode);
````
