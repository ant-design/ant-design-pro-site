import Image from './image/index';
import Grade from './grade/index';
import DemoCode from './demoCode/index';
import './index.less';

export default function (location) {
  return (
    <div className="homePage">
      <Image />
      <Grade />
      <DemoCode location={location} />
    </div>
  );
}
