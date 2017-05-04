const initialState = {
  timer: {
    isStarted: false,
    isStopped: true,
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
          isStopped: false,
        }
      }
    case 'STOP':
      return {
        ...state,
        timer: {
          ...state.timer,
          isStarted: false,
          isStopped: true,
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
export default timer;
