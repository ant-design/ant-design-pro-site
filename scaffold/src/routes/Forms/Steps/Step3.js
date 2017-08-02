import React from 'react';
import { Button, Row, Col } from 'antd';
import Result from '../../../components/Result';
import styles from './style.less';

export default ({ onNext }) => {
  const information = (
    <div className={styles.information}>
      <Row>
        <Col span={8} className={styles.label}>付款账户：</Col>
        <Col span={16}>AntDesign@example.com</Col>
      </Row>
      <Row>
        <Col span={8} className={styles.label}>收款账户：</Col>
        <Col span={16}>XXXX XXXX XXXX XXXX 某银行储蓄卡</Col>
      </Row>
      <Row>
        <Col span={8} className={styles.label}>收款人姓名：</Col>
        <Col span={16}>张三</Col>
      </Row>
      <Row>
        <Col span={8} className={styles.label}>转账金额：</Col>
        <Col span={16}>50,000.00</Col>
      </Row>
    </div>
  );
  const actions = (
    <Button type="primary" size="large" onClick={onNext}>
      再转一笔
    </Button>
  );
  return (
    <Result
      type="success"
      title="操作成功"
      desc="预计两小时内到账"
      extra={information}
      actions={actions}
      className={styles.result}
    />
  );
};
