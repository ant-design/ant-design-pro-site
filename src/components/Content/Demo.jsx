/* eslint-disable no-new-func */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as antDesignPro from 'ant-design-pro';
import { FormattedMessage } from 'react-intl';
import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';
import * as antd from 'antd/lib/index';
import LZString from 'lz-string';
import numeral from 'numeral';
import moment from 'moment';
import EditButton from './EditButton';
import { ping } from '../utils';
import 'ant-design-pro/dist/ant-design-pro.min.css';

const { Icon, Tooltip } = antd;

const requireLib = path => {
  const libs = path.split('/');
  if (libs[0] === 'ant-design-pro') {
    return antDesignPro[libs.pop()];
  }
  if (libs[0] === 'antd') {
    return antd;
  }
  if (libs[0] === 'numeral') {
    return numeral;
  }
  if (libs[0] === 'moment') {
    return moment;
  }
};

function antdProCodeFormat(c) {
  let code = c;
  code = code.replace(
    /import\s+\{\s+(.*)\s+\}\s+from\s+'ant-design-pro\/lib\/(.*)';/gi,
    'import { $2 } from "ant-design-pro";\nconst { $1 } = $2;'
  );
  code = code.replace(
    /import\s+(.*)\s+from\s+'ant-design-pro\/lib\/(.*)';/gi,
    'import { $1 } from "ant-design-pro";'
  );
  return code;
}

function compress(string) {
  return LZString.compressToBase64(string)
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
}

function antdProCodeFormatCodepen(c) {
  let code = c;
  code = code.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'antd';/gi, 'const { $1 } = antd;');
  code = code.replace(
    /import\s+\{\s+(.*)\s+\}\s+from\s+'ant-design-pro\/lib\/(.*)';/gi,
    'const { $1 } = $2;'
  );
  code = code.replace(/import\s+(.*)\s+from\s+'ant-design-pro\/lib\/(.*)';/gi, '');
  return code;
}

export default class Demo extends React.Component {
  static contextTypes = {
    intl: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      codeExpand: false,
      sourceCode: '',
      copied: false,
      copyTooltipVisible: false,
      showRiddleButton: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { highlightedCode } = nextProps;
    const div = document.createElement('div');
    div.innerHTML = highlightedCode;
    this.setState({ sourceCode: div.textContent });
  }

  componentDidMount() {
    const { meta, location, preview } = this.props;
    if (meta.id === location.hash.slice(1)) {
      this.anchor.click();
    }
    this.componentWillReceiveProps(this.props);

    this.pingTimer = ping(status => {
      if (status !== 'timeout' && status !== 'error') {
        this.setState({
          showRiddleButton: true,
        });
      }
    });

    const myrender = new Function('React', 'ReactDOM', 'require', 'mountNode', preview);
    if (this.dom) {
      myrender(React, ReactDOM, requireLib, this.dom);
    }
  }

  handleCodeExpand = () => {
    const { codeExpand } = this.state;
    this.setState({ codeExpand: !codeExpand });
  };

  saveAnchor = anchor => {
    this.anchor = anchor;
  };

  handleCodeCopied = () => {
    this.setState({ copied: true });
  };

  onCopyTooltipVisibleChange = visible => {
    if (visible) {
      this.setState({
        copyTooltipVisible: visible,
        copied: false,
      });
      return;
    }
    this.setState({
      copyTooltipVisible: visible,
    });
  };

  render() {
    const state = this.state;
    const props = this.props;
    const { meta, id, content, highlightedCode, style, highlightedStyle, expand } = props;

    const { showRiddleButton } = this.state;
    const codeExpand = state.codeExpand || expand;
    const codeBoxClass = classNames({
      'code-box': true,
      expand: codeExpand,
    });

    const {
      intl: { locale },
    } = this.context;
    const localizedTitle = meta.title[locale] || meta.title;
    const localizeIntro = content[locale] || localizedTitle;
    const highlightClass = classNames({
      'highlight-wrapper': true,
      'highlight-wrapper-expand': codeExpand,
    });

    const prefillStyle = `@import 'antd@next/dist/antd.css';\n\n@import 'ant-design-pro/dist/ant-design-pro.min.css';\n\n${style ||
      ''}`.replace(new RegExp(`#${meta.id}\\s*`, 'g'), '');
    const prefillStyleCodepen = `${style || ''}`.replace(new RegExp(`#${meta.id}\\s*`, 'g'), '');
    const html = `<div id="container" style="padding: 24px"></div>
    <script>
      var mountNode = document.getElementById('container');
    </script>`;
    const dependencies = state.sourceCode.split('\n').reduce(
      (acc, line) => {
        const matches = line.match(/import .+? from '(.+)';$/);
        if (matches && matches[1] && !line.includes('ant-design-pro/lib/')) {
          if (line.includes('lodash/')) {
            acc.lodash = 'latest';
          } else {
            acc[matches[1]] = 'latest';
          }
        }
        return acc;
      },
      {
        react: 'latest',
        'react-dom': 'latest',
        antd: 'latest',
        'ant-design-pro': 'latest',
      }
    );
    const codepenPrefillConfig = {
      title: `${localizedTitle} - Ant Design Demo`,
      html,
      js: antdProCodeFormatCodepen(state.sourceCode),
      css: prefillStyleCodepen,
      editors: '001',
      css_external:
        'https://unpkg.com/antd@next/dist/antd.css;https://unpkg.com/ant-design-pro/dist/ant-design-pro.css',
      js_external: [
        'react@16.1.1/umd/react.development.js',
        'react-dom@16.1.1/umd/react-dom.development.js',
        'moment/min/moment-with-locales.js',
        'numeral@2.0.6/numeral.js',
        'antd@next/dist/antd-with-locales.js',
        'ant-design-pro/dist/ant-design-pro.js',
      ]
        .map(url => `https://unpkg.com/${url}`)
        .join(';'),
      js_pre_processor: 'typescript',
    };

    const codesanboxPrefillConfig = {
      files: {
        'package.json': {
          content: {
            dependencies,
          },
        },
        'index.css': {
          content: (style || '').replace(new RegExp(`#${meta.id}\\s*`, 'g'), ''),
        },
        'index.js': {
          content: `
              import React from 'react';
              import ReactDOM from 'react-dom';
              import 'antd/dist/antd.css';
              import './index.css';
              import 'ant-design-pro/dist/ant-design-pro.css';
              ${state.sourceCode.replace('mountNode', "document.getElementById('container')")}
          `,
        },
        'index.html': {
          content: html,
        },
      },
    };

    const riddlePrefillConfig = {
      title: `${localizedTitle} - Ant Design Demo`,
      js: antdProCodeFormat(state.sourceCode),
      css: prefillStyle,
    };
    return (
      <section className={codeBoxClass} id={id}>
        <section className="code-box-demo">
          <div ref={ref => (this.dom = ref)} />
          {style ? <style dangerouslySetInnerHTML={{ __html: style }} /> : null}
        </section>
        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href={`#${id}`} ref={this.saveAnchor}>
              {localizedTitle}
            </a>
            <EditButton
              title={<FormattedMessage id="app.content.edit-page" />}
              filename={meta.filename.replace('scaffold/', '')}
              sourcePath="https://github.com/ant-design/ant-design-pro/edit/master/"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: localizeIntro }} />
          <Tooltip title={codeExpand ? 'Hide Code' : 'Show Code'}>
            <span className="code-expand-icon">
              <img
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
                className={codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'}
                onClick={this.handleCodeExpand}
              />
              <img
                alt="expand code"
                src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
                className={codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'}
                onClick={this.handleCodeExpand}
              />
            </span>
          </Tooltip>
        </section>
        <section className={highlightClass} key="code">
          <div className="highlight">
            <div className="code-box-actions">
              {showRiddleButton ? (
                <form
                  action="//riddle.alibaba-inc.com/riddles/define"
                  method="POST"
                  target="_blank"
                >
                  <input
                    type="hidden"
                    name="data"
                    value={compress(JSON.stringify(riddlePrefillConfig))}
                  />
                  <Tooltip title={<FormattedMessage id="app.demo.riddle" />}>
                    <input
                      type="submit"
                      value="Create New Riddle with Prefilled Data"
                      className="code-box-riddle"
                    />
                  </Tooltip>
                </form>
              ) : null}
              <form
                action="https://codesandbox.io/api/v1/sandboxes/define"
                method="POST"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="parameters"
                  value={compress(JSON.stringify(codesanboxPrefillConfig))}
                />
                <Tooltip title={<FormattedMessage id="app.demo.codesandbox" />}>
                  <input
                    type="submit"
                    value="Create New Sandbox with Prefilled Data"
                    className="code-box-codesandbox"
                  />
                </Tooltip>
              </form>
              <form action="https://codepen.io/pen/define" method="POST" target="_blank">
                <input type="hidden" name="data" value={JSON.stringify(codepenPrefillConfig)} />
                <Tooltip title={<FormattedMessage id="app.demo.codepen" />}>
                  <input
                    type="submit"
                    value="Create New Pen with Prefilled Data"
                    className="code-box-codepen"
                  />
                </Tooltip>
              </form>
              <CopyToClipboard text={state.sourceCode} onCopy={this.handleCodeCopied}>
                <Tooltip
                  visible={state.copyTooltipVisible}
                  onVisibleChange={this.onCopyTooltipVisibleChange}
                  title={<FormattedMessage id={`app.demo.${state.copied ? 'copied' : 'copy'}`} />}
                >
                  <Icon
                    type={state.copied && state.copyTooltipVisible ? 'check' : 'copy'}
                    className="code-box-code-copy"
                  />
                </Tooltip>
              </CopyToClipboard>
            </div>
            <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </div>
          {highlightedStyle ? (
            <div key="style" className="highlight">
              <pre>
                <code className="css" dangerouslySetInnerHTML={{ __html: highlightedStyle }} />
              </pre>
            </div>
          ) : null}
        </section>
      </section>
    );
  }
}
