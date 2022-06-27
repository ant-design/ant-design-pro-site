---
title: GaussianBackground
---

# GaussianBackground 呼吸色背景

## 在线编辑器

https://tools.antfin-inc.com/kitchen-tools/gaussian

## 使用示例

```jsx
import React from 'react';
import { GaussianBackground } from '@alipay/gaussian-background';

const colors = [
  { color: '#2f54eb', orbs: 4, radius: 16, maxVelocity: 0.2 },
  { color: '#1890ff', orbs: 4, radius: 8, maxVelocity: 0.2 },
  { color: '#fadb14' },
];

export default () => <GaussianBackground colors={colors} />;
```

<API src="/GaussianBackground.tsx"></API>

## 颜色序列

```js
const colors = [
  { color: '#2f54eb', orbs: 4, radius: 16, maxVelocity: 0.2 },
  { color: '#1890ff', orbs: 4, radius: 8, maxVelocity: 0.2 },
  { color: '#fadb14' },
];
```

<API src="/Color.tsx"></API>
