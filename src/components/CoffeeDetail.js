import React from 'react';

const CoffeeDetail = ({ coffee }) => (
  <div className="coffee-detail">
    <h2>{ coffee.coffee }</h2>
    <h3>{ coffee.roaster }</h3>
  </div>
);

export default CoffeeDetail;
