import React from 'react';
import classNames from 'classnames';
import styles from './index.less';


const Term = ({ className, children, ...restProps }) => {
  const clsString = classNames(styles.term, className);
  return <div className={clsString} {...restProps}>{children}</div>;
};

Term.isTerm = true;

export default Term;
