import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SearchBar from '../components/SearchBar';
let SearchGroup = ({
  formValue,
  handleSearchSubmit,
  values
}) =>
  <SearchBar
    handleSubmit={values => handleSearchSubmit(values.search)}
  />

const mapDispatchToProps = (dispatch) => ({
  handleSearchSubmit: (e, data) => {
    e.preventDefault();
    return dispatch({ type: 'SEARCH_FORM_REQUEST', payload: data })
  }
})
export default reduxForm({ form: 'search' })(connect(null, mapDispatchToProps)(SearchGroup));
