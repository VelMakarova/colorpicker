import React, { useState, useEffect, useRef, useCallback } from 'react';
import RangeInput from '../RangeInput';
import { hexToRgb, rgbToHex } from '../../../helpers/index';

const ManualSelect = ({ currentColor, setCurrentColor, setManual }) => {
  const [red, setRed] = useState(hexToRgb(currentColor).r);
  const [green, setGreen] = useState(hexToRgb(currentColor).g);
  const [blue, setBlue] = useState(hexToRgb(currentColor).b);
  const keepColor = useRef(currentColor);
  const dropdownRef = useRef(null);

  const handleSave = () => {
    setManual(false)
  };
  
  const handleCancel = () => {
    setCurrentColor(keepColor.current);
    setManual(false)
  };

  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setManual(false);
      setCurrentColor(keepColor.current);
    };
  }, [setManual, setCurrentColor]);
  
  useEffect(() => {
    const newColor = rgbToHex(red, green, blue);
    setCurrentColor(newColor)
  }, [red, green, blue, setCurrentColor]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div className="droprown-content" ref={dropdownRef}>
        <RangeInput value={red} name='red' setValue={setRed} />
        <RangeInput value={green} name='green' setValue={setGreen} />
        <RangeInput value={blue} name='blue' setValue={setBlue} />
      </div>
      <div className="dropdown-controls">
        <button className="dropdown-control" onClick={handleCancel}>Cancel</button>
        <button className="dropdown-control" onClick={handleSave}>Save</button>
      </div>
    </>
  )
}

export default ManualSelect;
