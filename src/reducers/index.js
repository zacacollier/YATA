import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import timer   from './timerReducer';
import search  from './searchReducer';
import coffees from './coffeesReducer';

const rootReducer = combineReducers(
  {
    coffees,
    form,
    search,
    timer,
  }
);
export default rootReducer;
