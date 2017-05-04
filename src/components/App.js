import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';

const App = ({
  timer,
  handleReset, handleStart
  }) => (
  <div>
    { timer.timer.seconds }
    <Button
      onClick={handleStart}
      text='Start'
    />
    <Button
      onClick={handleReset}
      text='Reset'
    />
  </div>
)

const mapStateToProps = (state) => ({
  timer: state.timer,
})
const mapDispatchToProps = (dispatch) => ({
  handleStart: () => dispatch({ type: 'START' }),
  // handleStart: () => dispatch({ type: 'TICK' }),
  handleReset: () => dispatch({ type: 'RESET' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
