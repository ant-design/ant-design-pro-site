import React from 'react';
import * as utils from '../../utils';
import './index.less';
export default function Grade({ location }) {
  const gradeData = [
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24BtlIJEaI9/shandian.svg',
      title: '高效快速',
      desc: '基于 Module Federation ，项目秒启动',
      enDesc: 'Based on the Module Federation, the project starts in seconds',
      enTitle: 'Fast',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: '模板组件',
      desc: '内置模板组件，高效开发',
      enDesc: 'Built-in template components for efficient development',
      enTitle: 'ProComponents',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/CPoxyg4J2d/geography.png',
      title: '国际化',
      desc: '提供完备的国际化解决方案',
      enDesc: 'Provide a complete international solution',
      enTitle: 'internationalization',
    },
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*cY0tTr8q3Y4AAAAAAAAAAABkARQnAQ',
      title: '预设样式',
      desc: '样式美观大方，无缝对接 Ant Design',
      enDesc: 'The style is beautiful and generous, seamlessly docking Ant Design',
      enTitle: 'Preset style',
    },
    {
      icon: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*abGUQKUocSMAAAAAAAAAAABkARQnAQ',
      title: '最佳实践',
      desc: '自带多场景最佳实践，默认好用',
      enDesc: 'Comes with multi-scenario best practices, which work by default',
      enTitle: 'Best practices',
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
      title: 'TypeScript',
      desc: '全量使用 TypeScript 开发',
      enDesc: 'Develop in full using TypeScript',
      enTitle: 'TypeScript',
    },
  ];
  const isZhCN = utils.isZhCN(location?.pathname);

  return (
    <div className="grade-wrapper">
      {gradeData.map((item, i) => {
        return (
          <div className="grade" key={i}>
            <img src={item.icon} />
            <h3>{isZhCN ? item.title : item.enTitle}</h3>
            <p>{isZhCN ? item.desc : item.enDesc}</p>
          </div>
        );
      })}
    </div>
  );
}
