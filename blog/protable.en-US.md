---
order: 7
title: Quickly Builds CRUD's
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2020-03-01
---

Most background pages are made up of very homogenized CRUDs, many times a Table, then provide some action buttons and have a new form. It looks like this:

![0BAFCFEF-9EA2-4DB7-A36D-4D5A092BCC30.png](https://gw.alipayobjects.com/zos/antfincdn/w6XCWacQH6/1582038656687-065b40ef-5029-4bf7-8941-6e843570e4e0.png)

## 🤷‍♂️ Why Do You Make ProTable

Antd, as a component library serving the design system for enterprise-class products, has provided a powerful Table, but the differences in business still require some customization, with many different data formats, amounts, dates, numbers, etc., including some commonly used operations, page number switching, re-requests, Refreshing data, etc., these are easy duplications, but they are inevitable.

ProTable is designed to address these issues by providing presets at the Table level that you can support [`valueType` ](https://procomponents.ant.design/components/tablevalue-type) of data, such as amounts, dates, serial numbers, progress bars, etc., and can greatly simplify the code with the hashtags `valueEnum`.

```tsx | pure
const columns = [
  {
    title: 'status',
    dataIndex: 'status',
    initialValue: 'all',
    width: 100,
    valueEnum: {
      close: { text: 'Close', status: 'Default' },
      running: { text: 'Processing', status: 'Processing' },
      online: { text: 'Online', status: 'Success' },
      error: { text: 'Error', status: 'Error' },
    },
  },
];
```

ProTable takes over page-turning, page code changes, and in theory you can generate a full-featured table with configuration columns and request properties, complete paginated queries, refreshes, column property modifications, and more.

In many projects Table's action buttons and title positions are inconsistent, even in a project can be somewhat different, ProTable provides the corresponding specifications, toolBarRender and headerTitle implementation specification, toolBarRenderRender Supports the return of an ReactNode array, automatic additions and other styles, and toolBarRender provides data such as actions and columns currently selected for some quick action. The code looks like this.

```tsx | pure
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
      Bulk deletion
    </Button>
  ),
];
```

## 🦄 更多的功能

A complete page requires a query form in addition to Table, which is largely generated from columns, some of which correspond almost to the column. To reduce this amount of work, ProTable automatically generates query forms through the configuration of columns.

![image.png](https://gw.alipayobjects.com/zos/antfincdn/aIkGYS0KvN/1582127528798-704c4833-955e-4020-9f41-5206c42f2389.png)

Depending on the value type, the form generates different input boxes, and the data that succeeds automatically initiates the query through the params parameter of the request, without any data binding.

If your form is easy, there aren't too many special components, or you've encapsulated a lot of antd-compliant components (i.e. having a controlled value and onChange method), you can generate form elements from rows from the renderFormItem, and then configure 'type-FormForm' 'You can generate an add form.

![image.png](https://gw.alipayobjects.com/zos/antfincdn/p3YxxMOlwz/1582130440043-71722655-42e6-4698-a37a-14d69f6008b8%252520%281%29.png)

This allows you to achieve a complete CRUD interface at very low cost, complete your needs early and leave work early.。

Website：[https://procomponents.ant.design/components/table](https://procomponents.ant.design/components/table)

Ant Design Table [https://ant.design/components/table](https://ant.design/components/table-cn/)
