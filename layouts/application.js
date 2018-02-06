import React, { Fragment } from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import createStore from '../createStore';

const store = createStore();

if (__DEV__ && module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
}

export default ({ children, title = '' }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Provider store={store}>
      <Fragment>{children}</Fragment>
    </Provider>
  </Fragment>
);
