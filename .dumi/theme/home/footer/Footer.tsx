import React from 'react';
import { FormattedMessage, injectIntl } from 'umi';
import { Modal } from 'antd';
import RcFooter from 'rc-footer';
import 'rc-footer/assets/index.css';
import { presetPalettes } from '@ant-design/colors';
import './index.less';
import {
  AntDesignOutlined,
  MediumOutlined,
  TwitterOutlined,
  ZhihuOutlined,
  GithubOutlined,
  BugOutlined,
  IssuesCloseOutlined,
  BookOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { isLocalStorageNameSupported } from '../../utils';

class Footer extends React.Component<any & { location: any; isHome: boolean }> {
  lessLoaded = false;

  state = {
    color: presetPalettes.blue.primary,
  };

  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    if (!isLocalStorageNameSupported()) {
      return;
    }
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (
      localStorage.getItem('antd@3.0.0-notification-sent') !== 'true' &&
      Date.now() < new Date('2017/12/20').getTime()
    ) {
      this.infoNewVersion();
    }
  }

  getColumns() {
    const { intl } = this.props;
    const col1 = {
      title: <FormattedMessage id="app.footer.resources" />,
      items: [
        {
          title: 'Ant Design',
          url: 'https://ant.design',
          openExternal: true,
        },
        {
          title: 'Ant Design Charts',
          url: 'https://charts.ant.design',
          openExternal: true,
        },
        {
          title: 'Pro Components',
          description: '模板组件',
          url: 'https://procomponents.ant.design',
          openExternal: true,
        },
        {
          title: 'Ant Design Mobile',
          url: 'https://mobile.ant.design',
          openExternal: true,
        },
        {
          title: 'Ant Design Landing',
          description: <FormattedMessage id="app.footer.landing" />,
          url: 'https://landing.ant.design',
          openExternal: true,
        },
        {
          title: 'Scaffolds',
          description: <FormattedMessage id="app.footer.scaffolds" />,
          url: 'https://scaffold.ant.design',
          openExternal: true,
        },
        {
          title: 'Umi',
          description: <FormattedMessage id="app.footer.umi" />,
          url: 'https://umijs.org',
          openExternal: true,
        },
        {
          title: 'Dumi',
          description: <FormattedMessage id="app.footer.dumi" />,
          url: 'https://d.umijs.org',
          openExternal: true,
        },
        {
          title: 'qiankun',
          description: <FormattedMessage id="app.footer.qiankun" />,
          url: 'https://qiankun.umijs.org',
          openExternal: true,
        },
        {
          title: 'ahooks',
          description: <FormattedMessage id="app.footer.hooks" />,
          url: 'https://github.com/alibaba/hooks',
          openExternal: true,
        },
        {
          title: 'Ant Motion',
          description: <FormattedMessage id="app.footer.motion" />,
          url: 'https://motion.ant.design',
          openExternal: true,
        },
        {
          title: <FormattedMessage id="app.footer.chinamirror" />,
          url: 'https://ant-design.gitee.io/',
        },
      ],
    };

    const col2 = {
      title: <FormattedMessage id="app.footer.community" />,
      items: [
        {
          icon: <AntDesignOutlined />,
          title: <FormattedMessage id="app.footer.awesome" />,
          url: 'https://github.com/websemantics/awesome-ant-design',
          openExternal: true,
        },
        {
          icon: <MediumOutlined />,
          title: 'Medium',
          url: 'http://medium.com/ant-design/',
          openExternal: true,
        },
        {
          icon: <TwitterOutlined style={{ color: '#1DA1F2' }} />,
          title: 'Twitter',
          url: 'http://twitter.com/antdesignui',
          openExternal: true,
        },
        {
          icon: <ZhihuOutlined style={{ color: '#0084ff' }} />,
          title: <FormattedMessage id="app.footer.zhihu" />,
          url: 'http://zhuanlan.zhihu.com/antdesign',
          openExternal: true,
        },
        {
          icon: <ZhihuOutlined style={{ color: '#0084ff' }} />,
          title: <FormattedMessage id="app.footer.zhihu.xtech" />,
          url: 'http://zhuanlan.zhihu.com/xtech',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png"
              alt="seeconf"
            />
          ),
          title: 'SEE Conf',
          description: <FormattedMessage id="app.footer.seeconf" />,
          url: 'https://seeconf.antfin.com/',
          openExternal: true,
        },
      ],
    };

    const col3 = {
      title: <FormattedMessage id="app.footer.help" />,
      items: [
        {
          icon: <GithubOutlined />,
          title: 'GitHub',
          url: 'https://github.com/ant-design/ant-design',
          openExternal: true,
        },
        {
          icon: <BugOutlined />,
          title: <FormattedMessage id="app.footer.bug-report" />,
          url: 'https://new-issue.ant.design/',
          openExternal: true,
        },
        {
          icon: <IssuesCloseOutlined />,
          title: <FormattedMessage id="app.footer.issues" />,
          url: 'https://github.com/ant-design/ant-design/issues',
          openExternal: true,
        },
        {
          icon: <BookOutlined />,
          title: <FormattedMessage id="app.footer.course" />,
          url: 'https://www.yuque.com/ant-design/course',
          openExternal: true,
        },
        {
          icon: <QuestionCircleOutlined />,
          title: <FormattedMessage id="app.footer.discussions" />,
          url: 'https://github.com/ant-design/ant-design/discussions',
          openExternal: true,
        },
        {
          icon: <QuestionCircleOutlined />,
          title: <FormattedMessage id="app.footer.stackoverflow" />,
          url: 'http://stackoverflow.com/questions/tagged/antd',
          openExternal: true,
        },
        {
          icon: <QuestionCircleOutlined />,
          title: <FormattedMessage id="app.footer.segmentfault" />,
          url: 'https://segmentfault.com/t/antd',
          openExternal: true,
        },
      ],
    };

    const col4 = {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="Ant XTech"
        />
      ),
      title: <FormattedMessage id="app.footer.more-product" />,
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: <FormattedMessage id="app.footer.yuque" />,
          url: 'https://yuque.com',
          description: <FormattedMessage id="app.footer.yuque.slogan" />,
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png"
              alt="AntV"
            />
          ),
          title: 'AntV',
          url: 'https://antv.vision',
          description: <FormattedMessage id="app.footer.antv.slogan" />,
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/antfincdn/v2%24rh7lqpu/82f338dd-b0a6-41bc-9a86-58aaa9df217b.png"
              alt="Egg"
            />
          ),
          title: 'Egg',
          url: 'https://eggjs.org',
          description: <FormattedMessage id="app.footer.egg.slogan" />,
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
              alt="kitchen"
            />
          ),
          title: 'Kitchen',
          description: <FormattedMessage id="app.footer.kitchen" />,
          url: 'https://kitchen.alipay.com',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
              alt="xtech"
            />
          ),
          title: <FormattedMessage id="app.footer.xtech" />,
          url: 'https://xtech.antfin.com/',
          openExternal: true,
        },
      ],
    };

    return [col1, col2, col3, col4];
  }

  infoNewVersion() {
    const {
      intl: { messages },
    } = this.props;
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="Ant Design"
          />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="/changelog">
              antd@3.0.0
            </a>
            {messages['app.publish.intro']}
            {messages['app.publish.old-version-guide']}
            <a target="_blank" rel="noopener noreferrer" href="http://2x.ant.design">
              2x.ant.design
            </a>
            {messages['app.publish.old-version-tips']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('antd@3.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  render() {
    const { isHome } = this.props;
    return (
      <div className={`footer ${isHome ? 'home-page-footer' : ''}`}>
        <RcFooter
          columns={this.getColumns()}
          bottom={
            <>
              Made with <span style={{ color: '#fff' }}>❤</span> by
              {/* eslint-disable-next-line react/jsx-curly-brace-presence */}{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://xtech.antfin.com">
                <FormattedMessage id="app.footer.company" />
              </a>
            </>
          }
        />
      </div>
    );
  }
}

export default injectIntl(Footer);
