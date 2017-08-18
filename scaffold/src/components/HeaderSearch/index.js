import React, { PureComponent } from 'react';
import { Input, Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

export default class HeaderSearch extends PureComponent {
  state = {
    searchMode: false,
  };
  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      if (this.state.searchMode) {
        this.input.refs.input.focus();
      }
    });
  }
  leaveSearchMode = () => {
    this.setState({ searchMode: false });
  }
  render() {
    const { className, placeholder } = this.props;
    const inputClass = classNames(styles.input, {
      [styles.show]: this.state.searchMode,
    });
    return (
      <span className={className} onClick={this.enterSearchMode}>
        <Icon type="search" />
        <Input
          className={inputClass}
          placeholder={placeholder}
          ref={(node) => { this.input = node; }}
          onBlur={this.leaveSearchMode}
        />
      </span>
    );
  }
}
