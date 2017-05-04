const initialState = {
  fetchStatus: {
    fetching: false,
    success: false,
    error: '',
  },
}
const search = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FORM_CHANGE':
      return {
        ...state,
        formValue: action.payload
      }
    case 'SEARCH_FORM_SUBMIT':
      return {
        ...state,
        fetchStatus: {
          ...state.fetchStatus,
          fetching: true,
        }
      }
    default:
    return state
  }
}
export default search;
