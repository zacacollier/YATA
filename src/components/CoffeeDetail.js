import React from 'react';
import { connect } from 'react-redux';

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
const mapStateToProps = state => ({
  isSelected: state.coffees.isSelected,
})
const mapDispatchToProps = dispatch => ({
  handleDetailSelect: (event, coffee) => {
    event.preventDefault();
    dispatch({ type: 'SELECT_DETAIL', selectedCoffee: coffee })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
