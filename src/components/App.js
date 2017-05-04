import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';
import { displayMin, displaySec } from '../constants';
import './App.css'
// TODO: Resume the timer, prevent extra timers from being launched
const App = ({
  timer,
  handleReset, handleStop, handleStart
  }) => (
  <div className="App">
    <div className="timer">
     { `.${displaySec(timer.timer.seconds)}` }
    </div>
    <div className="button-group">
      <Button
        onClick={handleStart}
        text='Go'
        isDisabled={timer.timer.isStarted}
      />
      <Button
        onClick={timer.timer.isStarted ? handleStop : handleReset }
        text={timer.timer.isStarted ? 'Stop' : 'Reset' }
        isDisabled={timer.timer.seconds === 0}
      />
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  timer: state.timer,
})
const mapDispatchToProps = (dispatch) => ({
  handleStart: () => dispatch({ type: 'START' }),
  handleStop: () => dispatch({ type: 'STOP' }),
  handleReset: () => dispatch({ type: 'RESET' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
