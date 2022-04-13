import React, { FC } from 'react';
import Image from './image/index';
import Grade from './grade/index';
import DemoCode from './demoCode/index';
import { IntlProvider } from 'react-intl';
import enLocale from './locale/en-US';
import cnLocale from './locale/zh-CN';
import * as utils from '../utils';
import { useLocation } from 'dumi';
import './index.less';

const Provider = (IntlProvider as unknown) as FC<{
  children?: React.ReactChild;
  messages: typeof cnLocale.messages;
  locale: 'zh' | 'en';
}>;

const Index: React.FC = () => {
  const location = (useLocation() as unknown) as Location;
  const isZhCN = utils.isZhCN(location?.pathname);
  const appLocale = isZhCN ? cnLocale : enLocale;
  return (
    <Provider messages={appLocale.messages} locale={isZhCN ? 'zh' : 'en'}>
      <div className="homePage">
        <Image />
        <Grade location={location} />
        <DemoCode location={location} />
      </div>
    </Provider>
  );
};

export default Index;
