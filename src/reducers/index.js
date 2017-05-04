import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import timer from './timerReducer'
import search from './searchReducer'

const reducers = {
  timer,
  search,
  formReducer,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
