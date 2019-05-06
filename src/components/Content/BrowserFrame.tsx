import React from 'react';

export default class BrowserFrame extends React.Component {
  node: HTMLDivElement;
  getNode = (n: HTMLDivElement) => {
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
