import * as C from '../constants'
import { combineEpics } from 'redux-observable';

// const start = () => ({ type: C.START })

const timerEpic = action$ =>
  action$.ofType(C.START)
    .delay(1000)
    .mapTo({ type: 'TICK' })

const rootEpic = combineEpics(timerEpic)
export default rootEpic
