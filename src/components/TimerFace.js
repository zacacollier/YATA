import React from 'react';
import { connect } from 'react-redux';
import { displaySec } from '../constants';

const TimerFace = ({ timer }) => (
    <div className="timer">
     { `.${displaySec(timer.seconds)}` }
    </div>
)
const mapStateToProps = (state) => ({
  timer: state.timer.timer,
})

export default connect(mapStateToProps)(TimerFace);
