import React, { Component } from 'react';
import CoffeeList from './CoffeeList';
import '../styles/CoffeeListGroup.css'

// TODO hide the damn list
export default class CoffeeListGroup extends Component {
  componentWillReceiveProps(nextProps) {
    nextProps && (this.props = { ...nextProps })
  }
  render(props) {
    const { /*isFetching,*/ searchResults, selectedCoffee, showCoffeesList } = this.props;
    return showCoffeesList
          ? <CoffeeList
              coffees={searchResults}
              selectedCoffee={selectedCoffee}
            />
          : <span className="no-coffee"></span>
  }
}
