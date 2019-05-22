/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Parallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

const TweenOneGroup = TweenOne.TweenOneGroup;
const featuresCN = [
  {
    title: '优雅美观',
    content: '基于 Ant Design 体系精心设计',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: '常见设计模式',
    content: '提炼自中后台应用的典型页面和场景',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: '最新技术栈',
    content: '使用 React/dva/antd 等前端前沿技术开发',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
  {
    title: '响应式',
    content: '针对不同屏幕大小设计',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,.12)',
  },
  {
    title: '主题',
    content: '可配置的主题满足多样化的品牌诉求',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,.12)',
  },
  {
    title: '国际化',
    content: '内建业界通用的国际化方案',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,.12)',
  },
  {
    title: '最佳实践',
    content: '良好的工程实践助你持续产出高质量代码',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
    color: '#FA8C16',
    shadowColor: 'rgba(250,140,22,.12)',
  },
  {
    title: 'Mock 数据',
    content: '实用的本地数据调试方案',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
    color: '#EB2F96',
    shadowColor: 'rgba(235,45,150,.12)',
  },
  {
    title: 'UI 测试',
    content: '自动化测试保障前端产品质量',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
    color: '#1890FF',
    shadowColor: 'rgba(24,144,255,.12)',
  },
];

const featuresEN = [
  {
    title: ' Neat Design',
    content: 'Follow Ant Design specification',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'Common Templates',
    content: 'Typical templates for enterprise applications',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: 'Up-to-date Dev Stack',
    content: 'Newest development stack of React/dva/antd',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
  {
    title: 'Responsive',
    content: 'Designed for varies of screen size',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,.12)',
  },
  {
    title: 'Theming',
    content: 'Customizable theme with simple config',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,.12)',
  },
  {
    title: 'International',
    content: 'Built-in i18n solution',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,.12)',
  },
  {
    title: 'Best Practice',
    content: 'Solid workflow make your code health',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
    color: '#FA8C16',
    shadowColor: 'rgba(250,140,22,.12)',
  },
  {
    title: 'Mock Data',
    content: 'Easy to use mock development solution',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
    color: '#EB2F96',
    shadowColor: 'rgba(235,45,150,.12)',
  },
  {
    title: 'UI Test',
    content: 'Fly safely with unit test and e2e test',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
    color: '#1890FF',
    shadowColor: 'rgba(24,144,255,.12)',
  },
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
];

class Page1 extends React.PureComponent {
  static contextTypes = {
    intl: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }

  onMouseOver = i => {
    this.setState({
      hoverNum: i,
    });
  };

  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  };

  getEnter = e => {
    const i = e.index;
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: 'easeOutBack',
        duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1,
      },
    ];
  };

  render() {
    const { hoverNum } = this.state;
    const { intl, isMobile } = this.props;
    let children = [[], [], []];
    (intl.locale === 'zh-CN' ? featuresCN : featuresEN).forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-0 left',
        'point-0 right',
        'point-ring',
        'point-1',
        'point-2',
        'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()}>
          <div
            className="page1-box"
            onMouseEnter={() => {
              this.onMouseOver(i);
            }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0,
                y: 30,
                opacity: 0,
                duration: 300,
                ease: 'easeInBack',
              }}
              resetStyle={false}
              exclusive
            >
              {(isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' : '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <img src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 3)].push(child);
    });

    children = children.map((item, i) => (
      <QueueAnim
        className="page1-box-wrapper"
        key={i.toString()}
        type="bottom"
        leaveReverse
        delay={[i * 100, (children.length - 1 - i) * 100]}
        component="ul"
      >
        {item}
      </QueueAnim>
    ));
    return (
      <div className="home-page page1">
        <div className="home-page-wrapper" id="page1-wrapper">
          {!isMobile && (
            <Parallax
              className="page1-bg"
              animation={{
                translateY: 200,
                ease: 'linear',
                playScale: [0, 1.65],
              }}
              location="page1-wrapper"
            >
              Feature
            </Parallax>
          )}
          <h2>
            What can <span>Pro</span> do for you{' '}
          </h2>
          <div className="title-line-wrapper page1-line">
            <div className="title-line" />
          </div>
          <OverPack>{children}</OverPack>
        </div>
      </div>
    );
  }
}

export default injectIntl(Page1);
