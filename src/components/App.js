import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';

// TODO: Resume the timer, prevent extra timers from being launched
const App = ({
  timer,
  handleReset, handleStop, handleStart
  }) => (
  <div>
    { timer.timer.seconds }
    <Button
      onClick={handleStart}
      text='Go'
      isDisabled={timer.timer.isStarted}
    />
    <Button
      onClick={timer.timer.isStarted ? handleStop : handleReset }
      text={timer.timer.isStarted ? 'Stop' : 'Reset' }
    />
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
