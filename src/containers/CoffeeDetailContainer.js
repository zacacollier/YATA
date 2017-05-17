import { connect } from 'react-redux';
import CoffeeDetail from '../components/CoffeeDetail';

const mapStateToProps = state => ({
  isSelected: state.coffees.isSelected,
})
const mapDispatchToProps = dispatch => ({
  handleDetailSelect: (event, coffee) => {
    event.preventDefault();
    dispatch({ type: 'SELECT_DETAIL', selectedCoffee: coffee })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
