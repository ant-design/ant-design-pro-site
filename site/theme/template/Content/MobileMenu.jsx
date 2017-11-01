import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Icon } from 'antd';

class MobileMenu extends React.PureComponent {
  static defaultProps = {
    className: 'moblie-menu',
    openClassName: 'open',
    levelId: 'react-content',
    leveOpenClassName: 'content-open',
  }

  state = {
    open: false,
  };

  componentDidMount() {
    this.levelDom = document.getElementById(this.props.levelId);
    this.container = this.defaultGetContainer();
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    this.renderPickerComponent(this.getChildToRender());
  }
  componentWillUnmount() {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  onTouchEnd = (e, close) => {
    e.preventDefault();
    const open = close || this.state.open;
    if (open) {
      const reg = new RegExp(this.props.leveOpenClassName, 'g');
      this.levelDom.className = this.levelDom.className.replace(reg, '');
    } else {
      this.levelDom.className += this.props.leveOpenClassName;
    }
    this.setState({
      open: !open,
    });
  }

  getChildToRender = () => {
    const { open } = this.state;
    const className = classnames(this.props.className, {
      [this.props.openClassName]: open,
    });
    const iconChild = this.props.iconChild || <Icon type={open ? 'menu-unfold' : 'menu-fold'} />;
    return (
      <div className={className}>
        <div
          className={`${this.props.className}-bg`}
          onTouchEnd={(e) => { this.onTouchEnd(e, true); }}
          onClick={(e) => { this.onTouchEnd(e, true); }}
        />
        <div className={`${this.props.className}-content`}>
          {this.props.children}
        </div>
        <div
          className={`${this.props.className}-button`}
          onClick={(e) => { this.onTouchEnd(e); }}
        >
          {iconChild}
        </div>
      </div>
    );
  }

  defaultGetContainer = () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    // container.className = 'moblie-menu';
    return container;
  };

  renderPickerComponent = (children) => {
    ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.container);
  }

  render() {
    return null;
  }
}

export default MobileMenu;
