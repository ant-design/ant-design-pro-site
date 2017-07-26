---
order: 3
title: Simple
---

简单的页头。

````jsx
import { PageHeader } from 'ant-design-pro';
import { Breadcrumb } from 'antd';


ReactDOM.render(
  <div>
    <PageHeader title="页面标题">
		  <PageHeader.Breadcrumb>
		    <Breadcrumb.Item><a href="">一级菜单</a></Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">二级菜单</a></Breadcrumb.Item>
		    <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
		  </PageHeader.Breadcrumb>
    </PageHeader>
  </div>
, mountNode);
````
