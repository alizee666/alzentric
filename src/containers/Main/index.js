import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { compose } from 'recompose';

import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { formatRoutes } from 'utils';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import SidebarNav from 'components/SidebarNav';
import { main as actions } from './module';
import messages from './messages';


export class Main extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    main: ImmutablePropTypes.mapContains({
      isVisible: PropTypes.bool.isRequired,
    }).isRequired,
    children: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  };

  componentWillMount() {
  }

  componentDidUpdate() {
  }

  render() {
    const {
      intl,
      children,
      toggleSidebar,
      main,
      route: {
        path,
        childRoutes,
      },
    } = this.props;

    const isVisible = main.get('isVisible');
    const routes = formatRoutes(path, childRoutes, messages);

    const onSidebarToggle = () => {
      toggleSidebar();
    };

    return (
      <App centered={false}>
        <Split
          fixed
          flex="right"
          priority="right"
        >

          {isVisible &&
            <SidebarNav
              isLogo={isVisible}
              routes={routes}
              bgColor="neutral-1"
              className="dashboard-sidebar"
              toggleSidebar={onSidebarToggle}
              title={{
                main: intl.formatMessage(messages.MyApp, { APP_NAME: process.env.APP_NAME }),
                sub: '',
              }}
            />
          }
          {children}
        </Split>
      </App>
    );
  }
}

export const stateToProps = state => ({
  main: state.main,
});

export default compose(
  connect(stateToProps, actions),
  injectIntl,
)(Main);
