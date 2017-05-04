import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';

const App = ({
  seconds,
  handleReset, handleStart
  }) => (
  <div>
    { seconds }
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
  seconds: state.timer.seconds,
})
const mapDispatchToProps = (dispatch) => ({
  handleStart: () => dispatch({ type: 'START' }),
  // handleStart: () => dispatch({ type: 'TICK' }),
  handleReset: () => dispatch({ type: 'RESET' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
