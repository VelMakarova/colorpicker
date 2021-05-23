import React from 'react';
import Colorpicker from './components/Colorpicker/index';
const simple = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];

const App = () => {
  return (
    <div className="app">
      <div className="form-field">
        <Colorpicker colors={simple} />
      </div>
    </div>
  );
}

export default App;
