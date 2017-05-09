import React from 'react';
import { connect } from 'react-redux';

const SelectedCoffeeDetail = ({ coffee }) => (
  <div className="coffee-detail">
    <h2>{ coffee.coffee }</h2>
    <h3>{ coffee.roaster }</h3>
  </div>
);

export default SelectedCoffeeDetail;
