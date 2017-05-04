import React from 'react';
import { connect } from 'react-redux';
import './SearchGroup.css'

let SearchGroup = ({
  formValue,
  handleChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit} className="search-group">
    <div>
      <input
        name="search"
        onChange={handleChange}
        type="text"
      />
    </div>
  </form>
)

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch({ type: 'SEARCH_FORM_CHANGE', payload: event.target.value }),
  handleSubmit: (event) => dispatch({ type: 'SEARCH_FORM_SUBMIT', payload: event.target.value })
})
const mapStateToProps = (state) => ({
  formValue: state.search.formValue,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchGroup);
