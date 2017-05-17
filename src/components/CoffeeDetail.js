import React from 'react';
import CoffeeGraph from './CoffeeGraph';
import CoffeeDetailParameters from './CoffeeDetailParameters';
import { connect } from 'react-redux';

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
const showDetailParameters = (coffee, handleSubmitParams) => {
  if (coffee.isSelected) {
    return (
      <CoffeeDetailParameters
        { ...coffee }
        handleSubmit={handleSubmitParams}
      />
    )
  }
}

const CoffeeDetail = ({
  // Props
  coffee, className,
  // State
  isSelected,
  // Dispatch
  handleDetailSelect, handleSubmitParams,
}) => (
  <div className={className} onClick={(e) => handleDetailSelect(e, coffee)}>
    <h2>{ coffee.coffee }</h2>
    <h3>{ coffee.roaster }</h3>
    <hr />
    { showDetailParameters(coffee, handleSubmitParams) }
    <CoffeeGraph
      data={generateCoffeeDataSets(coffee)}
      options={generateOptions(coffee)}
    />
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
  handleSubmitParams: (event, coffee) => {
    event.preventDefault();
    dispatch({ type: 'HANDLE_SUBMIT_PARAMS', selectedCoffee: coffee })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
