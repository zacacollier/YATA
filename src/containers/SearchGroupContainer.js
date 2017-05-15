import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import SearchGroup from '../components/SearchGroup';

const mapDispatchToProps = (dispatch) => ({
  handleSearchSubmit: data => dispatch({ type: 'SEARCH_FORM_REQUEST', payload: data }),
})
export default reduxForm({ form: 'search' })(connect(null, mapDispatchToProps)(SearchGroup));
