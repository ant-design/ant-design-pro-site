---
order: 31
title: TypeScript
type: 编码规范
---

Pro 中是用 TypeScript 来作为默认的开发语言，TypeScript 的好处已经无须赘述，无论是开发成本还是维护成本都能大大减少，是中后台开发的必选。这里分几个维护来聊一下 Pro 中对于 TypeScript 的最佳实践。

## 定义接口数据

任何一个项目都离不开对数据和接口的处理，拼接数据和接口是形成业务逻辑也是前端的主要工作之一，将接口返回的数据定义 TypeScript 类型可以减少很多维护成本和查询 api 的时间。

在 Pro 推荐在 `src/services/API.d.ts` 中定义接口数据的类型，以用户基本信息为例：

```typescript
declare namespace API {
  // 用户基本信息
  export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    unreadCount?: number;
  }
}
```

> 很多项目中是没有类型定义的，这里推荐 [json2ts](http://json2ts.com/) 等网站来自动转化。

在使用时我们就可以很简单的来使用, `d.ts` 结尾的文件会被 TypeScript 默认导入到全局，但是其中不能使用 `import` 语法，如果需要引用需要使用三斜杠。

```typescript
export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

// props
export interface UserProps {
  userInfo: API.CurrentUser;
}
```

## 为 Window 增加参数

前端开发很大程序上就是与 Window 打交道，有时候我们不得不给 Window 增加参数，例如各种统计的代码。在 TypeScript 中提供一个方式来增加参数。在 `/src/typings.d.ts` 中做如下定义：

```typescript
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string,
  ) => void;
  reloadAuthorized: () => void;
}
```

如果不想在 Window 中增加，但是想要全局使用，比如通过 define 注入的参数，我们通过 `declare` 关键字在 `/src/typings.d.ts` 注入。

```typescript
declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
```

> 这些样例都可以在 `/src/typings.d.ts` 中看到。

## 组件的类型

antd 是非常方便的一套 UI 库，为了更好的使用它，我们需要了解它的一些类型。

### Form

Form 中的常用的类型很多，大部分都可以从 `'antd/es/form` 中导出，这里介绍几个最常用的。

antd@4 中使用 `Form.useForm()` 生成的 form 类型就是 `FormInstance`。FormItemProps 也是比较常用的类型，我们可以用这个类型来封装 `FormItem` , 增加自己的逻辑。

```typescript
import { FormInstance, FormItemProps } from 'antd/es/form';

const [form] = Form.useForm();

//  保存 ref
const ref = useRef<FormInstance>();
ref.current = form;
```

由于 form 的多变性，`form.getFieldsValue();` 返回的值都是 `Store` 类型，我们可以直接 `as` 为自己想要参数。

```typescript
const user = form.getFieldsValue() as API.CurrentUser;
```

### Table

这里推荐使用 ProTable，类型比较清晰，常用类型的示例。

```typescript
import { ProColumns, ActionType } from '@ant-design/pro-table';

const columns: ProColumns<API.CurrentUser>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    hideInSearch: true,
  },
];

const actionRef = useRef<ActionType>();

export default <ProTable actionRef={actionRef} />;
```

另外 `TablePaginationConfig` 和 `TableRowSelection` 比较常用，这两个都是泛型使用的时候要特别注意。

```typescript
import { TablePaginationConfig } from 'antd/es/table/Table';
import { TableRowSelection } from 'antd/es/table/interface';

const pagination: TablePaginationConfig = {
  pageSize: 20,
  total: 2000,
  onChange: (current) => {},
};

const rowSelection: TableRowSelection = {
  selectedRowKeys: [],
  onChange: (keys, rows) => {},
};
```

## 一些小坑

### React.ReactText[]

`string[]|number[]` 与 `(string|number)[]`并不相同，这种时候直接使用 `React.ReactText[]` 就好了。

### React.forwardRef

如果我们使用 function 组件，可能会报错 ref 找不到，这时候我们就需要使用 `React.forwardRef`,但是要注意的是 类型也要做相应的修改。

```typescript
- React.FC<CategorySelectProps>
+ React.ForwardRefRenderFunction<HTMLElement, CategorySelectProps>
```

### 动态增加

有时候我需要对一个 Object 的 key 进行动态的更新，为了方便我们可以对 key 设置为 any，这样就可以使用任何 key，多余 JSON.parse

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}
```

### 值可以为 null 或 undefined

在 3.8 中已经很简单了，`obj?.xxx` 即可。

### 某个库不存在 typescript 的定义

我们可以直接将其定义为 any。

```typescript
declare module 'xxx';

import xxx from 'xxx';
```

### @ts-ignore

有些时候类型错误是组件的，但是看起来非常难受。会一直编译报报错，这里就可以使用 `@ts-ignore` 来暂时忽略它。

```typescript
// @ts-ignore
xxxx;
```

TypeScript 毕竟是一个标注语言，在需要使用 any 的时候不必吝于使用 any，在遇到动态性比较强的代码，不妨使用 `as unknown as XXX`, 可以节省很多时间。
