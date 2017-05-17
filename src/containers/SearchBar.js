import { reduxForm } from 'redux-form';
import SearchBar from '../components/SearchBar.js'
import '../styles/SearchGroup.css';

export default reduxForm({ form: 'SearchBar', initialValues: { search: '' } })(SearchBar)
