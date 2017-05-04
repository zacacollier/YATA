import React from 'react';

const Button = ({ isDisabled, onClick, text }) => (
  <button
    className="button"
    disabled={isDisabled}
    onClick={onClick}
  >
    { text }
  </button>
)

export default Button;
