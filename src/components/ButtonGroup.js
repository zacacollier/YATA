import React from 'react';
import _ from 'lodash';
import Button from './Button';
import '../styles/ButtonGroup.css';

const ButtonGroup = (
  {
    coffees, timer,
    handleReset, handleSaveTime, handleStop, handleStart,
  }) => (
  <div className="button-group">
    <Button
      onClick={_.throttle(handleStart, 1000)}
      text='Go'
      isDisabled={timer.isStarted}
    />
    <Button
      onClick={timer.isStarted ? handleStop : handleReset }
      text={timer.isStarted ? 'Stop' : 'Reset' }
      isDisabled={timer.seconds === 0}
    />
    <Button
      onClick={(seconds) => handleSaveTime(seconds)}
      seconds={timer.seconds}
      text={'Save'}
      isDisabled={!coffees.selectedCoffee.isSelected && timer.seconds < 7}
    />
  </div>
);

export default ButtonGroup;
