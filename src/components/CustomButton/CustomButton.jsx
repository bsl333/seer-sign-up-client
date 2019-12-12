import React from 'react';

import './CustomButton.scss';

const createClass = (confirm, danger, disabled) => {
  let className = 'custom-button';
  if (disabled) {
    className += ' disabled';
  }
  if (confirm) {
    className += ' confirm';
  } else if (danger) {
    className += ' danger';
  }
  return className;
};

function CustomButton({ children, type, confirm, danger, disabled }) {
  return (
    <button
      className={createClass(confirm, danger, disabled)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CustomButton;
