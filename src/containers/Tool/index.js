import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ImmutablePropTypes from 'react-immutable-proptypes';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';

import SidebarNav from 'components/SidebarNav';

import { formatRoutes } from 'utils';
import messages from './messages';

import { tool as actions } from './module';
import ToolCalculator from './Calculator';

export const Calculator = ToolCalculator;

export function Tool(props) {
  const {
    children,
    toggleSidebar,
    tool,
    route: {
      path,
      childRoutes,
    },
  } = props;

  const isSidebarVisible = tool.get('isSidebarVisible');
  const routes = formatRoutes(path, childRoutes, messages);

  return (
    <App centered={false}>
      <Split
        fixed
        flex="right"
        priority="right"
      >
        {isSidebarVisible &&
        <SidebarNav
          routes={routes}
          bgColor="accent-2-t"
          className="dashboard-sidebar"
          toggleSidebar={toggleSidebar}
          title={{
            main: `${process.env.APP_NAME}`,
          }}
        />
        }
        <div>
          {children}
        </div>
      </Split>
    </App>
  );
}

Tool.PropTypes = {
  tool: ImmutablePropTypes.map.isRequired,
};

export const stateToProps = state => ({
  tool: state.tool,
});

export default compose(
  connect(stateToProps, actions),
  injectIntl,
)(Tool);
