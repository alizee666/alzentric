
import { browserHistory } from 'react-router';

// See webpack.resolve.alias for these conditional imports.
import { persistState } from 'persistState';
import ReduxDevTools from 'ReduxDevTools';

import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import reducers from 'modules';

import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';

const sagaMiddleware = createSagaMiddleware();
const routingMiddleware = routerMiddleware(browserHistory);

let middlewares = [
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routingMiddleware),
];

if (process.env.DEBUG) {
  middlewares = middlewares.concat([
    ReduxDevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  ]);
}

const createStoreWithMiddleware = compose(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('modules', () => {
    const nextReducer = require('modules');
    store.replaceReducer(nextReducer);
  });
}

export default store;
