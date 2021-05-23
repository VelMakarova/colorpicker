import React, { useState }  from 'react';
import ManualSelect from './Dropdowns/ManualSelect';
import ObtainedSelect from './Dropdowns/ObtainedSelect';

const Colorpicker = ({ colors }) => {
  const [isManual, setManual] = useState(false);
  const [isObtained, setObtained] = useState(false);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  return (
    <div className="colorpicker">
      <div className="colorpicker-header">
        <div className="selected-hex">
          <div className="selected-hex-name">{currentColor}</div>
        </div>
        <button
          className="colorpicker-dropdown-toggler manual"
          onClick={() => setManual(!isObtained)}
        >
          <div className="selected-manual" style={{backgroundColor: currentColor}} />
        </button>
        <button
          className={`colorpicker-dropdown-toggler obtained ${isObtained ? 'is-open' : ''}`}
          onClick={() => setObtained(!isObtained)}
        />
      </div>
      <div className="colorpicker-dropdown">
        { isObtained && 
          <ObtainedSelect 
            colors={colors} 
            setObtained={setObtained} 
            setCurrentColor={setCurrentColor}
          />
        }
        { isManual && 
          <ManualSelect
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            setManual={setManual}
          />
        }
      </div>
    </div>
  )
}

export default Colorpicker;
