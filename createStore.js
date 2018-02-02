import { createStore, compose, combineReducers } from 'redux';

import reducers from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export default (initialState = {}) => {
  return {
    ...createStore(
      reducers,
      // combineReducers({ ...reducers }),
      initialState,
      composeEnhancers()
    )
  };
};
