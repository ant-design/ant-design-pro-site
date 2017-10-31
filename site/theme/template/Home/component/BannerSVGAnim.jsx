/* eslint-disable */
import React from 'react';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
TweenOne.plugins.push(SvgDrawPlugin);

const animate = {
  scale: {
    scale: 0,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  alpha: {
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  y: {
    y: 30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  y2: {
    y: -30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  x: {
    x: 30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  x2: {
    x: -30,
    opacity: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  draw: {
    SVGDraw: 0,
    type: 'from',
    ease: 'easeOutQuad',
  },
  loop: {
    yoyo: true,
    repeat: -1,
    duration: 2500,
  },
};

export default function () {
  // safari 下取不到 transform 值，，所有动画在外层增加 g 标签。
  return (
    <svg className="home-banner-anim" width="100%" height="100%" viewBox="0 0 598 342" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter x="-4.6%" y="-6.1%" width="109.1%" height="116.7%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dx="0" dy="7" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="7.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0.411764706   0 0 0 0 0.482352941   0 0 0 0 0.549019608  0 0 0 0.2 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <rect id="path-2" x="0" y="0.432276657" width="10.7772021" height="10.7896254" />
        <linearGradient x1="24.3804028%" y1="50%" x2="107.642915%" y2="50%" id="linearGradient-3">
          <stop stopColor="#65D0E6" offset="0%" />
          <stop stopColor="#D3F3BA" offset="100%" />
        </linearGradient>
        <rect id="path-4" x="0.7582038" y="0.544668588" width="35.9240069" height="43.1585014" />
        <linearGradient x1="143.292387%" y1="50%" x2="0%" y2="50%" id="linearGradient-5">
          <stop stopColor="#76AEFF" stopOpacity="0.5" offset="0%" />
          <stop stopColor="#1D22F2" stopOpacity="0.5" offset="100%" />
        </linearGradient>
        <rect id="path-6" x="39.3765112" y="99.4495677" width="43.1088083" height="10.7896254" />
        <rect id="path-7" x="76.1986183" y="130.919308" width="10.7772021" height="7.19308357" />
        <rect id="path-8" x="0" y="0" width="101" height="79" />
        <rect id="path-10" x="0" y="0" width="337.685665" height="57.5446686" />
        <rect id="path-12" x="0" y="0" width="122.141623" height="86.3170029" />
        <ellipse id="path-14" cx="39.5164076" cy="78.2247839" rx="53.8860104" ry="53.9481268" />
        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-15">
          <stop stopColor="#FFF53D" stopOpacity="0.5" offset="0%" />
          <stop stopColor="#1B5DF5" stopOpacity="0.616225091" offset="100%" />
        </linearGradient>
        <rect id="path-16" x="89.7685665" y="26.3659942" width="26.044905" height="28.7723343" />
        <linearGradient x1="50%" y1="2.77822066%" x2="50%" y2="100%" id="linearGradient-17">
          <stop stopColor="#5292FD" offset="0%" />
          <stop stopColor="#532AF8" offset="100%" />
        </linearGradient>
        <linearGradient x1="416.261243%" y1="-19.5474797%" x2="416.261244%" y2="218.694286%" id="linearGradient-18">
          <stop stopColor="#76AEFF" stopOpacity="0.5" offset="0%" />
          <stop stopColor="#1D22F2" stopOpacity="0.5" offset="100%" />
        </linearGradient>
        <rect id="path-19" x="47.5993092" y="36.2247839" width="8.08290155" height="57.5446686" />
        <rect id="path-20" x="65.5613126" y="50.610951" width="10.7772021" height="43.1585014" />
        <rect id="path-21" x="101.48532" y="75.7867435" width="10.7772021" height="17.9827089" />
        <rect id="path-22" x="119.447323" y="68.5936599" width="10.7772021" height="25.1757925" />
        <rect id="path-23" x="83.5233161" y="21.8386167" width="10.7772021" height="71.9308357" />
        <linearGradient x1="24.3804028%" y1="50%" x2="107.642915%" y2="50%" id="linearGradient-24">
          <stop stopColor="#4CCAE9" offset="0%" />
          <stop stopColor="#D3F3BA" offset="100%" />
        </linearGradient>
        <linearGradient x1="196.877572%" y1="11.6518021%" x2="-49.8197415%" y2="11.6518021%" id="linearGradient-25">
          <stop stopColor="#75D4E1" offset="0%" />
          <stop stopColor="#4E56FB" offset="100%" />
        </linearGradient>
        <rect id="path-26" x="29.0846287" y="37.4639769" width="28.7392055" height="28.7723343" />
        <linearGradient x1="50%" y1="110.15691%" x2="50%" y2="-14.8990438%" id="linearGradient-27">
          <stop stopColor="#4CCAE9" stopOpacity="0.551120924" offset="0%" />
          <stop stopColor="#C3FF94" stopOpacity="0.4356601" offset="100%" />
        </linearGradient>
      </defs>
      <g id="首页" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-800.000000, -162.000000)" id="首屏">
          <g transform="translate(130.000000, 170.000000)">
            <g id="插图-页面" filter="url(#filter-1)" transform="translate(685.000000, 0.000000)">
              <g id="s0">
                <g className="abc" id="Group-24" transform="translate(1.000000, 0.000000)">
                  <TweenOne component="g" animation={[{ ...animate.scale }, { y: 10, ...animate.loop }]}>
                    <rect id="Rectangle-17-Copy-16" fill="#85A5FF" transform="translate(47.497409, 7.193084) scale(1, -1) translate(-47.497409, -7.193084) " x="40.3126079" y="1.13686838e-13" width="14.3696028" height="14.3861671" />
                  </TweenOne>
                  <TweenOne component="g" animation={[{ ...animate.scale, delay: 50 }, { y: -10, ...animate.loop }]}>
                    <g id="Group-4" transform="translate(11.000000, 14.000000)">
                      <polygon id="Rectangle-17-Copy-15" fill="#4060FF" opacity="0.634736474" transform="translate(14.943005, 14.772334) scale(1, -1) translate(-14.943005, -14.772334) " points="0.573402418 0.386167147 29.3126079 0.386167147 0.573402418 29.1585014" />
                      <rect id="Rectangle-17-Copy-15" fill="#4060FF" opacity="0.888701026" transform="translate(14.943005, 14.772334) scale(1, -1) translate(-14.943005, -14.772334) " x="0.573402418" y="0.386167147" width="28.7392055" height="28.7723343" />
                      <polygon id="Rectangle-17-Copy-15" fill="#294CF7" opacity="0.888701026" transform="translate(14.943005, 14.772334) scale(1, -1) translate(-14.943005, -14.772334) " points="0.573402418 0.386167147 29.3126079 0.386167147 29.3126079 29.1585014" />
                    </g>
                  </TweenOne>
                  <g id="Group-7" transform="translate(0.000000, 265.000000)">
                    <TweenOne component="g" animation={[{ ...animate.scale, delay: 1000 }, { y: 5, ...animate.loop }]}>
                      <rect id="Rectangle-17-Copy-20" fill="#339AFF" opacity="0.625583022" transform="translate(492.955095, 5.639769) scale(1, -1) translate(-492.955095, -5.639769) " x="487.566494" y="0.244956772" width="10.7772021" height="10.7896254" />
                    </TweenOne>
                    <TweenOne component="g" animation={[{ ...animate.scale, delay: 1150 }, { y: -5, ...animate.loop }]}>
                      <rect id="Rectangle-17-Copy-43" fill="#1890FF" opacity="0.907940765" transform="translate(20.554404, 41.605187) scale(1, -1) translate(-20.554404, -41.605187) " x="15.1658031" y="36.2103746" width="10.7772021" height="10.7896254" />
                    </TweenOne>
                    <TweenOne component="g" animation={[{ ...animate.scale, delay: 1200 }, { y: 5, ...animate.loop }]}>
                      <rect id="Rectangle-17-Copy-44" fill="#91D5FF" opacity="0.907940765" transform="translate(4.388601, 35.311239) scale(1, -1) translate(-4.388601, -35.311239) " x="0.796200345" y="31.7146974" width="7.18480138" height="7.19308357" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 1050 }}>
                      <rect id="Rectangle-17-Copy-9" fill="#1890FF" x="40.3126079" y="27.2190202" width="452.642487" height="7.19308357" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 1000 }}>
                      <rect id="Rectangle-17-Copy-10" fill="#69C0FF" x="4.38860104" y="20.0259366" width="493.955095" height="7.19308357" />
                    </TweenOne>
                  </g>
                </g>
              </g>
              <g id="s1">
                <g id="Group-21" transform="translate(0.000000, 174.000000)">
                  <TweenOne component="g" animation={{ ...animate.x, delay: 700 }}>
                    <path d="M42.2107081,5.82708934 L6.28670121,5.82708934" id="Path-5" stroke="#2F54EB" strokeWidth="0.89775" strokeLinecap="round" transform="translate(24.248705, 5.827089) scale(-1, 1) translate(-24.248705, -5.827089) " />
                    <g id="Rectangle-17-Copy-34">
                      <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-2" />
                      <rect stroke="#2F54EB" strokeWidth="0.89775" x="0.448875" y="0.881151657" width="9.87945207" height="9.89187536" />
                    </g>
                  </TweenOne>
                </g>
              </g>
              <g id="s2">
                <g id="Group-18" transform="translate(19.000000, 57.000000)">
                  <g id="Group-17" transform="translate(0.758204, 0.544669)">
                    <TweenOne component="g" animation={{ ...animate.y, delay: 300 }}>
                      <rect id="Rectangle-17-Copy-2" fill="#1890FF" x="0" y="0" width="100.587219" height="151.054755" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 320 }}>
                      <rect id="Rectangle-17-Copy-2" fill="#95DE64" opacity="0.819204757" x="0" y="43.1585014" width="100.587219" height="107.896254" />
                      <polygon id="Rectangle-17-Copy-2" fill="#95DE64" points="100.587219 43.1585014 100.587219 151.054755 0 151.054755" />
                    </TweenOne>
                  </g>
                  <TweenOne animation={{ ...animate.draw, delay: 500 }} component="polyline" id="Path-9" stroke="#FFFFFF" strokeWidth="0.89775" points="63.4561007,20.9071232 83.2184056,20.9071232 83.2184056,43.4136061" />
                  <TweenOne component="g" animation={{ ...animate.x2, x: -5, delay: 450 }}>
                    <rect id="Rectangle-17-Copy-23" fill="#FADB14" transform="translate(40.274611, 17.628242) scale(1, -1) rotate(90.000000) translate(-40.274611, -17.628242) " x="33.08981" y="14.0317003" width="14.3696028" height="7.19308357" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x2, x: -5, delay: 470 }}>
                    <rect id="Rectangle-17-Copy-28" fill="#FADB14" transform="translate(54.644214, 17.628242) scale(1, -1) rotate(90.000000) translate(-54.644214, -17.628242) " x="47.4594128" y="14.0317003" width="14.3696028" height="7.19308357" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x2, x: -5, delay: 460 }}>
                    <rect id="Rectangle-17-Copy-27" fill="#06080A" transform="translate(47.459413, 22.123919) scale(1, -1) rotate(90.000000) translate(-47.459413, -22.123919) " x="40.2746114" y="18.5273775" width="14.3696028" height="7.19308357" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x2, x: -5, delay: 480 }}>
                    <rect id="Rectangle-17-Copy-29" fill="#06080A" transform="translate(61.829016, 19.426513) scale(1, -1) rotate(90.000000) translate(-61.829016, -19.426513) " x="58.2366149" y="15.8299712" width="7.18480138" height="7.19308357" />
                  </TweenOne>
                  <g id="Rectangle-17-Copy-25" opacity="0.892432369" transform="translate(18.720207, 22.123919) scale(1, -1) translate(-18.720207, -22.123919) ">
                    <TweenOne component="g" animation={{ ...animate.y2, delay: 340 }}>
                      <use fill="url(#linearGradient-3)" xlinkHref="#path-4" />
                      <use fillOpacity="0.550000012" fill="#91D5FF" xlinkHref="#path-4" />
                    </TweenOne>
                  </g>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 360 }}>
                    <rect id="Rectangle-17-Copy-25" fill="#06080A" transform="translate(18.720207, 40.106628) scale(1, -1) translate(-18.720207, -40.106628) " x="0.7582038" y="36.5100865" width="35.9240069" height="7.19308357" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.alpha, y: 5, delay: 600 }}>
                    <rect id="Rectangle-17-Copy-17" fill="#FA541C" transform="translate(83.383420, 43.703170) scale(1, -1) translate(-83.383420, -43.703170) " x="76.1986183" y="41.9048991" width="14.3696028" height="3.59654179" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 470 }}>
                    <rect id="Rectangle-17-Copy-37" fill="#1890FF" transform="translate(22.312608, 68.878963) scale(1, -1) rotate(90.000000) translate(-22.312608, -68.878963) " x="15.1278066" y="61.685879" width="14.3696028" height="14.3861671" rx="7.18480138" />
                    <ellipse id="Oval-3" fill="#06080A" cx="22.3126079" cy="68.8789625" rx="2.69430052" ry="2.69740634" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 450 }}>
                    <ellipse id="Oval-3" fill="#06080A" cx="18.7202073" cy="19.426513" rx="2.69430052" ry="2.69740634" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 480 }}>
                    <rect id="Rectangle-17-Copy-37" fill="#1890FF" transform="translate(22.312608, 104.844380) scale(1, -1) rotate(90.000000) translate(-22.312608, -104.844380) " x="15.1278066" y="97.6512968" width="14.3696028" height="14.3861671" rx="7.18480138" />
                    <ellipse id="Oval-3-Copy-7" fill="#06080A" cx="22.3126079" cy="104.84438" rx="2.69430052" ry="2.69740634" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 490 }}>
                    <path d="M22.3126079,68.8789625 L22.3126079,104.84438" id="Path-18-Copy" stroke="#2F54EB" strokeWidth="0.53865" strokeLinecap="round" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 500 }}>
                    <polyline id="Path-19" stroke="#2F54EB" strokeWidth="0.7182" opacity="0.573344216" strokeLinecap="round" strokeLinejoin="round" points="76.7111668 66.1815562 76.7111668 79.8272874 80.6891192 82.2584505 73.5225397 82.2584505 80.6891192 85.5560721 73.5043178 85.5560721 80.6891192 89.1260808 73.5043178 89.1260808 80.6891192 92.7076803 73.5225397 92.7076803 77.0967185 96.0586202 77.0967185 101.247839" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 510 }}>
                    <rect id="Rectangle-17-Copy-39" fill="#FFC53D" x="39.3765112" y="63.4841499" width="43.1088083" height="10.7896254" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 520 }}>
                    <rect id="Rectangle-17-Copy-39" fill="#000000" x="71.7081174" y="63.4841499" width="10.7772021" height="10.7896254" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 530 }}>
                    <g id="Rectangle-17-Copy-40">
                      <use fill="#2471F5" xlinkHref="#path-6" />
                      <use fillOpacity="0.370000005" fill="url(#linearGradient-5)" xlinkHref="#path-6" />
                    </g>
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 540 }}>
                    <rect id="Rectangle-17-Copy-40" fill="#2459F5" x="71.7081174" y="99.4495677" width="10.7772021" height="10.7896254" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 400 }}>
                    <use fill="#2471F5" xlinkHref="#path-7" />
                    <use fillOpacity="0.370000005" fill="url(#linearGradient-5)" xlinkHref="#path-7" />
                  </TweenOne>
                  <TweenOne animation={{ ...animate.draw, delay: 700 }} component="polyline" id="Path-20" stroke="#2668F4" strokeWidth="0.7182" points="43.8670121 110.239193 43.8670121 125.632262 81.3129252 125.632262 81.3129252 131.566266" />
                </g>
              </g>
              <g id="s3">
                <g id="Group-3" transform="translate(5.000000, 195.000000)">
                  <TweenOne component="g" animation={{ ...animate.y, delay: 520 }}>
                    <mask id="mask-9" fill="white">
                      <use xlinkHref="#path-8" />
                    </mask>
                    <use id="Rectangle-17-Copy-18" fill="#1778FF" xlinkHref="#path-8" />
                    <ellipse id="Oval-5" fill="#1793FF" opacity="0.499125466" mask="url(#mask-9)" cx="12.1741071" cy="-8.43258427" rx="88.8258929" ry="87.4325843" />
                  </TweenOne>
                  <g id="Group-15" transform="translate(54.500000, 21.500000) scale(-1, 1) translate(-54.500000, -21.500000) translate(15.000000, 7.000000)">
                    <TweenOne component="g" animation={{ ...animate.y, delay: 520 }}>
                      <rect id="Rectangle-17-Copy-30" fill="#40A9FF" transform="translate(21.545455, 10.875000) scale(1, -1) translate(-21.545455, -10.875000) " x="0" y="0" width="43.0909091" height="21.75" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 530 }}>
                      <rect id="Rectangle-17-Copy-30" fill="#FFFFFF" transform="translate(21.545455, 18.125000) scale(1, -1) translate(-21.545455, -18.125000) " x="0" y="14.5" width="43.0909091" height="7.25" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 540 }}>
                      <rect id="Rectangle-17-Copy-30" fill="#2A6FF5" transform="translate(5.386364, 10.875000) scale(1, -1) translate(-5.386364, -10.875000) " x="0" y="0" width="10.7727273" height="21.75" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 550 }}>
                      <rect id="Rectangle-17-Copy-30" fill="#40A9FF" transform="translate(5.386364, 18.125000) scale(1, -1) translate(-5.386364, -18.125000) " x="0" y="14.5" width="10.7727273" height="7.25" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 560 }}>
                      <rect id="Rectangle-17-Copy-31" fill="#06080A" transform="translate(61.045455, 21.750000) scale(-1, -1) translate(-61.045455, -21.750000) " x="57.4545455" y="14.5" width="7.18181818" height="14.5" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 570 }}>
                      <rect id="Rectangle-17-Copy-31" fill="#FFFFFF" transform="translate(61.045455, 25.375000) scale(-1, -1) translate(-61.045455, -25.375000) " x="57.4545455" y="21.75" width="7.18181818" height="7.25" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 580 }}>
                      <rect id="Rectangle-17-Copy-31" fill="#FFEC3D" transform="translate(75.409091, 25.375000) scale(-1, -1) translate(-75.409091, -25.375000) " x="71.8181818" y="21.75" width="7.18181818" height="7.25" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.y, delay: 590 }}>
                      <ellipse id="Oval-3" fill="#06080A" cx="10.7727273" cy="14.5" rx="2.69318182" ry="2.71875" />
                    </TweenOne>
                  </g>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 600 }}>
                    <circle id="Oval-3-Copy-5" fill="#06080A" cx="84" cy="44" r="2" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 610 }}>
                    <circle id="Oval-3-Copy-6" fill="#06080A" cx="84" cy="67" r="2" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 605 }}>
                    <path d="M84.5,45 L84.5,67" id="Path-18" stroke="#FFFFFF" strokeWidth="0.53865" strokeLinecap="round" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 610 }}>
                    <rect id="Rectangle-17-Copy-48" fill="#95DE64" x="15" y="50" width="36" height="11" />
                  </TweenOne>
                </g>
              </g>
              <g id="s4">
                <g id="Group-25" transform="translate(120.000000, 57.000000)">
                  <g id="Group-19" transform="translate(0.345423, 0.544669)">
                    <TweenOne component="g" animation={{ ...animate.x, delay: 300 }}>
                      <mask id="mask-11" fill="white">
                        <use xlinkHref="#path-10" />
                      </mask>
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 310 }}>
                      <use id="Rectangle-17-Copy-4" fill="#D9F2FF" xlinkHref="#path-10" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 320 }}>
                      <ellipse id="Oval-2" fill="#597EF7" style={{ mixBlendMode: 'multiply' }} mask="url(#mask-11)" cx="267.633851" cy="49.4524496" rx="84.4214162" ry="84.518732" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 330 }}>
                      <polygon id="Rectangle-17-Copy-12" fillOpacity="0.09" fill="#000000" mask="url(#mask-11)" points="231.709845 0 265.837651 0 265.837651 34.167147 231.709845 34.167147" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 340 }}>
                      <polygon id="Rectangle-17-Copy-14" fillOpacity="0.09" fill="#000000" mask="url(#mask-11)" points="199.378238 34.167147 231.709845 34.167147 231.709845 57.5446686 199.378238 57.5446686" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 350 }}>
                      <ellipse id="Oval-9-Copy" fill="#06080A" mask="url(#mask-11)" cx="210.15544" cy="19.7809798" rx="3.59240069" ry="3.59654179" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 360 }}>
                      <ellipse id="Oval-9-Copy" fill="#06080A" mask="url(#mask-11)" cx="283.799655" cy="18.8818444" rx="3.59240069" ry="3.59654179" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 370 }}>
                      <ellipse id="Oval-9-Copy" fill="#06080A" mask="url(#mask-11)" cx="319.723661" cy="18.8818444" rx="3.59240069" ry="3.59654179" />
                    </TweenOne>
                    <TweenOne animation={{ ...animate.draw, delay: 700 }} component="path" d="M283.799655,18.8818444 L320.079974,18.8818444" id="Path-15" stroke="#FFFFFF" strokeWidth="0.89775" strokeLinecap="round" />
                    <TweenOne component="g" animation={{ ...animate.x, delay: 380 }}>
                      <ellipse id="Oval-3" fill="#06080A" mask="url(#mask-11)" cx="14.3696028" cy="32.3688761" rx="2.69430052" ry="2.69740634" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 390 }}>
                      <rect id="Rectangle-17-Copy-38" fill="#FFFFFF" mask="url(#mask-11)" transform="translate(248.773748, 20.680115) scale(1, -1) translate(-248.773748, -20.680115) " x="245.181347" y="17.0835735" width="7.18480138" height="7.19308357" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x, delay: 400 }}>
                      <rect id="Rectangle-17-Copy-45" fill="#000000" mask="url(#mask-11)" transform="translate(248.773748, 13.487032) scale(1, -1) translate(-248.773748, -13.487032) " x="245.181347" y="9.89048991" width="7.18480138" height="7.19308357" />
                    </TweenOne>
                  </g>
                  <TweenOne component="polyline" animation={{ ...animate.draw, delay: 800 }} id="Path-8-Copy-2" stroke="#020B3C" strokeWidth="0.89775" strokeLinecap="round" strokeLinejoin="round" points="14.6158175 32.1958978 21.5551548 12.414918 27.9131733 32.1958978 34.2803138 12.414918 40.5554052 32.1958978 47.1995221 12.414918 53.2540275 32.1958978 60.1104377 12.414918 65.9999182 32.1958978 72.551986 12.414918 78.9017118 32.1958978 85.5275847 12.414918 91.7205784 32.1958978 98.0611822 12.414918 104.400957 32.1958978 109 20 208.00505 20" />
                  <TweenOne component="polyline" animation={[{ duration: 0, SVGDraw: '-5% 0' }, { delay: 1200, SVGDraw: '100% 105%', duration: 1500, repeat: -1, repeatDelay: 2000 }]} id="Path-8-Copy-2" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" points="14.6158175 32.1958978 21.5551548 12.414918 27.9131733 32.1958978 34.2803138 12.414918 40.5554052 32.1958978 47.1995221 12.414918 53.2540275 32.1958978 60.1104377 12.414918 65.9999182 32.1958978 72.551986 12.414918 78.9017118 32.1958978 85.5275847 12.414918 91.7205784 32.1958978 98.0611822 12.414918 104.400957 32.1958978 109 20 208.00505 20" />
                </g>
              </g>
              <g id="s5">
                <g id="Group-9" transform="translate(443.000000, 7.000000)" fill="#1890FF">
                  <TweenOne component="g" animation={[{ ...animate.scale, delay: 300, ease: 'easeOutBack' }, { ...animate.loop, y: -5 }]}>
                    <ellipse id="Oval-8-Copy-2" cx="22.2158895" cy="21.7723343" rx="21.5544041" ry="21.5792507" />
                    <path d="M0.66148532,21.7723343 C0.66148532,33.6902254 10.3117208,43.351585 22.2158895,43.351585 L22.2158895,43.351585 C34.1200582,43.351585 43.7702936,33.6902254 43.7702936,21.7723343" id="Oval-8-Copy-2" style={{ mixBlendMode: 'screen' }} opacity="0.963677705" />
                  </TweenOne>
                </g>
              </g>
              <g id="s6">
                <g id="Group-23" transform="translate(55.000000, 28.000000)">
                  <TweenOne component="g" animation={{ ...animate.x }}>
                    <rect id="Rectangle-17" fill="#A3DCFF" opacity="0.543901586" x="0.682210708" y="0.772334294" width="402.348877" height="28.7723343" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x, delay: 100 }}>
                    <rect id="Rectangle-17" fill="url(#linearGradient-3)" x="0.682210708" y="0.772334294" width="296.373057" height="28.7723343" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x, delay: 200 }}>
                    <polygon id="Rectangle-17-Copy-13" fill="#40A9FF" transform="translate(351.839378, 25.948127) scale(-1, -1) translate(-351.839378, -25.948127) " points="331.183074 22.351585 372.495682 22.351585 372.495682 29.5446686 331.183074 29.5446686" />
                  </TweenOne>
                </g>
              </g>
              <g id="s7">
                <g id="Group-12" transform="translate(256.000000, 113.000000)">
                  <g id="Group-14" transform="translate(0.856649, 0.291066)">
                    <TweenOne component="g" animation={{ ...animate.x2, delay: 500 }}>
                      <mask id="mask-13" fill="white">
                        <use xlinkHref="#path-12" />
                      </mask>
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x2, delay: 550 }}>
                      <use id="Rectangle-17-Copy-6" fill="#37ABFF" opacity="0.777693563" xlinkHref="#path-12" />
                    </TweenOne>
                    <TweenOne component="g" animation={{ ...animate.x2, delay: 600 }}>
                      <g id="Oval-4" mask="url(#mask-13)">
                        <use fill="#466CFF" fillRule="evenodd" xlinkHref="#path-14" />
                        <ellipse strokeOpacity="0" stroke="#4B4EE6" strokeWidth="7.182" cx="39.5164076" cy="78.2247839" rx="50.2950104" ry="50.3571268" />
                      </g>
                    </TweenOne>
                    <path d="M39.5164076,24.2766571 C9.75598585,24.2766571 -14.3696028,48.4300561 -14.3696028,78.2247839 C-14.3696028,108.019512 9.75598585,132.172911 39.5164076,132.172911 L39.5164076,132.172911" id="Oval-4" fill="#40A9FF" opacity="0" mask="url(#mask-13)" />
                  </g>
                  <TweenOne component="g" animation={{ ...animate.y2, delay: 700, ease: 'easeOutBack' }}>
                    <rect id="Rectangle-21-Copy" stroke="#FFFFFF" strokeWidth="0.7182" x="102.701069" y="75.2784084" width="8.26280173" height="6.47488357" />
                    <path d="M106.83247,54.2391931 L106.83247,74.9193084" id="Path-13" stroke="#FFFFFF" strokeWidth="0.7182" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 630 }}>
                    <g id="Rectangle-21">
                      <use fill="#5FACFF" xlinkHref="#path-16" />
                      <use fillOpacity="0.560000002" fill="url(#linearGradient-15)" xlinkHref="#path-16" />
                    </g>
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 650 }}>
                    <ellipse id="Oval-3-Copy-4" fill="#06080A" cx="111.322971" cy="47.0461095" rx="2.69430052" ry="2.69740634" />
                  </TweenOne>
                  <TweenOne component="polyline" animation={{ ...animate.draw, delay: 900, duration: 2000 }} id="line1" stroke="#FFFFFF" strokeWidth="0.7182" strokeLinecap="round" strokeLinejoin="round" points="111.21759 47.1541214 94.4492377 47.1541214 94.4492377 68.9613531 23.986392 68.9613531 67.6019908 60.459878 23.986392 58.0577373 67.6019908 49.9726914 23.986392 47.1541214 94.4492377 32.987828 94.4492377 16.9029855 12.2720998 16.9029855" />
                </g>
              </g>
              <g id="s8">
                <g id="Group-2" transform="translate(131.122625, 99.544669)">
                  <TweenOne component="g" animation={{ ...animate.y, delay: 400 }}>
                    <polygon id="Rectangle-17-Copy-5" fill="#1890FF" points="125.734024 7.45244957 136.511226 0.259365994 136.511226 93.7694524 125.734024 100.063401" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 430 }}>
                    <polygon id="Rectangle-17-Copy-5" fill="#77C2FF" points="0 0.259365994 136.511226 0.259365994 136.511226 93.7694524 0 93.7694524" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 460 }}>
                    <polygon id="Rectangle-17-Copy-5" fill="#FADB14" points="0 0.259365994 35.9240069 0.259365994 35.9240069 47.0144092 0 47.0144092" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 490 }}>
                    <polygon id="Rectangle-17-Copy-5" fill="url(#linearGradient-17)" opacity="0.777693563" points="0 47.0144092 43.1088083 47.0144092 43.1088083 93.7694524 0 93.7694524" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 520 }}>
                    <polygon id="Rectangle-17-Copy-5" fill="#1890FF" points="0 0.259365994 39.5164076 0.259365994 39.5164076 25.4351585 0 25.4351585" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 550 }}>
                    <polygon id="Rectangle-17-Copy-5" fill="#06080A" transform="translate(58.376511, 47.014409) scale(-1, 1) translate(-58.376511, -47.014409) " points="55.6822107 0.259365994 61.0708117 0.259365994 61.0708117 93.7694524 55.6822107 93.7694524" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 570 }}>
                    <ellipse id="Oval-3" fill="#000000" cx="17.9620035" cy="35.3256484" rx="2.69430052" ry="2.69740634" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 580 }}>
                    <ellipse id="Oval-3-Copy" fill="#000000" cx="119.447323" cy="16.443804" rx="3.59240069" ry="3.59654179" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 520 }}>
                    <g id="Rectangle-20-Copy-7" opacity="0.419484608">
                      <use fill="#2471F5" xlinkHref="#path-19" />
                      <use fillOpacity="0.370000005" fill="url(#linearGradient-18)" xlinkHref="#path-19" />
                    </g>
                    <g id="Rectangle-20-Copy-8" opacity="0.419484608">
                      <use fill="#2471F5" xlinkHref="#path-20" />
                      <use fillOpacity="0.370000005" fill="url(#linearGradient-18)" xlinkHref="#path-20" />
                    </g>
                    <g id="Rectangle-20-Copy-9" opacity="0.419484608">
                      <use fill="#2471F5" xlinkHref="#path-21" />
                      <use fillOpacity="0.370000005" fill="url(#linearGradient-18)" xlinkHref="#path-21" />
                    </g>
                    <g id="Rectangle-20-Copy-10" opacity="0.419484608">
                      <use fill="#2471F5" xlinkHref="#path-22" />
                      <use fillOpacity="0.370000005" fill="url(#linearGradient-18)" xlinkHref="#path-22" />
                    </g>
                    <g id="Rectangle-20-Copy-11" opacity="0.419484608">
                      <use fill="#2471F5" xlinkHref="#path-23" />
                      <use fillOpacity="0.370000005" fill="url(#linearGradient-18)" xlinkHref="#path-23" />
                    </g>
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 600, ease: 'easeOutBack' }}>
                    <ellipse id="Oval-8-Copy-5" fill="#FFFFFF" cx="82.6252159" cy="48.8126801" rx="21.5544041" ry="21.5792507" />
                    <path d="M104.17962,48.8126801 C104.17962,36.894789 94.5293846,27.2334294 82.6252159,27.2334294 C70.7210472,27.2334294 61.0708117,36.894789 61.0708117,48.8126801" id="Oval-8-Copy-5" fill="#06080A" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 700, ease: 'easeOutBack' }}>
                    <ellipse id="Oval-8-Copy-6" fill="#FFFFFF" cx="57.4784111" cy="74.8876081" rx="14.3696028" ry="14.3861671" />
                    <path d="M57.4784111,89.2737752 L57.4784111,89.2737752 C65.4145235,89.2737752 71.8480138,82.8328688 71.8480138,74.8876081 C71.8480138,66.9423473 65.4145235,60.5014409 57.4784111,60.5014409" id="Oval-8-Copy-6" fill="#FA541C" />
                  </TweenOne>
                  <TweenOne component="polyline" animation={{ ...animate.draw, delay: 1000, duration: 1200 }} id="Path-12" stroke="#F5222D" strokeWidth="0.89775" strokeLinecap="round" strokeLinejoin="round" points="17.9620035 36.0139709 17.9620035 74.8876081 57.8206649 74.8876081 83.039186 49.0506578 119.447323 49.0506578 119.447323 16.443804" />
                </g>
              </g>
              <g id="s9">
                <g id="Group-22" transform="translate(399.000000, 91.000000)">
                  <TweenOne component="g" animation={{ ...animate.x2, delay: 650 }}>
                    <polygon id="Rectangle-17-Copy-7" fill="#1890FF" points="32.8134715 0.711815562 39.9982729 29.4841499 39.9982729 108.608069 32.8134715 79.8357349" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x2, delay: 680 }}>
                    <rect id="Rectangle-17-Copy-7" fill="#40A9FF" x="32.8134715" y="0.711815562" width="107.772021" height="79.1239193" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x2, delay: 700 }}>
                    <rect id="Rectangle-17-Copy-7" fill="#2F54EB" x="39.9982729" y="0.711815562" width="100.587219" height="50.351585" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x2, delay: 720 }}>
                    <rect id="Rectangle-17-Copy-7" fill="#FADB14" transform="translate(72.329879, 65.449568) scale(1, -1) translate(-72.329879, -65.449568) " x="32.8134715" y="51.0634006" width="79.0328152" height="28.7723343" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.alpha, delay: 1000 }}>
                    <path d="M169.324698,79.8357349 C169.324698,63.9452134 156.457717,51.0634006 140.585492,51.0634006 C124.713267,51.0634006 111.846287,63.9452134 111.846287,79.8357349" id="Oval-3-Copy-2" fill="url(#linearGradient-24)" style={{ mixBlendMode: 'multiply' }} opacity="0.892432369" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 700, ease: 'easeOutBack' }}>
                    <ellipse id="Oval-8-Copy-7" fill="#06080A" cx="126.215889" cy="15.0979827" rx="3.59240069" ry="3.59654179" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 730, ease: 'easeOutBack' }}>
                    <ellipse id="Oval-8-Copy-7" fill="#06080A" cx="66.2158895" cy="15.0979827" rx="3.59240069" ry="3.59654179" />
                  </TweenOne>
                  <TweenOne component="polyline" animation={{ ...animate.draw, delay: 1000, duration: 2000 }} id="Path-14" stroke="#40A9FF" strokeWidth="0.89775" strokeLinecap="round" strokeLinejoin="round" points="65.3177893 15.0979827 0.654576857 15.0979827 33.9100503 28.0247718 1.27412828 28.0247718 33.9100503 40.6309287 1.27412828 40.6309287 33.9100503 54.2730979 0.654576857 54.2730979 0.654576857 97.8184438" />
                </g>
              </g>
              <g id="s10">
                <g id="Group-5" transform="translate(120.000000, 208.000000)">
                  <TweenOne component="g" animation={{ ...animate.y, delay: 700 }}>
                    <rect id="Rectangle-17-Copy-8" fill="#597AFF" x="0.345423143" y="0.599423631" width="359.240069" height="98.0057637" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 750 }}>
                    <rect id="Rectangle-17-Copy-8" fill="#06080A" x="14.7150259" y="14.9855908" width="330.500864" height="70.1325648" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 800 }}>
                    <ellipse id="Oval-8-Copy-4" fill="#4E56FB" cx="326.355786" cy="50.0518732" rx="8.08290155" ry="8.09221902" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.y, delay: 850 }}>
                    <use fill="#4E56FB" xlinkHref="#path-26" />
                    <use fillOpacity="0.659999967" fill="url(#linearGradient-25)" xlinkHref="#path-26" />
                  </TweenOne>
                  <TweenOne component="path" animation={{ ...animate.draw, delay: 1000, duration: 1200 }} d="M39,62 L101,62 C106.620648,60.6554657 109.953981,56.3221324 111,49 C112.569028,38.0168014 108.5,27 106,27 C103.5,27 100.069028,42.4831986 101,49 C101.930972,55.5168014 110,62 111,62 C111.666667,62 113.333333,62 116,62 C121.620648,60.6554657 124.953981,56.3221324 126,49 C127.569028,38.0168014 123.5,27 121,27 C118.5,27 115.069028,42.4831986 116,49 C116.930972,55.5168014 125,62 126,62 C126.666667,62 128.333333,62 131,62 C136.620648,60.6554657 139.953981,56.3221324 141,49 C142.569028,38.0168014 138.5,27 136,27 C133.5,27 130.069028,42.4831986 131,49 C131.930972,55.5168014 140,62 141,62 C141.666667,62 143.333333,62 146,62 C151.620648,60.6554657 154.953981,56.3221324 156,49 C157.569028,38.0168014 153.5,27 151,27 C148.5,27 145.069028,42.4831986 146,49 C146.930972,55.5168014 156,62 156,62 C156,62 157.666667,62 161,62 C166.620648,60.6554657 169.953981,56.3221324 171,49 C172.569028,38.0168014 168.5,27 166,27 C163.5,27 160.069028,42.4831986 161,49 C161.930972,55.5168014 170,62 171,62 C171.666667,62 173.333333,62 176,62 C181.620648,60.6554657 184.953981,56.3221324 186,49 C187.569028,38.0168014 183.5,27 181,27 C178.5,27 175.069028,42.4831986 176,49 C176.930972,55.5168014 185,62 186,62 C186.666667,62 188.333333,62 191,62 C196.620648,60.6554657 199.953981,56.3221324 201,49 C202.569028,38.0168014 198.5,27 196,27 C193.5,27 190.069028,42.4831986 191,49 C191.620648,53.3445343 194.953981,57.6778676 201,62 C203.666667,62.6666667 205.666667,62.3333333 207,61 C209,59 211,50 217,50 C221,50 256,50 322,50" id="Path" stroke="#6991FF" strokeWidth="1.4" />
                  <TweenOne component="path" animation={[{ duration: 0, SVGDraw: '-5% 0' }, { delay: 2700, SVGDraw: '100% 105%', duration: 2000, repeat: -1, repeatDelay: 1500 }]} d="M39,62 L101,62 C106.620648,60.6554657 109.953981,56.3221324 111,49 C112.569028,38.0168014 108.5,27 106,27 C103.5,27 100.069028,42.4831986 101,49 C101.930972,55.5168014 110,62 111,62 C111.666667,62 113.333333,62 116,62 C121.620648,60.6554657 124.953981,56.3221324 126,49 C127.569028,38.0168014 123.5,27 121,27 C118.5,27 115.069028,42.4831986 116,49 C116.930972,55.5168014 125,62 126,62 C126.666667,62 128.333333,62 131,62 C136.620648,60.6554657 139.953981,56.3221324 141,49 C142.569028,38.0168014 138.5,27 136,27 C133.5,27 130.069028,42.4831986 131,49 C131.930972,55.5168014 140,62 141,62 C141.666667,62 143.333333,62 146,62 C151.620648,60.6554657 154.953981,56.3221324 156,49 C157.569028,38.0168014 153.5,27 151,27 C148.5,27 145.069028,42.4831986 146,49 C146.930972,55.5168014 156,62 156,62 C156,62 157.666667,62 161,62 C166.620648,60.6554657 169.953981,56.3221324 171,49 C172.569028,38.0168014 168.5,27 166,27 C163.5,27 160.069028,42.4831986 161,49 C161.930972,55.5168014 170,62 171,62 C171.666667,62 173.333333,62 176,62 C181.620648,60.6554657 184.953981,56.3221324 186,49 C187.569028,38.0168014 183.5,27 181,27 C178.5,27 175.069028,42.4831986 176,49 C176.930972,55.5168014 185,62 186,62 C186.666667,62 188.333333,62 191,62 C196.620648,60.6554657 199.953981,56.3221324 201,49 C202.569028,38.0168014 198.5,27 196,27 C193.5,27 190.069028,42.4831986 191,49 C191.620648,53.3445343 194.953981,57.6778676 201,62 C203.666667,62.6666667 205.666667,62.3333333 207,61 C209,59 211,50 217,50 C221,50 256,50 322,50" id="Path" stroke="rgba(255,255,255,.45)" strokeWidth="2" />
                </g>
              </g>
              <g id="s11">
                <g id="Group-11" transform="translate(55.000000, 28.000000)">
                  <TweenOne component="g" animation={{ ...animate.x, delay: 50 }}>
                    <rect id="Rectangle-17-Copy-2" fill="#06080A" transform="translate(33.013817, 15.158501) scale(1, -1) translate(-33.013817, -15.158501) " x="0.682210708" y="0.772334294" width="64.6632124" height="28.7723343" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.scale, delay: 100 }}>
                    <ellipse id="Oval-8-Copy-3" fill="#FA541C" cx="13.2556131" cy="15.1585014" rx="3.59240069" ry="3.59654179" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x, delay: 150 }}>
                    <rect id="Rectangle-17-Copy-36" fill="#FFFFFF" transform="translate(39.300518, 15.158501) scale(1, -1) translate(-39.300518, -15.158501) " x="24.9309154" y="10.6628242" width="28.7392055" height="8.99135447" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.x, delay: 200 }}>
                    <rect id="Rectangle-17-Copy-36" fill="#5471FE" transform="translate(33.911917, 15.158501) scale(1, -1) translate(-33.911917, -15.158501) " x="24.9309154" y="10.6628242" width="17.9620035" height="8.99135447" />
                  </TweenOne>
                </g>
              </g>
              <g id="s12">
                <g id="Group-26" transform="translate(37.000000, 77.000000)" stroke="#FFFFFF" strokeWidth="0.89775" strokeLinecap="round">
                  <TweenOne animation={{ ...animate.draw, delay: 750 }} component="path" d="M0.933191213,0.0542562538 L50.9075638,139.096936" id="Path-17" />
                </g>
              </g>
              <g id="s13">
                <g id="Group-6" transform="translate(386.000000, 176.000000)">
                  <TweenOne component="g" animation={{ ...animate.alpha, y: 10, delay: 600 }}>
                    <ellipse id="Oval-3-Copy-4" fill="#06080A" cx="13.6545769" cy="2.8184438" rx="2.69430052" ry="2.69740634" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.alpha, y: 10, delay: 600 }}>
                    <rect id="Rectangle-17-Copy-11" fill="#E9ECF0" x="0.183074266" y="2.02881844" width="122.141623" height="21.5792507" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.alpha, y: 10, delay: 700 }}>
                    <rect id="Rectangle-17-Copy-11" fill="url(#linearGradient-24)" opacity="0.892432369" x="0.183074266" y="2.02881844" width="81.7271157" height="21.5792507" />
                  </TweenOne>
                  <TweenOne component="g" animation={[{ ...animate.scale, delay: 1200 }, { y: 10, ...animate.loop }]}>
                    <rect id="Rectangle-17-Copy-22" fill="#73D13D" opacity="0.471898321" transform="translate(98.075993, 13.717579) scale(1, -1) translate(-98.075993, -13.717579) " x="95.3816926" y="11.0201729" width="5.38860104" height="5.39481268" />
                  </TweenOne>
                  <TweenOne component="g" animation={[{ ...animate.scale, delay: 1250 }, { y: -10, ...animate.loop }]}>
                    <rect id="Rectangle-17-Copy-24" fill="#73D13D" opacity="0.471898321" transform="translate(107.955095, 20.910663) scale(1, -1) translate(-107.955095, -20.910663) " x="105.260794" y="18.2132565" width="5.38860104" height="5.39481268" />
                  </TweenOne>
                  <TweenOne component="g" animation={[{ ...animate.scale, delay: 1300 }, { y: 15, ...animate.loop }]}>
                    <rect id="Rectangle-17-Copy-26" fill="#73D13D" opacity="0.471898321" transform="translate(131.305699, 6.524496) scale(1, -1) translate(-131.305699, -6.524496) " x="128.611399" y="3.82708934" width="5.38860104" height="5.39481268" />
                  </TweenOne>
                </g>
              </g>
              <g id="s14">
                <g transform="translate(386.000000, 199.000000)">
                  <TweenOne component="g" animation={{ ...animate.alpha, repeat: -1, repeatDelay: 300, yoyo: true, delay: 1200 }}>
                    <polygon id="Rectangle-17-Copy-11" fill="url(#linearGradient-27)" opacity="0.73046875" points="52.2728843 58.8090207 68.4386874 58.8090207 122.324698 0.608069164 0.183074266 0.608069164" />
                  </TweenOne>
                  <TweenOne component="g" animation={{ ...animate.alpha, delay: 1000 }}>
                    <rect id="Rectangle-17-Copy-49" fill="#57DF83" opacity="0.907940765" transform="translate(58.559585, 35.674352) scale(1, -1) translate(-58.559585, -35.674352) " x="55.865285" y="32.9769452" width="5.38860104" height="5.39481268" />
                    <rect id="Rectangle-17-Copy-49" fill="#FADB14" opacity="0.907940765" transform="translate(67.540587, 35.674352) scale(1, -1) translate(-67.540587, -35.674352) " x="64.8462867" y="32.9769452" width="5.38860104" height="5.39481268" />
                    <rect id="Rectangle-17-Copy-49" fill="#FFFFFF" opacity="0.907940765" transform="translate(49.578584, 35.674352) scale(1, -1) translate(-49.578584, -35.674352) " x="46.8842832" y="32.9769452" width="5.38860104" height="5.39481268" />
                  </TweenOne>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg >
  );
}
