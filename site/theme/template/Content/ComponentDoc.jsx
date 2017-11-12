import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Affix, Alert } from 'antd';
import { getChildren } from 'jsonml.js/lib/utils';
import Demo from './Demo';
import EditButton from './EditButton';

function handleAffixChange() {
  const tocNode = document.getElementById('demo-toc-bottom').parentNode;
  tocNode.style.position = 'static';
}

export default class ComponentDoc extends React.PureComponent {
  static contextTypes = {
    intl: PropTypes.object,
  }

  state = {
    affixMode: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const tocNode = document.getElementById('demo-toc');
    const dh = document.body.scrollHeight;
    const of = window.scrollY + ((tocNode && tocNode.offsetHeight) || this.tocHeight);

    if (dh - of <= 600) {
      if (this.state.affixMode) {
        this.tocHeight = tocNode.offsetHeight;
        this.setState({
          affixMode: false,
        });
      }
    } else if (!this.state.affixMode) {
      this.setState({
        affixMode: true,
      });
    }
  }

  render() {
    const props = this.props;
    const { doc, location } = props;
    const { content, meta } = doc;
    const locale = this.context.intl.locale;
    const demos = Object.keys(props.demos).map(key => props.demos[key]);
    const { affixMode, expand } = this.state;

    const isSingleCol = meta.cols === 1;
    const leftChildren = [];
    const rightChildren = [];
    const showedDemo = demos.some(demo => demo.meta.only) ?
      demos.filter(demo => demo.meta.only) : demos.filter(demo => demo.preview);
    showedDemo.sort((a, b) => a.meta.order - b.meta.order)
      .forEach((demoData, index) => {
        const demoElem = (
          <Demo
            {...demoData}
            themeConfig={props.themeConfig}
            key={demoData.meta.filename}
            utils={props.utils}
            expand={expand}
            location={location}
          />
        );
        if (index % 2 === 0 || isSingleCol) {
          leftChildren.push(demoElem);
        } else {
          rightChildren.push(demoElem);
        }
      });

    const jumper = showedDemo.map((demo) => {
      const title = demo.meta.title;
      const localizeTitle = title[locale] || title;
      return (
        <li key={demo.meta.id} title={localizeTitle}>
          <a href={`#${demo.meta.id}`}>
            {localizeTitle}
          </a>
        </li>
      );
    });

    const { title, subtitle, filename } = meta;
    const isNotTranslated = locale === 'en-US' && typeof title === 'object';
    return (
      <DocumentTitle title={`${subtitle || ''} ${title[locale] || title} - Ant Design`}>
        <article>
          <Affix
            className="toc-affix"
            offsetTop={16}
            style={affixMode ? { opacity: 1 } : { opacity: 0, zIndex: -99 }}
          >
            <ul id="demo-toc" className="toc">
              {jumper}
            </ul>
          </Affix>
          <Affix
            className="toc-affix-bottom"
            onChange={handleAffixChange}
            offsetTop={16}
            style={affixMode ? { opacity: 0, zIndex: -99 } : { opacity: 1 }}
          >
            <ul id="demo-toc-bottom" className="toc">
              {jumper}
            </ul>
          </Affix>
          {isNotTranslated && (
            <Alert
              type="warning"
              message={(
                <span>
                  This article has not been translated, hope that your can PR to translated it.
                  <a href="https://github.com/ant-design/ant-design-pro/issues/120"> Help us!</a>
                </span>
              )}
              style={{ marginBottom: 24 }}
            />
          )}
          <section className="markdown">
            <h1>
              {title[locale] || title}
              {
                !subtitle ? null : <span className="subtitle">{subtitle}</span>
              }
              <EditButton
                title={<FormattedMessage id="app.content.edit-page" />}
                filename={filename.replace('scaffold/', '')}
                sourcePath="https://github.com/ant-design/ant-design-pro/edit/master/"
              />
            </h1>
            {
              props.utils.toReactComponent(
                ['section', { className: 'markdown' }]
                  .concat(getChildren(content))
              )
            }
            <p><FormattedMessage id="app.component.refer.title" /></p>
            <pre className="language-jsx">
              <code>
                <span className="token keyword">import </span>
                {title[locale] || title}
                <span className="token keyword"> from </span>
                <span className="token string">{`'ant-design-pro/lib/${title[locale] || title}'`}</span>
                <span className="token punctuation">;</span>
              </code>
            </pre>
            <p>
              <FormattedMessage id="app.component.refer.desc" />
              <a href="/docs/use-components-alone"><FormattedMessage id="app.component.refer.link" /></a>
            </p>
            <h2 style={{ marginBottom: 32 }}>
              <FormattedMessage id="app.component.examples" />
            </h2>
          </section>
          <Row gutter={16}>
            <Col
              span={isSingleCol ? '24' : '12'}
              className={isSingleCol ? 'code-boxes-col-1-1' : 'code-boxes-col-2-1'}
            >
              {leftChildren}
            </Col>
            {
              isSingleCol ? null : <Col className="code-boxes-col-2-1" span={12}>{rightChildren}</Col>
            }
          </Row>
          {
            props.utils.toReactComponent(
              ['section', {
                className: 'markdown api-container',
              }].concat(getChildren(doc.api || ['placeholder']))
            )
          }
        </article>
      </DocumentTitle>
    );
  }
}
