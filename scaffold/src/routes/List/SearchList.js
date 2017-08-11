import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'dva';
import { Form, Card, Select, Input, Button, List, Tag, Icon, Avatar } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';
import styles from './SearchList.less';

const Option = Select.Option;
const FormItem = Form.Item;
const TagOption = TagSelect.Option;
const TagExpand = TagSelect.Expand;

@Form.create()
class SearchList extends Component {
  state = {
    count: 3,
    showLoadMore: true,
  }

  componentDidMount() {
    const { count } = this.state;
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count,
      },
    });
  }

  setOwner = () => {
    const { form } = this.props;
    form.setFieldsValue({
      owner: ['wzj'],
    });
  }

  handleLoadMore = () => {
    const { count } = this.state;
    const nextCount = count + 5;

    this.setState({
      count: nextCount,
    });
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: nextCount,
      },
    });

    // fack count
    if (nextCount < 10) {
      this.setState({
        showLoadMore: false,
      });
    }
  }

  render() {
    const { showLoadMore } = this.state;
    const { form, list: { list } } = this.props;
    const { getFieldDecorator } = form;

    const owners = [
      {
        id: 'wzj',
        name: '我自己',
      },
      {
        id: 'wjh',
        name: '吴家豪',
      },
      {
        id: 'zxx',
        name: '周星星',
      },
      {
        id: 'zly',
        name: '赵丽颖',
      },
      {
        id: 'ym',
        name: '姚明',
      },
    ];

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

    const pageHeaderContent = (
      <div className={styles.search}>
        <Input
          style={{ width: 522 }}
          placeholder="请输入"
          size="large"
          addonAfter={<Button onClick={this.handleFormSubmit} style={{ width: 86 }} type="primary">搜索</Button>}
        />
      </div>
    );

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    const ListContent = ({ data: { content, updatedAt, avatar, owner, href } }) => (
      <div className={styles.listContent}>
        <p>{content}</p>
        <div>
          <Avatar src={avatar} size="small" />{owner} 发布在 <a href={href}>{href}</a>
          <em>{moment(updatedAt).format('YYYY-MM-DD hh:mm')}</em>
        </div>
      </div>
    );

    return (
      <PageHeaderLayout
        title="搜索列表"
        content={<div style={{ textAlign: 'center' }}>{pageHeaderContent}</div>}
        tabList={tabList}
      >
        <div>
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
              <StandardFormRow title="Owner">
                <FormItem>
                  {getFieldDecorator('owner', {
                    initialValue: ['wjh', 'zxx'],
                  })(
                    <Select
                      mode="multiple"
                      style={{ width: 286 }}
                      placeholder="选择 owner"
                    >
                      {
                        owners.map(owner =>
                          <Option key={owner.id} value={owner.id}>{owner.name}</Option>
                        )
                      }
                    </Select>
                  )}
                  <a onClick={this.setOwner} style={{ marginLeft: 8 }}>只看自己的</a>
                </FormItem>
              </StandardFormRow>
              <StandardFormRow
                last
                title="其它选项"
              >
                <FormItem
                  label="活跃用户"
                >
                  {getFieldDecorator('user', {})(
                    <Select
                      onChange={this.handleFormSubmit}
                      placeholder="不限"
                      style={{ width: 200 }}
                    >
                      <Option value="lisa">李三</Option>
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
                    </Select>
                  )}
                </FormItem>
              </StandardFormRow>
            </Form>
          </Card>
          <Card style={{ marginTop: 16 }}>
            <List
              showLoadMore={(list.length > 0) && showLoadMore}
              onLoadMore={this.handleLoadMore}
              itemLayout="vertical"
            >
              {
                list && list.map(item => (
                  <List.Item
                    key={item.id}
                    actions={[<IconText type="star-o" text={item.star} />, <IconText type="like-o" text={item.like} />, <IconText type="message" text={item.message} />]}
                    extra={<div style={{ width: 272, height: 1 }} />}
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.title}</a>}
                      description={<div><Tag>Ant Design</Tag><Tag>设计语言</Tag><Tag>蚂蚁金服</Tag></div>}
                    />
                    <ListContent data={item} />
                  </List.Item>
                ))
              }
            </List>
          </Card>
        </div>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  list: state.list,
}))(SearchList);
