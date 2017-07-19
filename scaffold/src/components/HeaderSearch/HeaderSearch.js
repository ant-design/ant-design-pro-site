import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import classNames from 'classnames';
import styles from './HeaderSearch.less';

export default class HeaderSearch extends Component {
  state = {
    searchMode: false,
  };
  toggleSearchMode = () => {
    this.setState({ searchMode: !this.state.searchMode }, () => {
      if (this.state.searchMode) {
        this.input.refs.input.focus();
      }
    });
  }
  render() {
    const { className, placeholder } = this.props;
    const inputClass = classNames(styles.input, {
      [styles.show]: this.state.searchMode,
    });
    return (
      <span className={className}>
        <Icon type="search" onClick={this.toggleSearchMode} />
        <Input
          className={inputClass}
          placeholder={placeholder}
          ref={(node) => { this.input = node; }}
          onBlur={this.toggleSearchMode}
        />
      </span>
    );
  }
}
