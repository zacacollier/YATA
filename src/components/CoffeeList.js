import React from 'react';
import CoffeeDetail from './CoffeeDetail'
import "../styles/CoffeeListGroup.css"

// TODO
// const isVisible = (filter, param) => filter[param] ? { display: 'none' } : { display: 'inherit' }

const CoffeeList = ({ coffees, selectedCoffee }) => (
  <ul className="coffee-list-group">
    {
      selectedCoffee.isSelected ? <span></span> : coffees.map((coffee, i) =>
        <CoffeeDetail
          key={i}
          coffee={coffee}
          className={"coffee-detail"}
        />
      )
    }
  { selectedCoffee.isSelected && <CoffeeDetail className={"selected-coffee-detail"} coffee={selectedCoffee} /> }
  </ul>
);

export default CoffeeList;
