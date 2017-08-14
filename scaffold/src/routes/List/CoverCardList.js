import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Row, Col, Form, Card, Select, Spin } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';
import AvatarList from '../../components/AvatarList';

import styles from './CoverCardList.less';

const Option = Select.Option;
const FormItem = Form.Item;
const TagOption = TagSelect.Option;
const TagExpand = TagSelect.Expand;

/* eslint react/no-array-index-key: 0 */
@Form.create()
class CoverCardList extends PureComponent {
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

    return (
      <PageHeaderLayout>
        <div className={styles.coverCardList}>
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
                    cover={<img alt={item.title} src={item.cover} />}
                  >
                    <Card.Meta
                      title={item.title}
                      description={item.subDescription}
                    />
                    <div className={styles.cardItemContent}>
                      <span>{moment(item.updatedAt).fromNow()}</span>
                      <div className={styles.avatarList}>
                        <AvatarList size="small">
                          {
                            item.members.map((member, i) => (
                              <AvatarList.Item
                                key={`${item.id}-avatar-${i}`}
                                src={member.avatar}
                                tips={member.name}
                              />
                            ))
                          }
                        </AvatarList>
                      </div>
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
}))(CoverCardList);
