import React, { useContext, useEffect, useMemo } from 'react';
import Layout from 'dumi-theme-default/src/layout';
import dumiContext from '@umijs/preset-dumi/lib/theme/context';
import { ConfigProvider, Switch } from 'antd';
import { IRouteComponentProps, isBrowser } from 'umi';
import zhCN from 'antd/es/locale/zh_CN';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import moment from 'moment';
import useDarkreader from './useDarkreader';
import 'moment/locale/zh-cn';
import './layout.less';
import Dashboard from './dashboard';
import Home from './home/index';
moment.locale('zh-cn');

const DarkButton = () => {
  const colorScheme = useMemo(() => {
    if (!isBrowser()) {
      return 'light';
    }
    return matchMedia?.('(prefers-color-scheme: dark)').matches && 'dark';
  }, []);

  const defaultDarken = useMemo(() => {
    if (!isBrowser()) {
      return 'light';
    }
    return localStorage.getItem('procomponents_dark_theme') || colorScheme;
  }, []);

  const [isDark, { toggle }] = useDarkreader(defaultDarken === 'dark');
  if (!isBrowser()) {
    return null;
  }
  return (
    <Switch
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      defaultChecked={defaultDarken === 'dark'}
      checked={isDark}
      onChange={(check) => {
        toggle();
        if (!check) {
          localStorage.setItem('procomponents_dark_theme', 'light');
          return;
        }
        localStorage.setItem('procomponents_dark_theme', 'dark');
      }}
    />
  );
};

export default ({ children, ...props }: IRouteComponentProps) => {
  const context = useContext(dumiContext);
  const { location } = props;
  const { pathname = '/' } = location;
  if (pathname === '/') {
    return null;
  }
  let style: { paddingLeft?; paddingRight? } = {};
  if (pathname.includes('/index')) {
    style.paddingLeft = 0;
    style.paddingRight = 0;
  }
  return (
    <HelmetProvider>
      <ConfigProvider locale={zhCN}>
        <Layout {...props}>
          <>
            <Helmet>
              <title>{`${context.meta.title} - Ant Design Pro`}</title>
            </Helmet>
            {!props.location.pathname.includes('/index') && <h1>{context.meta.title}</h1>}
            {children}
            <div
              style={{
                position: 'fixed',
                right: 8,
                top: 0,
                zIndex: 999,
                display: 'flex',
                alignItems: 'center',
              }}
              className="procomponents_dark_theme_view"
            >
              {isBrowser() ? <DarkButton /> : null}
            </div>
            {props.location.pathname.includes('/index') && <Home location={location} />}
            {props.location.pathname.includes('/docs/overview') ? (
              <Dashboard
                menuData={[
                  {
                    title: '模板组件',
                    children: [
                      {
                        title: 'ProLayout - 高级布局',
                        path: 'https://procomponents.ant.design/components/layout',
                      },
                      {
                        title: 'ProForm - 高级表单',
                        path: 'https://procomponents.ant.design/components/form',
                      },
                      {
                        title: 'ProTable - 高级表格',
                        path: 'https://procomponents.ant.design/components/table',
                      },
                      {
                        title: 'ProList - 高级列表',
                        path: 'https://procomponents.ant.design/components/list',
                      },
                      {
                        title: 'ProDescriptions - 高级定义列表',
                        path: 'https://procomponents.ant.design/components/descriptions',
                      },
                    ],
                  },
                  ...context.menu,
                ]}
              />
            ) : null}
          </>
        </Layout>
      </ConfigProvider>
    </HelmetProvider>
  );
};
