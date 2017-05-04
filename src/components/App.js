import React from 'react';
import { connect } from 'react-redux';

import Button from '../containers/Button';

const App = ({
  seconds,
  handleClick
  }) => (
  <div>
    { seconds }
    <Button
      onClick={handleClick}
    />
  </div>
)

const mapStateToProps = (state) => ({
  seconds: state.timer.seconds,
})
const mapDispatchToProps = (dispatch) => ({
  handleClick: () => dispatch({ type: 'TICK' })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
