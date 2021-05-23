import React from 'react';

const RangeInput = ({value, name, setValue}) => {

  const changeHandler = (e) => {
    setValue(Number(e.target.value));
  }

  return (
    <div className="range-field">
      <input
        className={`range-input ${name}`}
        type="range"
        step="1"
        min="0"
        max="255" 
        name={name}
        value={value}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  )
}

export default RangeInput;
