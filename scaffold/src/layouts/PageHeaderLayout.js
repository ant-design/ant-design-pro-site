import React from 'react';
import { Icon } from 'antd';
import PageHeader from '../components/PageHeader';
import Footer from '../components/GlobalFooter';

const links = [
  {
    title: '帮助',
    href: '',
  }, {
    title: '隐私',
    href: '',
  }, {
    title: '条款',
    href: '',
    blankTarget: true,
  },
];

const copyright = <div>Copyright <Icon type="copyright" /> 2017 蚂蚁金服体验技术部出品</div>;

export default ({ children, footer, ...restProps }) => (
  <div style={{ margin: -24 }}>
    <PageHeader {...restProps} />
    {children ? <div style={{ margin: (footer ? '24px 24px 0 24px' : 24) }}>{children}</div> : null}
    {
      footer && <Footer links={links} copyright={copyright} />
    }
  </div>
);
