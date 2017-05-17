import React from 'react';
import ButtonGroup from '../containers/ButtonGroup';
import SearchGroup from '../components/SearchGroup';
import CoffeeListGroupContainer from '../containers/CoffeeListGroupContainer';
import TimerFaceContainer from '../containers/TimerFaceContainer';
import '../styles/App.css'

const App = (props) => (
  <div className="App">
      <div className="glow">
        <h1>Coffee Time</h1>
      </div>
      <CoffeeListGroupContainer />
      <SearchGroup />
    <div className="timer-group">
      <TimerFaceContainer />
      <ButtonGroup />
    </div>
  </div>
)

export default App;
