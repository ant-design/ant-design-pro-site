import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { setTheme } from 'bizcharts';
import Media from 'react-media';
import enLocale from '../../locale/en-US';
import cnLocale from '../../locale/zh-CN';
import * as utils from '../utils';
import '../../static/style';
import Header from './header';
import Footer from './Footer';

export class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;
    addLocaleData(appLocale.data);

    this.state = {
      appLocale,
    };
  }

  componentDidMount() {
    // 全局 G2 设置
    const config = {
      defaultColor: '#1089ff',
      shape: {
        interval: {
          fillOpacity: 1,
        },
      },
    };

    setTheme(config);
  }

  render() {
    const { children, location, ...restProps } = this.props;
    const { pathname } = location;
    const { appLocale } = this.state;
    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <LocaleProvider locale={enUS}>
          <div
            className={`page-wrapper ${(pathname === '/' || pathname === 'index-cn') &&
              'index-page-wrapper'}`}
          >
            <Header {...restProps} location={location} />
            {React.cloneElement(children, {
              ...children.props,
              isMobile: restProps.isMobile,
            })}
            <Footer {...restProps} location={location} />
          </div>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

const WrapperLayout = props => (
  <Media query="(max-width: 996px)">
    {isMobile => {
      const isNode = typeof window === `undefined`;
      return <Layout {...props} isMobile={isMobile && !isNode} />;
    }}
  </Media>
);
export default WrapperLayout;
