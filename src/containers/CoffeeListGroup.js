import React, { Component } from 'react';
import { connect } from 'react-redux';
import CoffeeList from '../components/CoffeeList';
import '../styles/CoffeeListGroup.css'

// TODO hide the damn list
class CoffeeListGroup extends Component {
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
const mapStateToProps = (state) => ({
  isFetching: state.search.isFetching,
  searchResults: state.coffees.searchResults,
  selectedCoffee: state.coffees.selectedCoffee,
  showCoffeesList: state.coffees.showCoffeesList,
})

export default connect (mapStateToProps)(CoffeeListGroup);
