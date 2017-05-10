import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import ImmutablePropTypes from 'react-immutable-proptypes';

import App from 'grommet/components/App';

import { tool as actions } from './module';

export function Tool(props) {
  return (
    <App centered={false}>
        <div>
          Calculator
        </div>
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
