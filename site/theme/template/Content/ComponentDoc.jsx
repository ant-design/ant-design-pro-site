import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Row, Col, Icon, Affix } from 'antd';
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

  constructor(props) {
    super(props);

    this.state = {
      affixMode: true,
      expandAll: false,
    };
  }

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

  handleExpandToggle = () => {
    this.setState({
      expandAll: !this.state.expandAll,
    });
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
    const expandTriggerClass = classNames({
      'code-box-expand-trigger': true,
      'code-box-expand-trigger-active': expand,
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
          <section className="markdown">
            <h1>
              {title[locale] || title}
              {
                !subtitle ? null : <span className="subtitle">{subtitle}</span>
              }
              <EditButton title={<FormattedMessage id="app.content.edit-page" />} filename={filename} />
            </h1>
            {
              props.utils.toReactComponent(
                ['section', { className: 'markdown' }]
                  .concat(getChildren(content))
              )
            }
            <h2>
              <FormattedMessage id="app.component.examples" />
              <Icon
                type="appstore"
                className={expandTriggerClass}
                title="展开全部代码"
                onClick={this.handleExpandToggle}
              />
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
