import Image from './image/index';
import Grade from './grade/index';
import DemoCode from './demoCode/index';
import { IntlProvider } from 'react-intl';
import enLocale from './locale/en-US.ts';
import cnLocale from './locale/zh-CN.ts';
import * as utils from '../utils';

import './index.less';

export default function ({ location }) {
  const appLocale = utils.isZhCN(location?.pathname) ? cnLocale : enLocale;

  return (
    <IntlProvider messages={appLocale.messages}>
      <div className="homePage">
        <Image location={location} />
        <Grade location={location} />
        <DemoCode location={location} />
      </div>
    </IntlProvider>
  );
}
