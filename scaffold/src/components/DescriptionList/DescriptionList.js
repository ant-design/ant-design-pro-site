import React from 'react';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import styles from './index.less';
import responsive from './responsive';


export default ({ className, title, col = 3, layout = 'horizontal', children, ...restProps }) => {
  const clsString = classNames(styles.descriptionList, styles[layout], className);
  const column = col > 4 ? 4 : col;
  const groupedChildren = [];
  React.Children.forEach(children, (element) => {
    if (element && element.type && element.type.isTerm) {
      groupedChildren.push([element]);
    } else if (element && element.type && element.type.isDescription) {
      groupedChildren[groupedChildren.length - 1].push(element);
    }
  });
  return (
    <div className={clsString} {...restProps}>
      {title ? <div className={styles.title}>{title}</div> : null}
      <Row gutter={32}>
        {groupedChildren.map((list, index) => {
          const key = new Date().getTime() + index;
          return (
            <Col key={key} style={layout === 'horizontal' ? { display: 'flex' } : {}} {...responsive[column]}>
              {list}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
