---
order: 7
title: Use TypeScript
type: Advanced
---

TypeScript is a superset of javascript that adds a lot of useful features to javascript:

- Type annotations and compile-time type checking
- Type inference
- Type erasure
- Interfaces
- Enumerated types
- Generics
- Namespaces
- Tuples
- Async/await

Using TypeScript is more friendly to the IDE. If you are developing with vscode, your development experience will be significantly improved. Based on the characteristics of umi, we can easily use it in Pro.

Pro comes with the configuration files required by TypeScript.

- tsconfig.json
- tslint.json

Tsconfig will declare that this is a TypeScript project, which will do some configuration, the details can be seen [here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html). Tslint like eslint will check your code. To improve the experience, you can install vscode's tslint plugin. Next, we can start TypeScript development by just creating a new tsx file.

### FAQ

#### Used in css-module

Because Pro uses css-module, you may need

```jsx
import style from './index.style.less';
```

At this time typescript will throw an error, you can use

```jsx
const style = require('./index.less');
```

Avoid this problem. There are many related discussions in the community. There is no best way for the time being. Only the relatively perfect [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader), Similarly, importing images, css, svg can also avoid type checking in this way.

#### Form.create()

Using Form.create() in TypeScript may throw an error similar to the following:

```bash
error TS2339: Property 'loading' does not exist on type 'IntrinsicAttributes & IntrinsicClassAttributes<Compone
nt<{}, ComponentState>> & Readonly<{ childr...'.
```

This is because the type of props did not pass the check, the following is the correct way.

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

#### Use a library without d.ts

In the actual use of some libraries and there is no relevant d.ts, this time we can directly define in the file used, taking the high German map as an example.

```tsx
import React from 'react';

// Define the type of Map
declare class GaoDeAMap {
  constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });
  public destroy(): void;
}

// Define global AMap
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

If you want to use it multiple times, you can create a namespace.

```ts
declare namespace AMap {
  class Map {
    constructor(container: HTMLElement, option: { center: [number, number]; zoom: number });
    public destroy(): void;
  }
}

export = AMap;
export as namespace AMap;
```

Then just introduce it directly in the project.

```tsx
import AMapInterface from './AMap';

declare const AMap: typeof AMapInterface;
```
