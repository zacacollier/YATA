const initialState = {
  searchResults: [],
  searchError: '',
  isFetching: null,
}
const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FORM_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
    case 'SEARCH_API_SUCCESS':
      return {
        ...initialState
      }
    default:
    return state
  }
}
export default search;
