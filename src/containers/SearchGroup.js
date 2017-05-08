import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SearchBar from './SearchBar';

let SearchGroup = ({
  formValue,
  handleSearchSubmit,
}) => (
  <SearchBar
    onSubmit={formValue => handleSearchSubmit(formValue)}
    value={formValue}
  />
)
const mapDispatchToProps = (dispatch) => ({
  handleSearchSubmit: data => dispatch({ type: 'SEARCH_FORM_REQUEST', payload: data.search }),
})
const mapStateToProps = (state) => ({
  formValue: state.search.formValue,
})
export default reduxForm({ form: 'search' })(connect(mapStateToProps, mapDispatchToProps)(SearchGroup));
