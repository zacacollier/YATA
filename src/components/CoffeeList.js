import React from 'react';
import CoffeeDetail from './CoffeeDetail'

const CoffeeList = ({ coffees }) => (
  <ul>
  {
    coffees.map((coffee, i) =>
      <CoffeeDetail
        key={i}
        coffee={coffee}
      />
    )
  }
  </ul>
);

export default CoffeeList;
