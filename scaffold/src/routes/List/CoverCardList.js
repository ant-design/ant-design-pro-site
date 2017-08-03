import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Card, Select } from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import StandardFormRow from '../../components/StandardFormRow';
import TagSelect from '../../components/TagSelect';

import styles from './CoverCardList.less';

const Option = Select.Option;
const FormItem = Form.Item;
const TagOption = TagSelect.Option;
const TagExpand = TagSelect.Expand;

class CoverCardList extends PureComponent {
  handleFormSubmit = () => {
    // setTimeout 用于保证获取表单值是在所有表单字段更新完毕的时候
    setTimeout(() => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          // eslint-disable-next-line
          console.log(values);
        }
      });
    }, 0);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <PageHeaderLayout>
        <div className={styles.coverCardList}>
          <Card
            noHovering
          >
            <Form
              layout="inline"
            >
              <StandardFormRow title="所属类目">
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
}))(Form.create()(CoverCardList));
