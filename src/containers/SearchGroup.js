import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SearchBar from './SearchBar';

let SearchGroup = ({
  formValue,
  handleSearchSubmit,
  values
}) =>
  <SearchBar
    onSubmit={values => handleSearchSubmit(values.search)}
  />

const mapDispatchToProps = (dispatch) => ({
  handleSearchSubmit: data => dispatch({ type: 'SEARCH_FORM_REQUEST', payload: data }),
})
export default reduxForm({ form: 'search' })(connect(null, mapDispatchToProps)(SearchGroup));
