---
order: 0
title: Structure
---

基本结构，可以形成多种组合。

````jsx
import { PageHeader } from 'ant-design-pro';
import { Breadcrumb } from 'antd';


const tabList = [{
	key: '1', tab: '页签一'
}, {
	key: '2', tab: '页签二'
}, {
  key: '3', tab: '页签三'
}];

ReactDOM.render(
  <div>
    <PageHeader
    	title={<div className="title">Title</div>}
    	logo={<div className="logo">logo</div>}
    	action={<div className="action">action</div>}
    	content={<div className="content">content</div>}
    	extraContent={<div className="extraContent">extraContent</div>}
    >
		  <PageHeader.Breadcrumb className="breadcrumb">
		    <Breadcrumb.Item><a href="">一级菜单</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">二级菜单</a></Breadcrumb.Item>
        <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
		  </PageHeader.Breadcrumb>
    	<PageHeader.Tabs className="tabs" tabList={tabList} />
    </PageHeader>
  </div>
, mountNode);
````

<style>
#scaffold-src-components-PageHeader-demo-structure .code-box-demo {
  background: #eee;
}
#scaffold-src-components-PageHeader-demo-structure .logo {
	background: #3ba0e9;
	color: #fff;
  height: 100%;
}
#scaffold-src-components-PageHeader-demo-structure .title {
  background: rgba(16, 142, 233, 1);
  color: #fff;
}
#scaffold-src-components-PageHeader-demo-structure .action {
  background: #7dbcea;
  color: #fff;
}
#scaffold-src-components-PageHeader-demo-structure .content {
  background: #7dbcea;
  color: #fff;
}
#scaffold-src-components-PageHeader-demo-structure .extraContent {
  background: #7dbcea;
  color: #fff;
}
</style>

