import React from 'react';
import './index.less';
export default function Grade() {
  const gradeData = [
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*43rfS4dD0MUAAAAAAAAAAABkARQnAQ',
      title: '简单易用',
      desc: '在 Ant Design 上进行了自己的封装，更加易用',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: '与 Ant Design 设计体系一脉相承，无缝对接 antd 项目',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/CPoxyg4J2d/geography.png',
      title: '国际化',
      desc: '提供完备的国际化，与 Ant Design 体系打通',
    },
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*cY0tTr8q3Y4AAAAAAAAAAABkARQnAQ',
      title: '预设样式',
      desc: '样式风格与 antd 一脉相承，无需魔改，浑然天成',
    },
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*abGUQKUocSMAAAAAAAAAAABkARQnAQ',
      title: '预设行为',
      desc: '更少的代码，更少的 Bug',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
      title: 'TypeScript',
      desc: '使用 TypeScript 开发，提供完整的类型定义文件',
    },
  ];
  return (
    <div className="grade-wrapper">
      {gradeData.map((item, i) => {
        return (
          <div className="grade" key={i}>
            <img src={item.icon} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
