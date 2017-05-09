import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';

import App from './components/App';
import rootEpic from './epics';
import rootReducer from './reducers';
import 'rxjs';
const logger = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(logger, epicMiddleware),
    autoRehydrate()
  )
);
persistStore(store);
const renderApp = (Component, reduxStore = 0) => render(
  <Provider store={reduxStore}>
    <Component />
  </Provider>,
  document.getElementById('root')
);
renderApp(App, store);
