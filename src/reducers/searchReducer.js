const initialState = {
  formValue: '',
}
const search = (state = initialState, action) => {
  switch (action.type) {
    case '@@redux-form/CHANGE':
      return {
        ...state,
        formValue: action.payload
      }
    default:
    return state
  }
}
export default search;
