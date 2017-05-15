import React from 'react';
import TimerFace from './TimerFace'
import ButtonGroup from '../containers/ButtonGroup';
import SearchGroup from '../containers/SearchGroup';
import CoffeeListGroupContainer from '../containers/CoffeeListGroupContainer';
import '../styles/App.css'

const App = ({
  timer,
  handleReset, handleStop, handleStart
  }) => (
  <div className="App">
      <CoffeeListGroupContainer />
      <SearchGroup />
    <div className="timer-group">
      <TimerFace />
      <ButtonGroup />
    </div>
  </div>
)

export default App;
