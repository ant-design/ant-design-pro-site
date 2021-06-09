import React, { useContext, useEffect, useState } from 'react';
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
moment.locale('zh-cn');

const DarkButton = () => {
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches && 'dark';
  const defaultDarken = localStorage.getItem('procomponents_dark_theme') || colorScheme;
  const [isDark, { toggle }] = useDarkreader(defaultDarken === 'dark');
  if (!isBrowser()) {
    return null;
  }
  return (
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
    </div>
  );
};

function loadJS(url, callback) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function () {
    callback?.();
  };
  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
}

export default ({ children, ...props }: IRouteComponentProps) => {
  const context = useContext(dumiContext);
  useEffect(() => {
    if (!isBrowser()) {
      return null;
    }
  }, []);
  console.log(context);
  return (
    <HelmetProvider>
      <ConfigProvider locale={zhCN}>
        <Layout {...props}>
          <>
            <Helmet>
              <title>{`${context.meta.title} - Ant Design Pro`}</title>
            </Helmet>
            {children}
            <DarkButton />
          </>
        </Layout>
      </ConfigProvider>
    </HelmetProvider>
  );
};
