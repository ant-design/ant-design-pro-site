import React from 'react';

export default class BrowserFrame extends React.Component {
  componentDidMount() {
    // hack to change iframe style loading
    if (this.node) {
      const iframes = this.node.getElementsByTagName('iframe') || [];
      const iframe = iframes[0];
      if (iframe) {
        iframe.onload = () => {
          const h = iframe.contentWindow.document.head;
          const links = h.getElementsByTagName('link');
          links[0].setAttribute('href', '../index-3.css');
        }
      }
    }
  }

  getNode = (n) => {
    this.node = n;
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={this.getNode} className="browser-mockup with-url">
        {children}
      </div>
    );
  }
}
