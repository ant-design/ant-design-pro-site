---
order: 2
title: With Image
---

带图片的页头。

````jsx
import { PageHeader } from 'ant-design-pro';
import { Breadcrumb } from 'antd';

const content = (
  <div>
    <p>段落示意：蚂蚁金服务设计平台-design.alipay.com，用最小的工作量，无缝接入蚂蚁金服生态， 
提供跨越设计与开发的体验解决方案。</p>
    <div className="link">
      <a>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/wUTAfuNZjhmCIxEPxQVY.svg" />
        <span>快速开始</span>
      </a>
      <a><img src="https://gw.alipayobjects.com/zos/rmsportal/qsmGbwvxTAjXfkkrZYov.svg" /> 产品简介</a>
      <a><img src="https://gw.alipayobjects.com/zos/rmsportal/UGEHGuwlGDalIJlbsNxL.svg" /> 产品文档</a>
    </div>
  </div>
);

const extra = (
  <div className="imgContainer">
    <img src="https://gw.alipayobjects.com/zos/rmsportal/RWDkuWwBqMPLpNqGdxDp.png" />
  </div>
);

ReactDOM.render(
  <div>
    <PageHeader
    	title="这是一个标题"
    	content={content}
    	extraContent={extra}
    >
		  <PageHeader.Breadcrumb>
		    <Breadcrumb.Item><a href="">一级菜单</a></Breadcrumb.Item>
		    <Breadcrumb.Item><a href="">二级菜单</a></Breadcrumb.Item>
		    <Breadcrumb.Item>三级菜单</Breadcrumb.Item>
		  </PageHeader.Breadcrumb>
    </PageHeader>
  </div>
, mountNode);
````

<style>
#scaffold-src-components-PageHeader-demo-image .imgContainer {
	text-align: center;
}
#scaffold-src-components-PageHeader-demo-image .link {
	margin-top: 16px;
}
#scaffold-src-components-PageHeader-demo-image .link a {
  margin-right: 32px;
}
#scaffold-src-components-PageHeader-demo-image .link img {
  vertical-align: middle;
  margin-right: 8px;
}
</style>

