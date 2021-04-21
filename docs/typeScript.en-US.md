---
order: 31
title: TypeScript
type: Code Style
---

Pro uses TypeScript as the default development language. The benefits of TypeScript need not be described in detail. Both development and maintenance costs can be greatly reduced, and it is a must for mid- and back-end development. Here are a few maintenance to talk about the best practices for TypeScript in Pro.

## Define interface data

Any project is inseparable from the processing of data and interfaces. Splicing data and interfaces is one of the main tasks of forming business logic and front-end. Defining the TypeScript type of data returned by the interface can reduce a lot of maintenance costs and query API time.

In Pro, it is recommended to define the type of interface data in `src/services/API.d.ts`. Taking user basic information as an example:

```typescript
declare namespace API {
  // Basic user information
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

> In many projects, there is no type definition. Here we recommend [json2ts](http://json2ts.com/) and other websites to automatically convert.

When using it, we can use it very easily. The files ending in `d.ts` will be imported into the world by TypeScript by default, but the`import` syntax cannot be used. If you need to quote, you need to use three slashes.

```typescript
export async function query() {
  return request<API.CurrentUser[]>('/ api/users');
}

// props
export interface UserProps {
  userInfo: API.CurrentUser;
}
```

## Add parameters for Window

The front-end development is very large program is dealing with Window, sometimes we have to add parameters to Window, such as various statistical code. Provide a way to add parameters in TypeScript. Define the following in `/ src/typings.d.ts`:

```typescript
interface Window {
  ga: (command: 'send', hitType: 'event' | 'view', fieldsObject: GAFieldsObject | string) => void;
  reloadAuthorized: () => void;
}
```

If you don't want to add it in Window, but want to use it globally, for example, parameters injected through define, we inject it in `/ src/typings.d.ts` through the`declare` keyword.

```typescript
declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
```

> These examples can be seen in `/ src/typings.d.ts`.

## Types of components

Antd is a very convenient set of UI library, in order to use it better, we need to understand some of its types.

### Form

There are many common types in Form, most of which can be exported from `'antd/es/form`, here are a few of the most commonly used ones.

The form type generated in antd @ 4 using `Form.useForm ()` is `FormInstance`. FormItemProps is also a commonly used type. We can use this type to encapsulate FormItem and add our own logic.

```typescript
import { FormInstance, FormItemProps } from 'antd/es/form';

const [form] = Form.useForm();

// save ref
const ref = useRef<FormInstance>();
ref.current = form;
```

Due to the variability of form, the values ​​returned by `form.getFieldsValue ();` are all of type `Store`, and we can directly`as` for the parameters we want.

```typescript
const user = form.getFieldsValue() as API.CurrentUser;
```

### Table

ProTable is recommended here, the type is relatively clear, and examples of commonly used types.

```typescript
import { ProColumns, ActionType } from '@ ant-design/pro-table';

const columns: ProColumns<API.CurrentUser>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    hideInSearch: true,
  },
];

const actionRef = useRef<ActionType>();

export default <ProTable actionRef={actionRef} />;
```

In addition, `TablePaginationConfig` and`TableRowSelection` are more commonly used. Special care should be taken when these two are generic types.

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

## Some small pits

### React.ReactText[]

`string[] | number[]` is not the same as `(string | number)[]`, in this case, just use `React.ReactText[]` just fine.

### React.forwardRef

If we use the function component, we may report an error that ref cannot be found. At this time, we need to use `React.forwardRef`, but it should be noted that the type also needs to be modified accordingly.

```typescript
- React.FC <CategorySelectProps>
+ React.ForwardRefRenderFunction <HTMLElement, CategorySelectProps>
```

### Dynamic increase

Sometimes I need to dynamically update the key of an Object. For convenience, we can set the key to any, so that any key can be used, excess JSON.parse

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}
```

### Value can be null or undefined

In 3.8 it is already easy, just `obj?.Xxx`.

### There is no typescript definition for a library

We can directly define it as any.

```typescript
declare module 'xxx';

import xxx from 'xxx';
```

### @ ts-ignore

Sometimes the type error is component, but it looks very uncomfortable. Will always compile and report errors, here you can use `@ts-ignore` to temporarily ignore it.

```typescript
// @ts-ignore
xxxx;
```

After all, TypeScript is a markup language. You do n’t have to be stingy with any when you need to use any. When you encounter more dynamic code, you might as well use `as unknown as XXX`.
