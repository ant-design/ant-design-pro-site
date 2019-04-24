---
order: 7
title: 使用 TypeScript
type: 进阶
---

TypeScript is a superset of javascript that adds a lot of useful features compared to javascript:

- 类型批注和编译时类型检查
- 类型推断
- 类型擦除
- 接口
- 枚举
- Mixin
- 泛型编程
- 名字空间
- 元组
- Await

使用 TypeScript 对 IDE 会更加友好，如果你是用 vscode 开发的，那么你的开发体验将会显著提升。基于 umi 的特性，我们可以很容易的在 Pro 中使用。 Pro 中自带了 TypeScript 所需的配置文件.

- tsconfig.js
- tslint.json

tsconfig 会声明这是一个 TypeScript 的项目，其中会进行一些配置，详细内容可以看[这里](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。 tslint 类似 eslint 将会检查你的代码，为了提升体验，可以一并安装 vscode 的 tslint 插件。接下来我们只要直接新建 tsx 文件，就可以开始 TypeScript 开发了。

### 常见问题

#### 在 css-module 中使用

由于 Pro 使用了 css-module，你可能需要

```jsx
import style from './index.style.less';
```

这时候 typescript 会报错，你可以 使用

```jsx
const style = require('./index.less');
```

避开这个问题。社区有很多相关讨论，暂时没有最好的办法，只有相对完美的 [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader)，同理导入图片，css，svg 也可以通过这种方式避开类型检查。

#### Form.create()

在 TypeScript 中使用 Form.create() 可能会抛出类似下面的错误：

```bash
error TS2339: Property 'loading' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Compone
nt<{}, ComponentState>> & Readonly<{ childr...'.
```

这是因为 props 的类型没有通过检查，以下是正确的方式

```tsx
import { FormComponentProps } from "antd/lib/form/Form";

interface IFormComponentProps extends FormComponentProps {
  test: string;
}

class FormComponent extends React.Component<IFormComponentProps> {
  constructor(props: IFormComponentProps) {
    super(props);
    ....
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return ....;
  }
}
```

#### 没有描述文件的仓库

在实际使用有些库并没有相关的 d.ts,这个时候我们可以直接在使用的文件中定义，以高德地图为例。

```tsx
import React from 'react';

// 定义 Map 的 类型
declare class GaoDeAMap {
  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });
  public destroy(): void;
}

// 定义全局的 AMap
declare const AMap: {
  Map: typeof GaoDeAMap;
};

// tslint:disable-next-line:max-classes-per-file
class MapComponent extends React.Component {
  public mapDom: HTMLDivElement;
  public map: GaoDeAMap;
  public componentDidMount() {
    const map = new AMap.Map(this.mapDom, {
      center: [117.000923, 36.675807],
      zoom: 11,
    });
    this.map = map;
  }
  public componentWillUnmount() {
    this.map.destroy();
  }
  public render() {
    return <div ref={ref => (this.mapDom = ref)} />;
  }
}

export default MapComponent;
```

如果要多次使用，可以建立一个 namespace，

```ts
declare namespace AMap {
  class Map {
    constructor(
      container: HTMLElement,
      option: { center: [number, number]; zoom: number }
    )
    public destroy(): void
  }
}

export = AMap
export as namespace
```

然后在项目中直接引入就可以了。

```tsx
import AMapInterface from './AMap';
`
declare const AMap: typeof AMapInterface;
```
