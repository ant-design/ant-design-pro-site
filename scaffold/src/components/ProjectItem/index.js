import React from 'react';
import { Link } from 'dva/router';
import moment from 'moment';

import styles from './index.less';

export default ({ data: { title, logo, description, updatedAt, member, link, memberLink } }) => (
  <div
    className={styles.projectItem}
  >
    <div className={styles.logo}>
      <img src={logo} alt={title} />
    </div>
    <div className={styles.content}>
      <Link to={link}>{title}</Link>
      <p>{description || ''}</p>
      <div>
        <Link to={memberLink}>{member || ''}</Link>
        {
          updatedAt && <span>{moment(updatedAt).fromNow()}</span>
        }
      </div>
    </div>
  </div>
);
