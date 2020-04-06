import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const EditButton: React.FC<{
  title: React.ReactNode;
  filename?: string;
  sourcePath?: string;
}> = ({
  title,
  filename,
  sourcePath = 'https://github.com/ant-design/ant-design-pro-site/edit/master',
}) => (
  <Tooltip title={title}>
    <a
      className="edit-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`${sourcePath}${filename}`}
    >
      <EditOutlined />
    </a>
  </Tooltip>
);

export default EditButton;
