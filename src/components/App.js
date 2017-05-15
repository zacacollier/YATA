import React from 'react';
import ButtonGroup from '../containers/ButtonGroup';
import SearchGroup from '../containers/SearchGroup';
import CoffeeListGroupContainer from '../containers/CoffeeListGroupContainer';
import TimerFaceContainer from '../containers/TimerFaceContainer';
import '../styles/App.css'

const App = (props) => (
  <div className="App">
      <CoffeeListGroupContainer />
      <SearchGroup />
    <div className="timer-group">
      <TimerFaceContainer />
      <ButtonGroup />
    </div>
  </div>
)

export default App;
