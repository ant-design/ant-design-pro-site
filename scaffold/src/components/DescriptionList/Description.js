import React from 'react';
import classNames from 'classnames';
import styles from './index.less';


const Description = ({ className, children, col, ...restProps }) => {
  const clsString = classNames(styles.description, className);
  return <div className={clsString} {...restProps}>{children}</div>;
};

Description.isDescription = true;

export default Description;
