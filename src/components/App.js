import React from 'react';
import { connect } from 'react-redux';

import TimerFace from './TimerFace'
import Button from './Button';
import ButtonGroup from '../containers/ButtonGroup';
import { displayMin, displaySec } from '../constants';
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
