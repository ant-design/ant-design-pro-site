import React from 'react';
import { Avatar, Tooltip } from 'antd';

class AvatarList extends React.Component<{
  avatarList: Array<{
    href: string;
    text: string;
    src: string;
  }>;
}> {
  main: HTMLDivElement | null;
  async componentDidMount() {}
  render() {
    const { avatarList = [] } = this.props;
    if (!avatarList) {
      return null;
    }
    return (
      <div className="doc-avatar-list">
        {avatarList.map(item => {
          return (
            <a className="href-box" target="_blank" href={`http://github.com${item.href}`}>
              <Tooltip title={item.text}>
                <Avatar src={item.src} alt={item.text} size="small" />
              </Tooltip>
            </a>
          );
        })}
      </div>
    );
  }
}
export default AvatarList;
