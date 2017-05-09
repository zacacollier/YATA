import React from 'react';
import { connect } from 'react-redux';
import CoffeeList from '../components/CoffeeList';
import '../styles/CoffeeListGroup.css'

const CoffeeListGroup = ({
  isFetching, searchResults, selectedCoffee,
}) => searchResults.length
      ? <CoffeeList
          coffees={searchResults}
          selectedCoffee={selectedCoffee}
        />
      : <span className="no-coffee"></span>

const mapStateToProps = (state) => ({
  isFetching: state.search.isFetching,
  searchResults: state.coffees.searchResults,
  selectedCoffee: state.coffees.selectedCoffee,
})

export default connect (mapStateToProps)(CoffeeListGroup);
