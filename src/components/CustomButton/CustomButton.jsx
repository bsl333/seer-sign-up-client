import React from 'react';

import './CustomButton.scss';

function CustomButton({ children, type, disabled, onClick }) {
  const className = disabled ? 'custom-button disabled' : 'custom-button';
  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
