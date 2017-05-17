import React from 'react';
import CoffeeDetail from './CoffeeDetail';
import CoffeeGraph from './CoffeeGraph';
import "../styles/CoffeeListGroup.css"

// TODO
// const isVisible = (filter, param) => filter[param] ? { display: 'none' } : { display: 'inherit' }

const generateCoffeeDataSets = coffee => ({
  labels: coffee.loggedTimes.map(entry => entry.timeOfDay),
  datasets: [{
      label: coffee.coffee,
      data: coffee.loggedTimes
        .map((entry, index) => ({
          x: entry.timeOfDay,
          y: entry.shot.time,
        })
      ),
    }],
})
const generateOptions = coffee => ({
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Shot Time',
      },
      ticks: {
        stepSize: 5,
        showLabelBackdrop: true,
      }
    }],
  },
})
const CoffeeList = ({ coffees, selectedCoffee }) => (
  <ul className="coffee-list-group">
    {
      selectedCoffee.isSelected
      ? <div>
          <CoffeeDetail
            className={"selected-coffee-detail"}
            coffee={selectedCoffee}
          />
          <CoffeeGraph
            className={"selected-coffee-graph"}
            data={generateCoffeeDataSets(selectedCoffee)}
            options={generateOptions(selectedCoffee)}
          />
        </div>
      : coffees.map((coffee, i) =>
        <CoffeeDetail
          key={i}
          coffee={coffee}
          className={"coffee-detail"}
        />
      )
    }
  </ul>
);

export default CoffeeList;
