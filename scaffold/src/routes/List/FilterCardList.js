import React, { PureComponent } from 'react';
import numeral from 'numeral';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, Spin, Icon, Avatar, Input, Button } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';

import styles from './FilterCardList.less';

const Option = Select.Option;
const FormItem = Form.Item;
const TagOption = TagSelect.Option;
const TagExpand = TagSelect.Expand;

const formatWan = (val) => {
  const v = val * 1;
  if (!v || isNaN(v)) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = <span>{result}<em className={styles.wan}>万</em></span>;
  }
  return result;
};

/* eslint react/no-array-index-key: 0 */
@Form.create()
class FilterCardList extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 8,
      },
    });
  }

  handleFormSubmit = () => {
    const { form, dispatch } = this.props;
    // setTimeout 用于保证获取表单值是在所有表单字段更新完毕的时候
    setTimeout(() => {
      form.validateFields((err) => {
        if (!err) {
          // eslint-disable-next-line
          dispatch({
            type: 'list/fetch',
            payload: {
              count: 8,
            },
          });
        }
      });
    }, 0);
  }

  render() {
    const { list: { list, loading }, form } = this.props;
    const { getFieldDecorator } = form;

    const tabList = [
      {
        key: 'docs',
        tab: '文章',
      },
      {
        key: 'app',
        tab: '应用',
      },
      {
        key: 'project',
        tab: '项目',
      },
    ];

    const CardInfo = ({ activeUser, newUser }) => (
      <div className={styles.cardInfo}>
        <div>
          <p>活跃用户</p>
          <p>{activeUser}</p>
          <span />
        </div>
        <div>
          <p>新增用户</p>
          <p>{newUser}</p>
        </div>
      </div>
    );

    const content = (
      <div className={styles.search}>
        <Input
          style={{ width: 522 }}
          placeholder="请输入"
          size="large"
          addonAfter={<Button onClick={this.handleFormSubmit} style={{ width: 86 }} type="primary">搜索</Button>}
        />
      </div>
    );

    return (
      <PageHeaderLayout
        title="带筛选列表"
        content={<div style={{ textAlign: 'center' }}>{content}</div>}
        tabList={tabList}
      >
        <div className={styles.filterCardList}>
          <Card
            noHovering
          >
            <Form
              layout="inline"
            >
              <StandardFormRow title="所属类目" block>
                <FormItem>
                  {getFieldDecorator('category')(
                    <TagSelect onChange={this.handleFormSubmit}>
                      <TagOption value="cat1">类目一</TagOption>
                      <TagOption value="cat2">类目二</TagOption>
                      <TagOption value="cat3">类目三</TagOption>
                      <TagOption value="cat4">类目四</TagOption>
                      <TagExpand>
                        <TagOption value="cat5">类目五</TagOption>
                        <TagOption value="cat6">类目六</TagOption>
                      </TagExpand>
                    </TagSelect>
                  )}
                </FormItem>
              </StandardFormRow>
              <StandardFormRow
                last
                title="其它选项"
              >
                <FormItem
                  label="作者"
                >
                  {getFieldDecorator('author', {})(
                    <Select
                      onChange={this.handleFormSubmit}
                      placeholder="不限"
                      style={{ width: 200 }}
                    >
                      <Option value="lisa">王昭君</Option>
                    </Select>
                  )}
                </FormItem>
                <FormItem
                  label="好评度"
                >
                  {getFieldDecorator('rate', {})(
                    <Select
                      onChange={this.handleFormSubmit}
                      placeholder="不限"
                      style={{ width: 200 }}
                    >
                      <Option value="good">优秀</Option>
                      <Option value="normal">普通</Option>
                    </Select>
                  )}
                </FormItem>
              </StandardFormRow>
            </Form>
          </Card>
          <Row gutter={16} style={{ marginTop: 16 }}>
            {
              loading && <Spin />
            }
            {
              !loading && list && list.map(item => (
                <Col span={6} style={{ marginBottom: 16 }} key={item.id}>
                  <Card
                    actions={[<Icon type="copy" />, <Icon type="solution" />, <Icon type="setting" />, <Icon type="delete" />]}
                  >
                    <Card.Meta
                      avatar={<Avatar size="large" src={item.avatar} />}
                      title={item.title}
                    />
                    <div className={styles.cardItemContent}>
                      <CardInfo
                        activeUser={formatWan(item.activeUser)}
                        newUser={numeral(item.newUser).format('0,0')}
                      />
                    </div>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </div>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  list: state.list,
}))(FilterCardList);
