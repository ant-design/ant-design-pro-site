import Image from './image/index';
import Grade from './grade/index';
import DemoCode from './demoCode/index';
import { IntlProvider } from 'react-intl';
import enLocale from './locale/en-US.ts';
import cnLocale from './locale/zh-CN.ts';
import * as utils from '../utils';
import { useLocation } from 'dumi';

import './index.less';

export default function () {
  const location = useLocation();
  const isZhCN = utils.isZhCN(location?.pathname);
  const appLocale = isZhCN ? cnLocale : enLocale;
  return (
    <IntlProvider messages={appLocale.messages} locale={isZhCN ? 'zh' : 'en'}>
      <div className="homePage">
        <Image />
        <Grade location={location} />
        <DemoCode location={location} />
      </div>
    </IntlProvider>
  );
}
