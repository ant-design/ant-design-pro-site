import React, { useEffect, useRef } from 'react';
import './index.less';
import anime from 'animejs';
import GitHubButton from 'react-github-button';
import { FormattedMessage } from 'react-intl';
import '../../../../node_modules/react-github-button/assets/style.less';
import { GaussianBackground } from '../gaussian-background/index';

const bannerColors = [
  {
    orbs: 2,
    radius: 2,
    maxVelocity: 0.1,
    color: '#fbfeff',
  },
  {
    orbs: 2,
    radius: 7,
    maxVelocity: 0.11,
    color: '#98b3fd',
  },
  {
    color: '#fca08d',
  },
];
export default () => {
  const aniBg = useRef();
  const btn = useRef();
  const menu = useRef();
  const stfCircle = useRef();
  const stfCode = useRef();
  const stfPie = useRef();
  const stfFolder = useRef();

  const stfInput = useRef();
  const icnFolder = useRef();
  const stfDot = useRef();
  const pnChart = useRef();
  const pnCode = useRef();

  const animationRef = useRef();
  const handleOver = () => {
    if (animationRef.current.reversed) animationRef.current.reverse();
    animationRef.current.play();
    // console.log(btn);
  };
  const handleOut = () => {
    if (!animationRef.current.reversed) animationRef.current.reverse();
    animationRef.current.play();
    // console.log(animationRef.current);
  };

  useEffect(() => {
    animationRef.current = anime.timeline({
      easing: 'easeInElastic(2,1)',
      duration: 400,
      autoplay: false,
    });
    animationRef.current
      //输入框
      .add(
        {
          targets: stfInput.current,
          bottom: 200,
          right: 0,
          opacity: 0,
          duration: 400,
        },
        0,
      )
      //代码块
      .add(
        {
          targets: stfCode.current,
          left: 10,
          opacity: 0,
        },
        0,
      )
      //饼图
      .add(
        {
          targets: stfPie.current,
          top: 40,
          right: 60,
          // width: 0,
          opacity: 0,
        },
        30,
      )
      //圆圈
      .add(
        {
          targets: stfCircle.current,
          right: 30,
          top: 140,
          width: 40,
          opacity: 0,
        },
        10,
      )
      //文件夹
      .add(
        {
          targets: stfFolder.current,
          right: 240,
          top: 140,
          width: 40,
          opacity: 0,
        },
        30,
      )
      //菜单条
      .add(
        {
          targets: menu.current.children,
          backgroundColor: function (el, i) {
            if (i == 1) return '#3E64F0';
            else return '#E1E9EE';
          },
          width: [56, 32, 52],
          translateX: 4,
          scale: 1.2,
          delay: anime.stagger(50),
          easing: 'easeOutBack',
          duration: 500,
        },
        60,
      )
      //窗体背景
      .add(
        {
          targets: aniBg.current,
          scale: 1.05,
          easing: 'easeOutBack',
          duration: 100,
        },
        150,
      )
      //窗体按钮
      .add(
        {
          targets: btn.current,
          scale: 1.1,
          left: 4,
          easing: 'easeOutBack',
        },
        150,
      )
      .add(
        {
          targets: btn.current.children[0],
          background: '#F65F59',
        },
        150,
      )
      .add(
        {
          targets: btn.current.children[1],
          background: '#F9BC2F',
        },
        150,
      )
      .add(
        {
          targets: btn.current.children[2],
          background: '#3CC83F',
        },
        150,
      )

      //文件夹图标
      .add(
        {
          targets: icnFolder.current.children,
          height: [0, 36],
          opacity: [0, 1],
          delay: anime.stagger(50),
          easing: 'linear',
          duration: 200,
        },
        200,
      )
      //代码面板
      .add(
        {
          targets: pnCode.current,
          width: [0, 158],
          opacity: [0, 1],
          right: 370,
          easing: 'easeOutElastic(6,1)',
          duration: 400,
        },
        200,
      )

      //图表面板
      .add(
        {
          targets: pnChart.current,
          height: [0, 179],
          opacity: [0, 1],
          left: 244,
          easing: 'easeOutElastic(6,1)',
          duration: 400,
        },
        200,
      )
      //浮动球
      .add(
        {
          targets: stfDot.current,
          height: [0, 74],
          opacity: [0, 1],
          top: 240,
          right: -36,
          easing: 'easeOutElastic(6,1)',
          duration: 400,
        },
        200,
      );
  }, []);

  return (
    <div className="banner">
      <div className="background">
        <GaussianBackground colors={bannerColors} blurRadius={16} height={520} />
      </div>
      <div className="content">
        <div className="banner-title-wrapper">
          <h1 style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>ANT DESIGN PRO</h1>
          <p style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
            <FormattedMessage id="app.home.slogan" />
          </p>
          <div className="button-wrapper" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
            <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer">
              <button type="button" className="ant-btn ant-btn-primary custom-ant-btn">
                <FormattedMessage id="app.home.preview" />
              </button>
            </a>
            <a href="docs/getting-started">
              <button
                type="button"
                className="ant-btn ant-btn-primary ant-btn-background-ghost custom-ant-btn"
                style={{ margin: '0px 16px' }}
              >
                <FormattedMessage id="app.home.start" />
              </button>
            </a>
            <GitHubButton
              key="github-button"
              type="stargazers"
              namespace="ant-design"
              repo="ant-design-pro"
            />
          </div>
        </div>
        <div className="con_right">
          <div className="hover_layer" onMouseEnter={handleOver} onMouseLeave={handleOut}></div>
          <div ref={aniBg} className="animate">
            <ul ref={btn} className="ani_btn">
              <li /> <li /> <li />
            </ul>
            <ul ref={menu} className="ani_menu">
              <li /> <li /> <li />
              <li /> <li />
            </ul>
            <ul ref={icnFolder} className="ani_icn_folder">
              <li /> <li /> <li />
            </ul>
            <div ref={stfCircle} className="ani_stf_circle" />
            <div ref={stfCode} className="ani_stf_code" />
            <div ref={stfPie} className="ani_stf_pie" />
            <div ref={stfFolder} className="ani_stf_folder" />
            <div ref={stfDot} className="ani_stf_dot" />
            <div ref={stfInput} className="ani_stf_input" />
            <div ref={pnChart} className="ani_pn_chart" />
            <div ref={pnCode} className="ani_pn_code" />
          </div>
        </div>
      </div>
    </div>
  );
};
