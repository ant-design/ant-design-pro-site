import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import axios from 'axios';
import { Row, Col, Icon, Menu, Button, Popover, Select } from 'antd';

const { Option, OptGroup } = Select;

const LOGO_URL = 'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg';
const GITHUB_AVATAR = 'https://gw.alipayobjects.com/zos/rmsportal/YblseqNFOlQAVHYecdUR.svg';

// https://www.algolia.com/apps/YEWBNYLVLW/
const searchUrl = 'https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176';

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  state = {
    inputValue: '',
    menuVisible: false,
    menuMode: 'horizontal',
    searchOption: [],
    searching: false,
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

  search = (key, success, error) => {
    clearTimeout(this.timer);
    if (!key) {
      success();
      return;
    }

    this.timer = setTimeout(() => {
      this.setState({
        searching: true,
      });
      axios.post(searchUrl, {
        params: `query=${key}&hitsPerPage=20&facets=*&maxValuesPerFacet=10&facetFilters=[]`,
      }).then((response) => {
        this.setState({
          searching: false,
        });
        if (success) {
          success(response);
        }
      }).catch((err) => {
        this.setState({
          searching: false,
        });
        if (error) {
          error(err);
        }
      });
    }, 200);
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

  handleSelect = (value) => {
    location.href = value;
  }

  handleChange = (value) => {
    this.setState({ inputValue: value });

    this.search(value, (data) => {
      if (data && data.data && data.data.hits) {
        this.setState({
          searchOption: data.data.hits,
        });
      } else {
        this.setState({
          searchOption: [],
        });
      }
    });
  }

  render() {
    const { inputValue, menuMode, menuVisible, searchOption, searching } = this.state;
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
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to="/docs/getting-started">文档</Link>
        </Menu.Item>
        <Menu.Item key="components">
          <Link to="/components/AvatarList">组件</Link>
        </Menu.Item>
        {
          menuMode === 'inline' && (
            <Menu.Item key="preview">
              <a target="_blank" href="https://ant-design.github.io/test2/" rel="noopener noreferrer">预览</a>
            </Menu.Item>
          )
        }
      </Menu>
    );

    const componentSearchOption = searchOption.filter(v => v.type === 'component').map(
      d => <Option key={d.url}>{d.title}</Option>
    );
    const docSearchOption = searchOption.filter(v => v.type === 'doc').map(
      d => <Option key={d.url}>{d.title}</Option>
    );

    const options = [];

    if (componentSearchOption) {
      options.push(<OptGroup label="组件" key="component">{componentSearchOption}</OptGroup>);
    }
    if (docSearchOption) {
      options.push(<OptGroup label="文档" key="doc">{docSearchOption}</OptGroup>);
    }

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
          <Col xl={5} lg={8} md={8} sm={24} xs={24}>
            <Link id="logo" to="/">
              <img src={LOGO_URL} alt="logo" />
              <span>ANT DESIGN PRO</span>
            </Link>
          </Col>
          <Col xl={19} lg={16} md={16} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Select
                mode="combobox"
                value={inputValue}
                placeholder={searchPlaceholder}
                notFoundContent=""
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                optionLabelProp="label"
                onSelect={this.handleSelect}
                onChange={this.handleChange}
              >
                {options}
              </Select>
              {
                searching && <Icon type="loading" />
              }
            </div>
            <div className="header-meta">
              <div id="preview">
                <a
                  id="preview-button"
                  target="_blank"
                  href="https://ant-design.github.io/test2/"
                  rel="noopener noreferrer"
                >
                  <Button><Icon type="eye-o" /> 预览</Button>
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
