import React from 'react';
import { Field } from 'redux-form';
import '../styles/SearchGroup.css';

const SearchBar = ({
  handleChange, handleSubmit, reset, values
}) =>
  <form
    onSubmit={handleSubmit}
    className="search-group"
    >
    <div>
      <Field
        onChange={handleChange}
        name="search"
        component="input"
        type="text"
      />
    </div>
  </form>

export default SearchBar;
