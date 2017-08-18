---
order: 2
title: 带浮层卡片
---

使用卡片展现多种类型的通知。

````jsx
import { NoticeIcon } from 'ant-design-pro';

ReactDOM.render(
  <NoticeIcon count={10}>
    <NoticeIcon.Tab list={[ ... ]} loading={loading} onClear={ ... }>通知（4）</NoticeIcon.Tab>
    <NoticeIcon.Tab list={[ ... ]} loading={loading} onClear={ ... }>消息（4）</NoticeIcon.Tab>
    <NoticeIcon.Tab list={[ ... ]} loading={loading} onClear={ ... }>待办（4）</NoticeIcon.Tab>
  </NoticeIcon>
, mountNode);
````
