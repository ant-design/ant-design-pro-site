---
category: Components
type: General
title: PageHeader 
subtitle: 页头
cols: 1
---

页头用来声明页面的主题，包含了用户所关注的最重要的信息，使用户可以快速理解当前页面是什么以及它的功能。

## API

### 用法

```jsx
const logo = <Icon type="home" />
const action = <Button>agree</Button>
const tabList = [
	{key: 'tab1', tab: 'tab1 title'}, 
	{key: 'tab2', tab: 'tab2 title'},
	{key: 'tab3', tab: 'tab3 title'},
]

<PageHeader title="标题" logo={logo} action={action} content="content" extraContent="extra">
	<PageHeader.Breadcrumb routes=... params=...  />
	<PageHeader.Tabs tabList={tabList} onChange=... />
</PageHeader>
```

### PageHeader

整体页头。

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| title | title 区域 | ReactNode | - |
| logo | logo区域 | ReactNode | - |
| action | 操作区，位于 title 行的行尾 | ReactNode | - |
| content | 内容区 | ReactNode | - |
| extraContent | 额外内容区，位于content的右侧 | ReactNode | - |

### PageHeader.Breadcrumb

页头面包屑，用法同 [antd-Breadcrumb](https://ant.design/components/breadcrumb/)。

### PageHeader.Tabs

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| tabList | tab 标题列表 | array<{key: string, tab: ReactNode}> | -  |
| onChange | 切换面板的回调 | (key) => void | -  |
