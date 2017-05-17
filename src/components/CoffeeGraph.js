import React from 'react';
import { Line } from 'react-chartjs-2';

const CoffeeGraph = ({ data, options }) => (
  <div className="coffee-detail-graph">
    <Line
      data={data}
      options={options}
    />
  </div>
)

export default CoffeeGraph;
