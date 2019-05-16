---
order: 8
title: Import Module
type: Development
---

In addition to the antd components and the built-in business components of the scaffold, sometimes we need to introduce other external modules. Here we introduce the rich text component [react-quill](https://www.npmjs.com/package/react-quill) as an example.

## Introduce Dependencies

Enter the following command at the terminal to complete the installation:

```bash
$ npm install react-quill --save
```

> Adding the `--save` parameter automatically adds dependencies to package.json.

## Use

Directly paste the code:

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
      <Card title="Rich text editor">
        <ReactQuill value={this.state.value} onChange={this.handleChange} />
        <Button style={{ marginTop: 16 }} onClick={this.prompt}>
          Prompt
        </Button>
      </Card>
    );
  }
}
```

<img alt="Rich text" src="https://gw.alipayobjects.com/zos/rmsportal/rHQRmMxAbSOCsEFungwd.png" />

This successfully introduced a rich text component. There are several points worth noting:

- import requires attention to the data structure exposed by the component;
- Some components require additional styles, such as this one.
