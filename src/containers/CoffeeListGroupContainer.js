import React, { Component } from 'react';
import { connect } from 'react-redux';
import CoffeeList from '../components/CoffeeList';
import CoffeeListGroup from '../components/CoffeeListGroup';
import '../styles/CoffeeListGroup.css'

const mapStateToProps = (state) => ({
  isFetching: state.search.isFetching,
  searchResults: state.coffees.searchResults,
  selectedCoffee: state.coffees.selectedCoffee,
  showCoffeesList: state.coffees.showCoffeesList,
})

export default connect (mapStateToProps)(CoffeeListGroup);
