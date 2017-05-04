import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import App from './components/App';
import rootEpic from './epics';
import rootReducer from './reducers';
import 'rxjs';

const logger = createLogger();

const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(
  rootReducer,
  applyMiddleware(logger, epicMiddleware)
)

const renderApp = (Component, reduxStore = 0) => render(
  <Provider store={reduxStore}>
    <Component />
  </Provider>,
  document.getElementById('root')
)
renderApp(App, store);
