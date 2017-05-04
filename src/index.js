import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createCycleMiddleware } from 'redux-cycles';
import { createLogger } from 'redux-logger';
import { run } from '@cycle/run';
import * as C from './constants';
import App from './components/App';

const logger = createLogger();
const initialState = {
  timer: {
    isStarted: false,
    seconds: 0,
  },
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'TICK':
      return {
        ...state,
        timer: {
          ...state.timer,
          seconds: state.timer.seconds += 1,
        },
      }
    default:
      return state
  }
}

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

const renderApp = (Component, reduxStore = 0) => render(
  <Provider store={reduxStore}>
    <Component />
  </Provider>,
  document.getElementById('root')
)
renderApp(App, store);
