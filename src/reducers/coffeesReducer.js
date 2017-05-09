import { REHYDRATE } from 'redux-persist/constants';
import _ from 'lodash';

const initialState = {
  selectedCoffee: {
    isSelected: false,
    times: []
  },
  recentSelectedCoffees: [],
  searchResults: [],
}
// TODO:
// Track times
const coffees = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_API_SUCCESS':
      return {
        ...initialState,
        searchResults: _.toPairs(action.payload).map(item => item[1])
      }
    case 'SELECT_DETAIL':
      return {
        ...state,
        selectedCoffee: {
          ...action.selectedCoffee,
          isSelected: true,
        },
      }
    case REHYDRATE:
      if (action.payload) {
        const { payload } = action
        return {
          ...state,
          recentSelectedCoffees: payload.recentSelectedCoffees,
          selectedCoffee: payload.selectedCoffee,
        }
      }
//     case 'LOCAL_STORAGE_SAVE_SELECTION':
//       return {
//         ...state,
//         recentSelectedCoffees: [
//           ...state.recentSelectedCoffees, action.coffee
//         ],
//       }
    default:
    return state
  }
}
export default coffees;
