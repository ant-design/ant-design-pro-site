import React, { PureComponent } from 'react';

class Iframe extends PureComponent {
  componentDidMount() {
    const host = window.location.host;

    let assets = {
      css: '/s.css',
      js: '/s.js',
    };

    if (/(127\.0\.0\.1)|localhost/ig.test(host)) {
      assets = {
        css: 'http://localhost:8000/index.css',
        js: 'http://localhost:8000/index.js',
      };
    }

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Ant Design Admin</title>
          <link rel="stylesheet" href="${assets.css}"/>
    </head>
    <body>
    <div id="root"></div>
    <script src="${assets.js}"></script>
    </body>
    </html>`;

    this.node.contentWindow.document.write(html);
    this.node.contentWindow.document.close();
  }

  render() {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    };
    return (
      <div style={style}>
        <iframe
          title="scaffold-iframe"
          frameBorder="0"
          style={{
            border: 'none',
            width: '100%',
            height: '100%',
          }}
          ref={n => this.node = n}
        />
      </div>
    );
  }
}

export default Iframe;
