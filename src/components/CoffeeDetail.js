import React from 'react';

const CoffeeDetail = ({
  // Props
  coffee, className,
  // State
  isSelected,
  // Dispatch
  handleDetailSelect
}) => (
  <div className={className} onClick={(e) => handleDetailSelect(e, coffee)}>
    <h2>{ coffee.coffee }</h2>
    <h3>{ coffee.roaster }</h3>
  </div>
);

export default CoffeeDetail;
