import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Card, Select } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';

const Option = Select.Option;
const FormItem = Form.Item;
const TagOption = TagSelect.Option;
const TagExpand = TagSelect.Expand;

@Form.create()
class SearchList extends Component {
  setOwner = () => {
    const { form } = this.props;
    form.setFieldsValue({
      owner: ['wzj'],
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

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

    return (
      <PageHeaderLayout>
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
        </div>
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  rule: state.rule,
}))(SearchList);
