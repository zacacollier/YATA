import _ from 'lodash';
const initialState = {
  selectedCoffee: {
    isSelected: false,
  },
  recentSelectedCoffees: [],
  searchResults: [],
}
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
    case 'LOCAL_STORAGE_SAVE_SELECTION':
      return {
        ...state,
        recentSelectedCoffees: [
          ...state.recentSelectedCoffees, action.coffee
        ],
      }
    default:
    return state
  }
}
export default coffees;
