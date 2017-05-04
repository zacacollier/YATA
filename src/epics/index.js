import * as C from '../constants'
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable'

// const start = () => ({ type: C.START })

const timerEpic = (action$) =>
  action$.ofType('START')
    .mergeMap(action =>
      Observable.timer(0, 1000)
      .mapTo({ type: 'TICK' })
    )

const rootEpic = combineEpics(timerEpic)

export default rootEpic
