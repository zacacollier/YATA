import { combineReducers } from 'redux';

const initialState = {
  timer: {
    isStarted: false,
    seconds: 0,
  },
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        timer: {
          ...state.timer,
          isStarted: true,
        }
      }
    case 'STOP':
      return {
        ...state,
        timer: {
          ...state.timer,
          isStarted: false,
        }
      }
    case 'RESET':
      return {
        ...state,
        timer: initialState.timer,
      }
    case 'TICK':
      return {
        ...state,
        timer: {
          ...state.timer,
          seconds: state.timer.seconds + 1,
        },
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({ timer })
export default rootReducer
