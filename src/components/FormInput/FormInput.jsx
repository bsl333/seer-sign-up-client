import React from 'react';

import './FormInput.scss';

const renderLabel = (label, value) => {
  return (
    <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
      {label}
    </label>
  );
};

function FormInput({ handleChange, label, readOnly, ...props }) {
  const className = readOnly ? 'form-input read-only' : 'form-input';
  return (
    <div className="group">
      <input
        className={`${className}`}
        onChange={handleChange}
        {...props}
        readOnly={readOnly}
      />
      {renderLabel(label, props.value)}
    </div>
  );
}

export default FormInput;
