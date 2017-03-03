/* global require */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducers from './reducers';

let middlewarePlugins = [promise(), thunk];

if (process.env.NODE_ENV !== 'production') {
  // logger is just a redux middleware plugin to be used in development
  const logger = require('redux-logger');
  middlewarePlugins = [...middlewarePlugins, logger()];
}

const middleware = applyMiddleware(...middlewarePlugins);

export default createStore(reducers, middleware);
