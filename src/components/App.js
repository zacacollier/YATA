import React from 'react';
import TimerFace from './TimerFace'
import ButtonGroup from '../containers/ButtonGroup';
import './App.css'

const App = ({
  timer,
  handleReset, handleStop, handleStart
  }) => (
  <div className="App">
    <TimerFace />
    <ButtonGroup />
  </div>
)

export default App;
