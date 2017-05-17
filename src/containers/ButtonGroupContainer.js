import { connect } from 'react-redux';
import _ from 'lodash';
import ButtonGroup from '../components/ButtonGroup';
import * as T from '../constants/actionTypes';
import '../styles/ButtonGroup.css';

const mapStateToProps = (state) => ({
  timer: state.timer.timer,
  coffees: state.coffees,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSaveTime: (s, ownProps) => console.log(s, ownProps),
  //handleSaveTime: (ownProps) => dispatch({ type: T.SAVE_CURRENT_TIME, payload: ownProps.timer }),
  handleStart:    () => dispatch({ type: T.START }),
  handleStop:     () => dispatch({ type: T.STOP }),
  handleReset:    () => dispatch({ type: T.RESET }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup)
