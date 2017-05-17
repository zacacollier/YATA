import React from 'react';
import SearchBar from './SearchBar';
let SearchGroup = ({
  formValue,
  handleSearchSubmit,
  values
}) =>
  <SearchBar
    onSubmit={values => handleSearchSubmit(values.search)}
  />
export default SearchGroup;
