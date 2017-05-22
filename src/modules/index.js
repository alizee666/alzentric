import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from 'containers/Main/module';
import tool from 'containers/Tool/module';
import toolCalculator from 'containers/Tool/Calculator/module';

// Alphabetical
export default combineReducers({
  main,
  tool,
  toolCalculator,
  routing: routerReducer,
});
