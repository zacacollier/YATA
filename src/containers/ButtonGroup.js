import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import _ from 'lodash';

const ButtonGroup = (
  {
    timer,
    handleReset, handleStop, handleStart
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
  </div>
)

const mapStateToProps = (state) => ({
  timer: state.timer.timer,
})
const mapDispatchToProps = (dispatch) => ({
  handleStart: () => dispatch({ type: 'START' }),
  handleStop: () => dispatch({ type: 'STOP' }),
  handleReset: () => dispatch({ type: 'RESET' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup)
