import React from 'react';
import { Avatar, Tooltip } from 'antd';

class AvatarList extends React.Component<{
  avatarList: {
    username: string;
    url: string;
  }[];
}> {
  main: HTMLDivElement | null;

  render() {
    let { avatarList = [] } = this.props;
    try {
      avatarList = JSON.parse((avatarList as unknown) as string);
    } catch (error) {
      // do not need
    }
    if (!avatarList || !Array.isArray(avatarList)) {
      return null;
    }
    return (
      <div className="doc-avatar-list">
        {avatarList.map(item => (
          <a
            className="href-box"
            target="_blank"
            key={item.username}
            rel="noopener noreferrer"
            href={`http://github.com/${item.username}`}
          >
            <Tooltip title={item.username}>
              <Avatar src={item.url} alt={item.username} size="small" />
            </Tooltip>
          </a>
        ))}
      </div>
    );
  }
}
export default AvatarList;
