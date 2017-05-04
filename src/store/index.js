import { compose,
         createStore,
         applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import rootEpic from '../epics';
import rootReducer from '../reducers';

const logger = createLogger();
const epicMiddleware = createEpicMiddleware(rootEpic)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  applyMiddleware(logger, epicMiddleware)
);

export default store;
