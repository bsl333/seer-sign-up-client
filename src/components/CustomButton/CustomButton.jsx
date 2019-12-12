import React from 'react';

import './CustomButton.scss';

const createClass = (confirm, danger) => {
  let clasName = 'custom-button';
  if (confirm) {
    clasName += ' confirm';
  } else if (danger) {
    clasName += ' danger';
  }
  return clasName;
};

function CustomButton({ children, type, confirm, danger }) {
  return (
    <button className={createClass(confirm, danger)} type={type}>
      {children}
    </button>
  );
}

export default CustomButton;
