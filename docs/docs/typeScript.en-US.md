---
order: 31
title: TypeScript
group:
  title: Quality
nav:
  title: Documents
  path: /docs
  order: 1
---

In Pro, TypeScript is used as the default development language. The benefits of TypeScript are no longer necessary. Both development costs and maintenance costs can be greatly reduced. It is a must for middle and back-end development. Here are several dimensions to talk about the best practices for TypeScript in Pro.

## When is type recommended and when is interface used?

It is recommended to use type at all times. Type is more like a variable. Compared with interface, the characteristics of type are as follows:

-The expression function is more powerful, not limited to object/class/function -To extend an existing type, a new type needs to be created, and the name cannot be duplicated -Support more complex type operations

Basically all types expressed with interface have their equivalent type expressions. In the course of practice, we also found that a type can only be expressed by interface, but cannot be expressed by type, that is, attaching attributes to functions.

```tsx | pure
interface FuncWithAttachment {
  (param: string): boolean;
  someProperty: number;
}

const testFunc: FuncWithAttachment = {};
const result = testFunc('mike'); // Type reminder
testFunc.someProperty = 3; // Type reminder
```

## Define interface data

Any project is inseparable from the processing of data and interfaces. Splicing data and interfaces is one of the main tasks of forming business logic and front-end. Defining the TypeScript type of data returned by the interface can reduce a lot of maintenance costs and the time of querying apis.

In Pro, it is recommended to define the type of interface data in `src/services/API.d.ts`. Take basic user information as an example:

```tsx | pure
declare namespace API {
  // Basic user information
  export type CurrentUser = {
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
  };
}
```

> There are no type definitions in many projects, and websites such as [json2ts](http://json2ts.com/) are recommended for automatic conversion.

We can use it easily when using it. Files ending with `d.ts` will be imported to the global by TypeScript by default, but the `import` syntax cannot be used. If you need to quote, you need to use triple slashes.

```tsx | pure
export async function query() {
  return request<API.CurrentUser[]>('/api/users');
}

// props
export type UserProps = {
  userInfo: API.CurrentUser;
};
```

## Generic

We don't recommend writing generics when developing in industry code, but in order to get a better typescript experience, we may need to understand the generic tips of commonly used component libraries. Here is a brief list.

```tsx | pure
import ProForm from '@ant-design/pro-form';
import ProTable, { ActionType } from '@ant-design/pro-table';
import React, { useState, useRef } from 'react';

type DataType = {};

const Page = () => {
  // The generic type of useState will become the type of state
  const [state, setState] = useState<string>('');
  // The type of useRef will be set to the type of actionRef.current
  const actionRef = useRef<ActionType>();

  // click uses React.MouseEvent plus dom type generic
  // HTMLInputElement represents the input tag Another commonly used one is HTMLDivElement
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {};
  // onChange uses React.ChangeEvent plus dom type generic
  // Generally HTMLInputElement, HTMLSelectElement may also be used
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <>
      {'ProForm sets generics to agree on the parameter types of interfaces such as onFinish'}
      <ProForm<DataType> />
      {`
       DataType sets the type of row in render,
       Params is the submission type of the parameter
       ValueType represents a custom valueType type, ProTable will automatically merge
     `}
      <ProTable<DataType, Params, ValueType> />
      <input onClick={onClick} onChange={onChange} />
    </>
  );
};
```

## Define n ways to write a component

```tsx | pure
const WrapComponent: React.FC<ExtendedProps> = (props) => {
  // return ...
};

export default WrapComponent;

// or
export default function (props: React.PropsWithChildren<SpinProps>) {
  // return ...
}
```

## umi common types

Umi has helped us to encapsulate in many places. If we know the specific type, we can reduce a lot of any.

### Page related

`IRouteComponentProps` is the props type of the component configured in `config.ts`, which brings some react-router related props

```tsx | pure
export interface IRouteComponentProps<
  Params extends { [K in keyof Params]?: string } = {},
  Query extends { [K in keyof Query]?: string } = {}
> {
  children: JSX.Element;
  location: Location & { query: Query };
  route: IRoute;
  routes: IRoute[];
  history: History;
  match: match<Params>;
}
```

We can use it like this in the page:

```tsx | pure
import React from 'antd';
import { IRouteComponentProps } from 'umi';

const Page: React.FC<IRouteComponentProps> = () => {
  return <Layout />;
};
```

## Add parameters for Window

Front-end development is largely about dealing with Window. Sometimes we have to add parameters to Window, such as various statistical codes. Provide a way to add parameters in TypeScript. Define as follows in `/src/typings.d.ts`:

```tsx | pure
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string,
  ) => void;
  reloadAuthorized: () => void;
}
```

If you don't want to add it in Window, but want to use it globally, such as parameters injected via define, we inject it in `/src/typings.d.ts` via the `declare` keyword.

```tsx | pure
declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
```

> These examples can all be seen in `/src/typings.d.ts`.

## Type of component

Antd is a very convenient set of UI libraries. In order to use it better, we need to understand some of its types.

### Form

There are many commonly used types in Form, and most of them can be derived from `'antd/es/form`. Here are some of the most commonly used ones.

The form type generated by using `Form.useForm()` in antd@4 is `FormInstance`. FormItemProps is also a commonly used type. We can use this type to encapsulate `FormItem` and add our own logic.

```tsx | pure
import { FormInstance, FormItemProps } from 'antd/es/form';

const [form] = Form.useForm();

// save ref
const ref = useRef<FormInstance>();
ref.current = form;
```

Due to the variability of form, the values ​​returned by `form.getFieldsValue();` are all of the `Store` type, so we can directly `as` as we want parameters for ourselves.

```tsx | pure
const user = form.getFieldsValue() as API.CurrentUser;
```

### Table

ProTable is recommended here, the types are relatively clear, examples of commonly used types.

```tsx | pure
import { ProColumns, ActionType } from '@ant-design/pro-table';

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

In addition, `TablePaginationConfig` and `TableRowSelection` are more commonly used. Special attention should be paid when using both of these generic types.

```tsx | pure
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

`string[]|number[]` is not the same as `(string|number)[]`, in this case, just use `React.ReactText[]` directly.

### React.forwardRef

If we use the function component, it may report an error that ref cannot be found. At this time, we need to use `React.forwardRef`, but it should be noted that the type must also be modified accordingly.

```diff
- React.FC<CategorySelectProps>
+ React.ForwardRefRenderFunction<HTMLElement, CategorySelectProps>
```

### Dynamic increase

Sometimes I need to dynamically update the key of an Object. For convenience, we can set the key to any, so that any key can be used, and JSON.parse is unnecessary.

```tsx | pure
type Person = {
  name: string;
  age?: number;
  [propName: string]: any;
};
```

### Value can be null or undefined

It's very simple in 3.8, just `obj?.xxx`.

### There is no typescript definition in a library

We can directly define it as any.

```tsx | pure
declare module 'xxx';

import xxx from 'xxx';
```

### @ts-ignore

Sometimes the type error is component, but it looks very uncomfortable. It will always compile and report errors, so you can use `@ts-ignore` to ignore it temporarily.

```tsx | pure
// @ts-ignore
xxxx;
```

After all, TypeScript is a markup language. When you need to use any, you don't need to be hesitant to use any. When encountering dynamic code, you might as well use `as unknown as XXX`, which can save a lot of time.
