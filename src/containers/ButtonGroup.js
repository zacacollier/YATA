import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Button from '../components/Button';
import * as T from '../constants/actionTypes';
import '../styles/ButtonGroup.css';

const ButtonGroup = (
  {
    coffees, timer,
    handleReset, handleSaveTime, handleStop, handleStart,
  }) => (
  <div className="button-group">
    <Button
      onClick={_.throttle(handleStart, 1000)}
      text='Go'
      isDisabled={timer.isStarted}
    />
    <Button
      onClick={timer.isStarted ? handleStop : handleReset }
      text={timer.isStarted ? 'Stop' : 'Reset' }
      isDisabled={timer.seconds === 0}
    />
    <Button
      onClick={(timer) => handleSaveTime(timer.seconds)}
      text={'Save'}
      isDisabled={coffees.selectedCoffee && timer.seconds > 7}
    />
  </div>
)

const mapStateToProps = (state) => ({
  timer: state.timer.timer,
  coffees: state.coffees,
})
const mapDispatchToProps = (dispatch) => ({
  handleSaveTime: (seconds) => dispatch({ type: T.SAVE_CURRENT_TIME, payload: seconds }),
  handleStart:    () => dispatch({ type: T.START }),
  handleStop:     () => dispatch({ type: T.STOP }),
  handleReset:    () => dispatch({ type: T.RESET }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup)
