import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from '../utils';

import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
class Home extends React.PureComponent {
  state = {
    isMobile,
  }

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    return (
      <DocumentTitle title={`Ant Design - ${this.props.intl.formatMessage({ id: 'app.home.slogan' })}`}>
        <div className="home-wrapper">
          <Banner isMobile={this.state.isMobile} />
          <Page1 isMobile={this.state.isMobile} />
          <Page2 />
        </div>
      </DocumentTitle>
    );
  }
}

export default injectIntl(Home);
