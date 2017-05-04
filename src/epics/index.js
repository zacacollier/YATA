import * as C from '../constants'
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable'

// const start = () => ({ type: C.START })

const startTimer = action$ =>
  action$.ofType('START')
    .mergeMap(action =>
      Observable.timer(0, 1000)
      .mapTo({ type: 'TICK' })
      .takeUntil(action$.ofType('STOP'))
    )
// const resetTimer = action$ =>
//   action$.ofType('RESET')

const rootEpic = combineEpics(startTimer)

export default rootEpic
