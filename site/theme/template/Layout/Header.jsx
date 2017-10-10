import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import { Row, Col, AutoComplete, Input, Icon, Menu, Button, Popover } from 'antd';

const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/OwlbOqHNtDoZBwPdjpoz.svg';
const GITHUB_AVATAR = 'https://gw.alipayobjects.com/zos/rmsportal/YblseqNFOlQAVHYecdUR.svg';

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  state = {
    inputValue: '',
    menuVisible: false,
    menuMode: 'horizontal',
  };

  componentDidMount() {
    this.context.router.listen(this.handleHideMenu);
    const { searchInput } = this;
    /* eslint-disable global-require */
    require('enquire.js')
      .register('only screen and (min-width: 0) and (max-width: 768px)', {
        match: () => {
          this.setState({ menuMode: 'inline' });
        },
        unmatch: () => {
          this.setState({ menuMode: 'horizontal' });
        },
      });
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });
    /* eslint-enable global-require */
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }

  handleSelectFilter = () => {

  }
  handleSearch = () => {

  }
  handleInputChange = () => {

  }

  render() {
    const { inputValue, menuMode, menuVisible } = this.state;
    const { location } = this.props;
    const path = location.pathname;

    const searchPlaceholder = '搜索';

    let activeMenuItem = '';
    if (/components/.test(path)) {
      activeMenuItem = 'components';
    } else if (/docs/.test(path)) {
      activeMenuItem = 'docs';
    } else if (path === '/') {
      activeMenuItem = 'home';
    }

    const menu = (
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to="/">介绍</Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to="/docs/getting-started">文档</Link>
        </Menu.Item>
        <Menu.Item key="components">
          <Link to="/components/PageHeader">业务组件</Link>
        </Menu.Item>
        {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="https://ant-design.github.io/test2/" rel="noopener noreferrer">预览</a>
            </Menu.Item>
          )
        }
        {
          menuMode === 'inline' && (
            <Menu.Item key="github">
              <a target="_blank" href="https://github.com/ant-design/test" rel="noopener noreferrer">GitHub</a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={8} sm={24} xs={24}>
            <Link id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>Ant Design Pro</span>
            </Link>
          </Col>
          <Col lg={20} md={16} sm={0} xs={0}>
            <div className="header-meta">
              <div id="search-box">
                <AutoComplete
                  dataSource={[]}
                  value={inputValue}
                  dropdownClassName="component-select"
                  optionLabelProp="data-label"
                  filterOption={this.handleSelectFilter}
                  onSelect={this.handleSearch}
                  onSearch={this.handleInputChange}
                  getPopupContainer={trigger => trigger.parentNode}
                >
                  <Input
                    placeholder={searchPlaceholder}
                    prefix={<Icon type="search" />}
                    ref={ref => this.searchInput = ref}
                  />
                </AutoComplete>
              </div>
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="https://ant-design.github.io/test2/"
                  rel="noopener noreferrer"
                >
                  <Button>预览</Button>
                </a>
                <a href="https://github.com/ant-design/test" target="_blank" rel="noopener noreferrer">
                  <img src={GITHUB_AVATAR} alt="github" />
                </a>
              </div>
              { menuMode === 'horizontal' ? (<div id="menu">{menu}</div>) : null }
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
