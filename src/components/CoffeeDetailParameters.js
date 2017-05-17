import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/CoffeeListGroup.css';
import '../styles/ButtonGroup.css';

const CoffeeDetailParameters = ({ handleSubmit }) => (
  <form
    className="coffee-detail-parameters"
    onSubmit={handleSubmit}
  >
    <div>
      <label>Dry Dose</label>
      <Field
        name="dose"
        component="input"
        type="text"
        placeholder="(e.g. 19)"
      />
    </div>
    <div>
      <label>Output</label>
      <Field
        name="output"
        component="input"
        type="text"
        placeholder="(e.g. 38)"
      />
    </div>
    <button className="button" type="submit">Save Parameters</button>
  </form>
)

export default reduxForm({ form: 'parameters' })(CoffeeDetailParameters);
