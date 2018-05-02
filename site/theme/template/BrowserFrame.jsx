import React from 'react';

export default class BrowserFrame extends React.Component {
  getNode = n => {
    this.node = n;
  };

  render() {
    const { children } = this.props;
    return (
      <div ref={this.getNode} className="browser-mockup with-url">
        {children}
      </div>
    );
  }
}
