// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-danger */
import React from 'react';

export default function HTML(props) {
  return (
    // eslint-disable-next-line jsx-a11y/html-has-lang
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            function isLocalStorageNameSupported() {
              var testKey = 'test';
              var storage = window.localStorage;
              try {
                storage.setItem(testKey, '1');
                storage.removeItem(testKey);
                return true;
              } catch (error) {
                return false;
              }
            }
            // 优先级提高到所有静态资源的前面，语言不对，加载其他静态资源没意义
            var pathname = location.pathname;
        
            function isZhCN(pathname) {
              return /-cn\\/?$/.test(pathname);
            }
            function getLocalizedPathname(path, zhCN) {
              var pathname = path.startsWith('/') ? path : '/' + path;
              if (!zhCN) { // to enUS
                return /\\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '');
              } else if (pathname === '/') {
                return '/index-cn';
              } else if (pathname.endsWith('/')) {
                return pathname.replace(/\\/$/, '-cn/');
              }
              return pathname + '-cn';
            }
            // 首页无视链接里面的语言设置 https://github.com/ant-design/ant-design/issues/4552
            if (isLocalStorageNameSupported() && (pathname === '/' || pathname === '/index-cn')) {
              var lang = (window.localStorage && localStorage.getItem('locale')) || (navigator.language.toLowerCase() === 'zh-cn' ? 'zh-CN' : 'en-US');
              // safari is 'zh-cn', while other browser is 'zh-CN';
              if ((lang === 'zh-CN') !== isZhCN(pathname)) {
                location.pathname = getLocalizedPathname(pathname, lang === 'zh-CN');
              }
            }
            document.documentElement.className += isZhCN(pathname) ? 'zh-cn' : 'en-us';
          })()
          `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
