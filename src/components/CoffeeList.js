import React from 'react';
import { toPairs } from 'lodash/object';
import CoffeeDetail from './CoffeeDetail'

const CoffeeList = ({ coffees }) => (
  <ul>
  {
    toPairs(coffees).map((coffee, i) =>
      <CoffeeDetail
        key={i}
        coffee={coffee}
      />
    )
  }
  </ul>
);

export default CoffeeList;
