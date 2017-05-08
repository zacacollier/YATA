import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import timer from './timerReducer'
import search from './searchReducer'

const rootReducer = combineReducers(
  {
    form,
    timer,
    search,
  }
);
export default rootReducer
