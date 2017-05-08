import React from 'react';
import { connect } from 'react-redux';
import CoffeeList from '../components/CoffeeList';
import Loader from 'halogen/PulseLoader';
import '../styles/CoffeeListGroup.css'

const CoffeeListGroup = ({
  isFetching, searchResults,
}) => (
  <div className="coffee-list-group">
  {
    isFetching
    ? <Loader color="#302505" size="16px" />
    : <CoffeeList coffees={searchResults} />
  }
  </div>
);

const mapStateToProps = (state) => ({
  searchResults: state.search.searchResults,
  isFetching: state.search.isFetching
})

export default connect (mapStateToProps)(CoffeeListGroup);
