import React from 'react';
import { reduxForm, Field } from 'redux-form';
import '../styles/SearchGroup.css';

const SearchBar = ({
  handleChange, handleSubmit, values
}) =>
  <form onSubmit={handleSubmit} className="search-group">
    <div>
      <Field
        onChange={handleChange}
        name="search"
        component="input"
        type="text"
      />
    </div>
  </form>

export default reduxForm({ form: 'SearchBar' })(SearchBar)
