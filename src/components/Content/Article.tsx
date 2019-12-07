import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { Affix } from 'antd';
import delegate from 'delegate';
import moment from 'moment';
import EditButton from './EditButton';
import { IFrontmatterData } from '../../templates/docs';
import AvatarList from './AvatarList';

interface ArticleProps {
  content: {
    meta: IFrontmatterData;
    toc: string | false;
    content: string;
  };
}

export default class Article extends React.PureComponent<ArticleProps> {
  delegation: any;

  pingTimer: number;

  node: HTMLElement | null | undefined;

  static contextTypes = {
    intl: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // Add ga event click
    this.delegation = delegate(
      this.node,
      '.resource-card',
      'click',
      (e: { delegateTarget: { href: any } }) => {
        if ((window as any).ga) {
          (window as any).ga('send', 'event', 'Download', 'resource', e.delegateTarget.href);
        }
      },
      false,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.pingTimer);
    if (this.delegation) {
      this.delegation.destroy();
    }
  }

  render() {
    const { props } = this;
    const { content } = props;
    const { meta } = content;
    const { title, subtitle, path, modifiedTime, avatarList } = meta;
    const {
      intl: { locale },
    } = this.context as {
      intl: {
        locale: 'zh-CN' | 'en-US';
      };
    };
    return (
      <>
        <Helmet>
          <title>{`${title} - Ant Design Pro`}</title>
          <meta name="description" content={title} />
        </Helmet>
        <article
          className="markdown"
          ref={node => {
            this.node = node;
          }}
        >
          <h1>
            {title}
            {!subtitle || locale === 'en-US' ? null : <span className="subtitle">{subtitle}</span>}
            <EditButton title={<FormattedMessage id="app.content.edit-page" />} filename={path} />
          </h1>

          <div className="modifiedTime">
            <AvatarList avatarList={avatarList} />
            <FormattedMessage id="app.content.modifiedTime" />
            {moment(modifiedTime).format('YYYY-MM-DD HH:mm:SS')}
          </div>

          {!content.toc || content.toc.length <= 1 || meta.toc === false ? null : (
            <Affix className="toc-affix" offsetTop={16}>
              <div
                dangerouslySetInnerHTML={{
                  __html: content.toc.replace(/<ul>/g, '<ul class="toc">').replace(/\/#/g, '#'),
                }}
              />
            </Affix>
          )}
          <section
            className="markdown api-container"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
      </>
    );
  }
}
