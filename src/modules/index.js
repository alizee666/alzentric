import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from 'containers/Main/module';
import tool from 'containers/Tool/module';

// Alphabetical
export default combineReducers({
  main,
  tool,
  routing: routerReducer,
});
