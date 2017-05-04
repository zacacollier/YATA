import React from 'react';
import { connect } from 'react-redux';

const Button = ({ onClick }) => (
  <button onClick={onClick}>
    Start
  </button>
)


export default Button;
