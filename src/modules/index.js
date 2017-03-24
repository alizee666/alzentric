import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tool from 'containers/Tool/module';

// Alphabetical
export default combineReducers({
  tool,
  routing: routerReducer,
});
