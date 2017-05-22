import React, { Component, PropTypes } from 'react';
import { intlShape, injectIntl } from 'react-intl';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import ToolCalculator from 'components/ToolCalculator';
import { calculator as actions } from './module';

export class Calculator extends Component {

  constructor() {
    super();

    this.onCalculate = this.onCalculate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.clearFormErrors();
  }

  onCalculate(event) {
    event.preventDefault();
    const errors = {};

    if (Object.keys(errors).length) {
      return this.props.setFormErrors(errors);
    }
    this.props.calculatorSystemUpdate();
  }

  onChange({ target }) {
    const attribute = target.getAttribute('name');
    const val = target.value;

    const system = this.props.tool.get('system');
    const updatedSystem = system.set(attribute, val);
    this.props.systemPropUpdated(updatedSystem);
  }


  render() {
    const {
      intl,
      tool,
      toggleSidebar,
    } = this.props;

    const isNavlogoVisible = !tool.get('isSidebarVisible');
    return (
      <ToolCalculator
        intl={intl}
        isNavlogoVisible={isNavlogoVisible}
        toggleSidebar={toggleSidebar}
        onCalculate={this.onCalculate}
        system={tool.get('system')}
        errors={tool.get('errors')}
        onChange={this.onChange}
      />);
  }
}

Calculator.propTypes = {
  tool: ImmutablePropTypes.map.isRequired,
  intl: intlShape.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export const stateToProps = state => ({
  tool: state.tool,
  toolCalculator: state.toolCalculator,
});

export default compose(
  connect(stateToProps, actions),
  injectIntl,
)(Calculator);
