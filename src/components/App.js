import React from 'react';
import TimerFace from './TimerFace'
import ButtonGroupContainer from '../containers/ButtonGroupContainer';
import SearchGroupContainer from '../containers/SearchGroupContainer';
import CoffeeListGroupContainer from '../containers/CoffeeListGroupContainer';
import '../styles/App.css'

const App = ({
  timer,
  handleReset, handleStop, handleStart
  }) => (
  <div className="App">
      <CoffeeListGroupContainer />
      <SearchGroupContainer />
    <div className="timer-group">
      <TimerFace />
      <ButtonGroupContainer />
    </div>
  </div>
)

export default App;
