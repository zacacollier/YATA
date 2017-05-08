const initialState = {
  formValue: '',
  searchResults: [],
  searchError: ''
}
const search = (state = initialState, action) => {
  switch (action.type) {
    case '@@redux-form/CHANGE':
      return {
        ...state,
        formValue: action.payload
      }
    case 'SEARCH_API_SUCCESS':
      return {
        ...initialState,
        searchResults: action.payload
      }
    default:
    return state
  }
}
export default search;
