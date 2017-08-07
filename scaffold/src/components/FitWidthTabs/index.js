import React, { Component } from 'react';
import { Tabs } from 'antd';

class FitWidthTabs extends Component {
  state = {
    width: undefined,
  }

  componentDidMount() {
    if (this.node) {
      const width = this.node.offsetWidth;
      /* eslint react/no-did-mount-set-state:0 */
      this.setState({
        width,
      });
    }
  }

  handleRef = (n) => {
    this.node = n;
  }

  render() {
    const { width } = this.state;
    const { style, children, ...rest } = this.props;

    return (
      <div style={{ ...style, width }} ref={this.handleRef}>
        {
          width && <Tabs
            defaultActiveKey="1"
            {...rest}
          >
            {children}
          </Tabs>
        }
      </div>
    );
  }
}

export default FitWidthTabs;
