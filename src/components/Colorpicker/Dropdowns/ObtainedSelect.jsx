import React, {useRef, useCallback, useEffect} from 'react';

const ObtainedSelect = ({ colors, setObtained, setCurrentColor }) => {
  const dropdownRef = useRef(null); 
  const setObtainedColor = (color) => {
    setCurrentColor(color);
    setObtained(false);
  }
  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setObtained(false);
    };
  }, [setObtained]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="droprown-content" ref={dropdownRef}>
      <ul className="colors-list">
        {colors.map(color => {
          return (
            <li className="color-item" key={color} onClick={() => setObtainedColor(color)}>
              <span className="color-item-name">{color}</span>
              <div className="color-item-thumb" style={{backgroundColor: color}} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ObtainedSelect;
