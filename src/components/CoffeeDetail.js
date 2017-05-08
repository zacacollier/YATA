import React from 'react';

const CoffeeDetail = ({ coffee }) => (
  <div>
    <h2>{ coffee.coffee }</h2>
    <h3>{ coffee.roaster }</h3>
  </div>
);

export default CoffeeDetail;
