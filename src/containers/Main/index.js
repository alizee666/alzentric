import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { compose } from 'recompose';

import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { formatRoutes } from 'utils';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

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
      <App centered={true}>
        <div>
          Calculator
        </div>
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
