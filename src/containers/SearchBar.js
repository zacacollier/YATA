import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './SearchGroup.css'

let SearchBar = ({
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={onSubmit => handleSubmit(onSubmit)} className="search-group">
    <div>
      <Field
        onChange={handleChange}
        name="search"
        component="input"
        type="text"
      />
    </div>
  </form>
)
export default reduxForm({ form: 'SearchBar' })(SearchBar)
