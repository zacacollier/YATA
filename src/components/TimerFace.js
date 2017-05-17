import React from 'react';
import { displaySec } from '../constants';
import '../styles/TimerFace.css'

const TimerFace = ({ timer }) => (
    <div className="timer-face">
     { `.${displaySec(timer.seconds)}` }
    </div>
)
export default TimerFace;
