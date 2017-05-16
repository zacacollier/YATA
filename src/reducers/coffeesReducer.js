import * as T from '../constants/actionTypes';
import { REHYDRATE } from 'redux-persist/constants';
import _ from 'lodash';

const initialState = {
  selectedCoffee: {
    isSelected: false,
    loggedTimes: [],
  },
  recentSelectedCoffees: [],
  searchResults: [],
  showCoffeesList: false,
}
// TODO:
// Track times
const coffees = (state = initialState, action) => {
  switch (action.type) {
    case T.SEARCH_API_SUCCESS:
      return {
        ...initialState,
        // TODO: find a better way here
        searchResults: _.toPairs(action.payload).map(item => item[1]),
        showCoffeesList: true,
      }
    case T.SELECT_DETAIL:
      return {
        ...state,
        selectedCoffee: {
          ...action.selectedCoffee,
          isSelected: true,
          loggedTimes: [],
        },
        recentSelectedCoffees: [
          ...state.recentSelectedCoffees,
          action.selectedCoffee,
        ],
        showCoffeesList: true,
      }
    case T.SAVE_CURRENT_TIME:
      return {
        ...state,
        selectedCoffee: {
          ...state.selectedCoffee,
          loggedTimes: [
            ...state.selectedCoffee.loggedTimes,
            action.payload
          ],
        },
      }
    case REHYDRATE:
      if (action.payload) {
        const { payload } = action
        return {
          ...state,
          recentSelectedCoffees: payload.coffees.recentSelectedCoffees,
          selectedCoffee: payload.coffees.selectedCoffee,
          showCoffeesList: true,
        }
      }
      else break;
    default:
    return state
  }
}
export default coffees;
