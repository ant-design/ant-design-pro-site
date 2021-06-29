import Image from './image/index';
import Grade from './grade/index';
import './index.less';

export default function () {
  return (
    <div className="homePage">
      <Image />
      <Grade />
    </div>
  );
}
