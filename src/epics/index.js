import { combineEpics } from 'redux-observable';
import Rx from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'

// const start = () => ({ type: C.START })
// const { WRAP_API_KEY } = process.env
const WRAP_API_KEY = 'qimyp1UHIIqEOcOqvW0bOCB6Q5YZD7TZ'
const WrapApi = (key = WRAP_API_KEY, query) => `https://wrapapi.com/use/zacacollier/coffeereviews/v1/0.1.0?wrapAPIKey=${key}&value=${query}`

const startTimer = action$ =>
  action$.ofType('START')
    .mergeMap(action =>
      Rx.Observable.timer(0, 1000)
      .mapTo({ type: 'TICK' })
      .takeUntil(action$.ofType('STOP'))
    )
const fetchCoffees = (action$, store) =>
  action$.ofType('SEARCH_FORM_REQUEST')
    .mergeMap(({ payload }) => 
      ajax({
        url: WrapApi(WRAP_API_KEY, payload),
        responseType: 'json',
      })
      .map((res, err) => 
        res ? ({
          type: "SEARCH_API_SUCCESS",
          payload: res.response
        }) : ({
          type: "SEARCH_API_ERROR",
          error: err
        }))
    )

const rootEpic = combineEpics(startTimer, fetchCoffees)

export default rootEpic
