import React from 'react';

export default class BrowserFrame extends React.Component {
  componentDidMount() {
    const { isDev, root } = this.props.themeConfig;
    // hack to change iframe style loading
    if (this.node) {
      const iframes = this.node.getElementsByTagName('iframe') || [];
      const iframe = iframes[0];
      if (iframe) {
        iframe.contentWindow.document.body.style.opacity = 0;
        iframe.onload = () => {
          const h = iframe.contentWindow.document.head;
          const links = h.getElementsByTagName('link');
          links[0].setAttribute('href', `${(!isDev && root) || '../'}index-1.css`);
          links[1].setAttribute('href', `${(!isDev && root) || '../'}index-2.css`);
          links[2].setAttribute('href', `${(!isDev && root) || '../'}index-3.css`);
          links[2].onload = () => {
            iframe.contentWindow.document.body.style.opacity = 1;
          };
        };
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
