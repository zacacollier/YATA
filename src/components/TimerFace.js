import React from 'react';
import { connect } from 'react-redux';
import { displaySec } from '../constants';
import './TimerFace.css'

const TimerFace = ({ timer }) => (
    <div className="timer-face">
     { `.${displaySec(timer.seconds)}` }
    </div>
)
const mapStateToProps = (state) => ({
  timer: state.timer.timer,
})

export default connect(mapStateToProps)(TimerFace);
