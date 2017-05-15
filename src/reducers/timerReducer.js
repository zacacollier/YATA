import * as T from '../constants/actionTypes';
// TODO: countdown option "3..2..1..go!"
const initialState = {
  timer: {
    useCountdown: false,
    isStarted: false,
    isStopped: true,
    seconds: 0,
  },
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case T.START:
      return {
        ...state,
        timer: {
          ...state.timer,
          isStarted: true,
          isStopped: false,
        }
      }
    case T.STOP:
      return {
        ...state,
        timer: {
          ...state.timer,
          isStarted: false,
          isStopped: true,
        }
      }
    case T.RESET:
      return {
        ...state,
        timer: initialState.timer,
      }
    case T.TICK:
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
export default timer;
