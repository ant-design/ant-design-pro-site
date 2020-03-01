---
order: 7
title: ProTable 快速搭建 CRUD 的利器
type: Blog
time: 2020-03-01
---

大部分中后台页面都是非常同质化的 CRUD 组成的，很多时候都是一个 Table, 然后提供一些操作按钮，并且有一个新增表单。看起来就像这样：

![0BAFCFEF-9EA2-4DB7-A36D-4D5A092BCC30.png](https://cdn.nlark.com/yuque/0/2020/png/84868/1582038656687-065b40ef-5029-4bf7-8941-6e843570e4e0.png#align=left&display=inline&height=409&name=0BAFCFEF-9EA2-4DB7-A36D-4D5A092BCC30.png&originHeight=1706&originWidth=2822&size=595928&status=done&style=none&width=677)

## 🤷‍♂️ 为什么要做 ProTable

antd 作为服务于企业级产品的设计体系的组件库，已经提供了强大的 Table，但是业务的不同导致我们仍有需要进行一些定制，不同的单元格有很多不同的数据格式，金额，日期，数字等，包括一些常用的操作，页码切换时的重新请求，刷新数据等，这些都是很简单的重复劳动,但是却不可避免。

ProTable 就是为了解决这些问题，在 Table 的层面上提供了一些预设，你可以通过 [`valueType` ](https://protable.ant.design/value-type)来支持各种类型的数据，预设了 金额，日期，序号，进度条 等多种类型，并且支持通过  `valueEnum`  来映射枚举，解决非常烦人的各种枚举配置，可以大大的简化代码。

```typescript
const columns = [
  {
    title: '状态',
    dataIndex: 'status',
    initialValue: 'all',
    width: 100,
    valueEnum: {
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
];
```

ProTable 接管了翻页，页码改变等事件，理论上你只要有配置列和 request 属性，就可以生成一个全功能的表格，完成分页查询，刷新，列属性修改等功能。

在很多项目中 Table 的操作按钮与标题的位置都会不一致，即使是一个项目中也可以能有一些不同，ProTable 提供了相应的规范，toolBarRender 与  headerTitle 实现了规范，toolBarRender 支持返回一个 ReactNode 数组，会自动的增间隔等样式，toolBarRender 提供 action 与当前选中的列等数据，方便进行一些快捷的操作。代码看起来是这样的

```typescript
toolBarRender = (_, { selectedRowKeys }) => [
  <Button key="3" type="primary">
    <PlusOutlined />
    新建
  </Button>,
  selectedRowKeys && selectedRowKeys.length && (
    <Button
      key="3"
      onClick={() => {
        window.alert(selectedRowKeys.join('-'));
      }}
    >
      批量删除
    </Button>
  ),
];
```

## 🦄 更多的功能

一个完整的页面除了 Table 之外，还需要一个查询表单，查询表单很大程度上也是根据列来生成的，有些表单几乎和列是一一对应的。为了减少这部分的工作量，ProTable 会通过列的配置来自动生成查询表单。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/84868/1582127528798-704c4833-955e-4020-9f41-5206c42f2389.png#align=left&display=inline&height=240&name=image.png&originHeight=480&originWidth=1128&size=33714&status=done&style=none&width=564)

根据不同的值类型，表单会生成不同的输入框，查询成功之后的数据会通过  request 的 params 参数自动发起查询，无需进行任何的数据绑定。

如果你的表单比较简单，没有过多的特殊组件，或者你自行封装了很多符合 antd 表单的组件(指拥有受控的 value 和 onChange 方法)，你可以通过  renderFormItem 来自行生成表单元素, 然后配置  `type=Form`，就可以生成一个添加表单。

![image.png](https://cdn.nlark.com/yuque/0/2020/png/84868/1582130440043-71722655-42e6-4698-a37a-14d69f6008b8.png#align=left&display=inline&height=436&name=image.png&originHeight=872&originWidth=856&size=36866&status=done&style=none&width=428)

这样就可以用极低成本来实现一个 完整的 CRUD 界面，早日完成需求，早点下班。

官网：[https://protable.ant.design/](https://protable.ant.design/)

Ant Design Table [https://ant.design/components/table](https://ant.design/components/table-cn/)
