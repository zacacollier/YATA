import { connect } from 'react-redux';
import CoffeeListGroup from '../components/CoffeeListGroup';

const mapStateToProps = (state) => ({
  isFetching: state.search.isFetching,
  searchResults: state.coffees.searchResults,
  selectedCoffee: state.coffees.selectedCoffee,
  showCoffeesList: state.coffees.showCoffeesList,
})

export default connect (mapStateToProps)(CoffeeListGroup);
