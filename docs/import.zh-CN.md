---
order: 8
title: 引入外部模块
type: 开发
---

除了 antd 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部模块，这里以引入富文本组件 [react-quill](https://www.npmjs.com/package/react-quill) 为例进行介绍。

## 引入依赖

在终端输入下面的命令完成安装：

```bash
$ npm install react-quill --save
```

> 加上 `--save` 参数会自动添加依赖到 package.json 中去。

## 使用

直接贴代码了：

```jsx
import React from 'react';
import { Button, notification, Card } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class NewPage extends React.Component {
  state = {
    value: 'test',
  };

  handleChange = value => {
    this.setState({
      value,
    });
  };

  prompt = () => {
    notification.open({
      message: 'We got value:',
      description: <span dangerouslySetInnerHTML={{ __html: this.state.value }} />,
    });
  };

  render() {
    return (
      <Card title="富文本编辑器">
        <ReactQuill value={this.state.value} onChange={this.handleChange} />
        <Button style={{ marginTop: 16 }} onClick={this.prompt}>
          Prompt
        </Button>
      </Card>
    );
  }
}
```

<img alt="富文本" src="https://gw.alipayobjects.com/zos/rmsportal/rHQRmMxAbSOCsEFungwd.png" />

这样就成功引入了一个富文本组件。有几点值得注意：

- import 时需要注意组件暴露的数据结构；
- 有一些组件需要额外引入样式，比如本例。
